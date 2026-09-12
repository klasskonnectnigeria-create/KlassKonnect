import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, ScrollView, Text, TouchableOpacity, ActivityIndicator,
  KeyboardAvoidingView, Platform, FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../store/authStore';
import { useContentStore } from '../store/contentStore';
import { useOfflineStore } from '../store/offlineStore';
import { useGamificationStore } from '../store/gamificationStore';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { GamificationNotification } from '../components/GamificationNotification';
import { colors, spacing, typography, borderRadius } from '../constants/colors';
import { API_URL } from '../config/api';
import { offlineApiClient } from '../services/offlineApiClient';
import { gamificationService } from '../services/gamificationService';

export function TopicDetailsScreen({ route, navigation }) {
  const router = useRouter();
  const { topicId, topicName } = route.params;
  const { token, student } = useAuthStore();
  const { currentTopic, fetchTopicDetails } = useContentStore();
  const { isOnline } = useOfflineStore();
  const { updateAfterPointsEarned } = useGamificationStore();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('content'); // 'content', 'chat'
  const [agentType, setAgentType] = useState('tutor'); // 'tutor', 'practice', 'assessment', 'exam_prep'
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [chatLoading, setChatLoading] = useState(false);
  const [unlockedBadge, setUnlockedBadge] = useState(null);
  const [messageCount, setMessageCount] = useState(0);
  const isExamPrepEligible = student?.grade === 'SS3';

  useEffect(() => {
    loadTopicDetails();
    loadChatHistory();
  }, [topicId, student?.id]);

  const loadTopicDetails = async () => {
    setLoading(true);
    try {
      await fetchTopicDetails(API_URL, token, topicId);
    } catch (error) {
      console.error('Error loading topic:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadChatHistory = async () => {
    if (!student?.id) return;
    try {
      const history = await offlineApiClient.getConversationHistory(student.id, topicId, token);
      const hydrated = [];
      (history || []).forEach((row, index) => {
        if (row.user_message) {
          hydrated.push({
            id: `history-${index}-user`,
            type: 'user',
            content: row.user_message
          });
        }
        // Older rows may carry an empty ai_response left over from a since-removed
        // premature save (the exchange was written before the AI reply arrived) -
        // skip those so we don't render a blank assistant bubble.
        if (row.ai_response) {
          hydrated.push({
            id: `history-${index}-assistant`,
            type: 'assistant',
            content: row.ai_response,
            agentType: row.agent_type
          });
        }
      });
      setChatMessages(hydrated);
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    const messageId = Date.now();

    // Show user message immediately
    setChatMessages((prev) => [...prev, {
      id: messageId,
      type: 'user',
      content: userMessage
    }]);
    setMessage('');
    setChatLoading(true);

    // Save the user's message right away (with an empty response for now) so it
    // survives a crash before the reply arrives; filled in below once the real
    // response is in, rather than inserting a second row for the same exchange.
    let conversationRowId = null;
    if (student?.id) {
      try {
        conversationRowId = await offlineApiClient.saveConversation(
          student.id,
          topicId,
          userMessage,
          '',
          agentType
        );
      } catch (error) {
        console.error('Error saving user message:', error);
      }
    }

    try {
      // Use offline-aware API client for chat
      const requestStart = Date.now();
      const data = await offlineApiClient.post(
        '/api/agents/chat',
        {
          message: userMessage,
          topicId,
          agentType,
          // Carried through to the offline queue (if this request ends up queued) so
          // syncManager can update this exact local row once the real response arrives,
          // instead of the response being lost when the sync succeeds later.
          conversationRowId
        },
        token
      );
      const requestTime = Date.now() - requestStart;
      console.log(`⏱️ Chat API response time: ${requestTime}ms (${(requestTime/1000).toFixed(2)}s)`);

      if (data && data.response) {
        setChatMessages((prev) => [...prev, {
          id: Date.now(),
          type: 'assistant',
          content: data.response,
          agentType: data.agentType,
          isQueued: data.isQueued
        }]);

        // Fill in the AI response on the row already saved above, instead of
        // inserting a second row for the same exchange
        if (student?.id && !data.isQueued) {
          if (conversationRowId != null) {
            await offlineApiClient.updateConversation(
              conversationRowId,
              data.response,
              data.agentType || 'tutor'
            );
          } else {
            // Fallback: the initial save above failed or was skipped - save now
            // so the exchange isn't lost entirely.
            await offlineApiClient.saveConversation(
              student.id,
              topicId,
              userMessage,
              data.response,
              data.agentType || 'tutor'
            );
          }
        }

        // NEW: Handle gamification data from chat endpoint response
        if (data.gamification && student?.id && !data.isQueued) {
          const gamif = data.gamification;

          // Update store with new stats
          await updateAfterPointsEarned(
            student.id,
            gamif.pointsEarned,
            gamif.level,
            gamif.currentStreak,
            gamif.badgesUnlocked || []
          );

          // Show gamification notification
          setUnlockedBadge(gamif);

          console.log(`✨ Earned ${gamif.pointsEarned} points! Total: ${gamif.totalPoints} (Level ${gamif.level})`);
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // isHttpError means the server was reached and rejected the request (bad
      // input, auth failure, a real backend error) - not a connectivity problem,
      // so don't tell the student to check their connection when that's not it.
      const content = error?.isHttpError
        ? "Something went wrong on our end and your message wasn't sent. Please try again."
        : 'Error: Unable to send message. Please check your connection.';
      setChatMessages((prev) => [...prev, {
        id: Date.now(),
        type: 'assistant',
        content
      }]);
    } finally {
      setChatLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      {/* Gamification Notification */}
      <GamificationNotification
        gamification={unlockedBadge}
        onDismiss={() => setUnlockedBadge(null)}
      />

      {/* Header */}
      <SafeAreaView edges={['top']} style={styles.headerSafeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={[styles.backArrow, typography.h3]}>←</Text>
          </TouchableOpacity>

          <Text style={[styles.title, typography.h2]} numberOfLines={1}>
            {topicName}
          </Text>

          {!isOnline && (
            <View style={styles.offlineBadge}>
              <MaterialCommunityIcons name="wifi-off" size={14} color={colors.text.inverse} />
            </View>
          )}
        </View>
      </SafeAreaView>

      {/* Tab Navigation */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'content' && styles.activeTab]}
          onPress={() => setActiveTab('content')}
        >
          <Text style={[
            styles.tabLabel,
            typography.subtitle2,
            activeTab === 'content' && styles.activeTabLabel
          ]}>
            Content
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'chat' && styles.activeTab]}
          onPress={() => setActiveTab('chat')}
        >
          <Text style={[
            styles.tabLabel,
            typography.subtitle2,
            activeTab === 'chat' && styles.activeTabLabel
          ]}>
            Chat
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content Tab */}
      {activeTab === 'content' && (
        <ScrollView style={styles.contentArea} contentContainerStyle={styles.contentContainer}>
          {/* Learning Outcome */}
          <Card>
            <Text style={[styles.sectionTitle, typography.subtitle2]}>Learning Outcome</Text>
            <Text style={[styles.sectionContent, typography.body2]}>
              {currentTopic?.learning_outcome}
            </Text>
          </Card>

          {/* Focal Competency */}
          <Card>
            <Text style={[styles.sectionTitle, typography.subtitle2]}>What You'll Learn</Text>
            <Text style={[styles.sectionContent, typography.body2]}>
              {currentTopic?.focal_competency}
            </Text>
          </Card>

          {/* Knowledge */}
          {currentTopic?.content?.knowledge && (
            <Card>
              <Text style={[styles.sectionTitle, typography.subtitle2]}>Knowledge</Text>
              <Text style={[styles.sectionContent, typography.body2]}>
                {currentTopic.content.knowledge}
              </Text>
            </Card>
          )}

          {/* Skills */}
          {currentTopic?.content?.skills && (
            <Card>
              <Text style={[styles.sectionTitle, typography.subtitle2]}>Skills</Text>
              <Text style={[styles.sectionContent, typography.body2]}>
                {currentTopic.content.skills}
              </Text>
            </Card>
          )}

          {/* Learning Activities */}
          {currentTopic?.learningActivities?.length > 0 && (
            <Card>
              <Text style={[styles.sectionTitle, typography.subtitle2]}>Activities</Text>
              {currentTopic.learningActivities.map((activity, idx) => (
                <Text key={idx} style={[styles.activityItem, typography.body2]}>
                  • {activity.activity_description}
                </Text>
              ))}
            </Card>
          )}

          {/* Evaluation Guide */}
          {currentTopic?.evaluationGuide && (
            <Card>
              <Text style={[styles.sectionTitle, typography.subtitle2]}>You'll Be Able To</Text>
              <Text style={[styles.sectionContent, typography.body2]}>
                {currentTopic.evaluationGuide}
              </Text>
            </Card>
          )}
        </ScrollView>
      )}

      {/* Chat Tab */}
      {activeTab === 'chat' && (
        <>
          {/* Agent Type Selector */}
          <View style={styles.agentSelector}>
            <Text style={[styles.agentLabel, typography.caption]}>Learning Mode:</Text>
            <View style={styles.agentButtonsRow}>
              {[
                { type: 'tutor', icon: 'account-tie-voice-outline', label: 'Tutor' },
                { type: 'practice', icon: 'pencil-outline', label: 'Practice' },
                { type: 'assessment', icon: 'clipboard-check-outline', label: 'Test' },
                ...(isExamPrepEligible ? [{ type: 'exam_prep', icon: 'school-outline', label: 'Exam Prep' }] : [])
              ].map(({ type, icon, label }) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.agentButton,
                    agentType === type && styles.agentButtonActive
                  ]}
                  onPress={() => setAgentType(type)}
                >
                  <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={agentType === type ? colors.text.inverse : colors.text.secondary}
                    style={styles.agentButtonIcon}
                  />
                  <Text style={[
                    styles.agentButtonLabel,
                    typography.caption,
                    agentType === type && styles.agentButtonLabelActive
                  ]}>
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <ScrollView style={styles.chatArea}>
            {chatMessages.length === 0 && (
              <View style={styles.emptyState}>
                <Text style={[styles.emptyStateTitle, typography.subtitle1]}>
                  {agentType === 'tutor' && 'Welcome to AI Tutor'}
                  {agentType === 'practice' && "Let's Practice"}
                  {agentType === 'assessment' && 'Test Your Knowledge'}
                  {agentType === 'exam_prep' && 'WAEC/UTME Exam Prep'}
                </Text>
                <Text style={[styles.emptyStateText, typography.body2]}>
                  {agentType === 'tutor' && `Ask me anything about ${topicName}. I'm here to help you learn!`}
                  {agentType === 'practice' && `Let's work through some problems about ${topicName} together!`}
                  {agentType === 'assessment' && `Answer these questions to test your understanding of ${topicName}.`}
                  {agentType === 'exam_prep' && `Prepare for WAEC/UTME exams with past questions and strategies for ${topicName}.`}
                </Text>
                <View style={styles.suggestedQuestions}>
                  <Text style={[styles.suggestLabel, typography.body2]}>Try asking:</Text>
                  {agentType === 'tutor' && (
                    <>
                      <Text style={[styles.suggestion, typography.body2]}>• Explain {topicName}</Text>
                      <Text style={[styles.suggestion, typography.body2]}>• Give me an example</Text>
                      <Text style={[styles.suggestion, typography.body2]}>• Show me a real-world use</Text>
                    </>
                  )}
                  {agentType === 'practice' && (
                    <>
                      <Text style={[styles.suggestion, typography.body2]}>• Give me a problem</Text>
                      <Text style={[styles.suggestion, typography.body2]}>• Let's solve a question</Text>
                      <Text style={[styles.suggestion, typography.body2]}>• Make it harder</Text>
                    </>
                  )}
                  {agentType === 'assessment' && (
                    <>
                      <Text style={[styles.suggestion, typography.body2]}>• Start a quiz</Text>
                      <Text style={[styles.suggestion, typography.body2]}>• Test me on {topicName}</Text>
                      <Text style={[styles.suggestion, typography.body2]}>• Check my knowledge</Text>
                    </>
                  )}
                  {agentType === 'exam_prep' && (
                    <>
                      <Text style={[styles.suggestion, typography.body2]}>• Show me past WAEC questions</Text>
                      <Text style={[styles.suggestion, typography.body2]}>• High-frequency topics</Text>
                      <Text style={[styles.suggestion, typography.body2]}>• Exam strategies for {topicName}</Text>
                    </>
                  )}
                </View>
              </View>
            )}

            {chatMessages.map((msg) => (
              <View key={msg.id} style={[
                styles.messageContainer,
                msg.type === 'user' ? styles.userMessage : styles.assistantMessage
              ]}>
                <View style={[
                  styles.messageBubble,
                  msg.type === 'user' ? styles.userBubble : styles.assistantBubble
                ]}>
                  <Text style={[
                    styles.messageText,
                    typography.body2,
                    msg.type === 'user' ? styles.userText : styles.assistantText
                  ]}>
                    {msg.content}
                  </Text>
                </View>
              </View>
            ))}

            {chatLoading && (
              <View style={styles.messageContainer}>
                <View style={[styles.messageBubble, styles.assistantBubble]}>
                  <ActivityIndicator size="small" color={colors.text.secondary} />
                </View>
              </View>
            )}
          </ScrollView>

          {/* Input Area */}
          <SafeAreaView edges={['bottom']} style={styles.inputSafeArea}>
            <View style={styles.inputArea}>
              <Input
                placeholder="Ask your question..."
                value={message}
                onChangeText={setMessage}
                style={styles.chatInput}
                multiline
              />
              <Button
                label="Send"
                onPress={handleSendMessage}
                loading={chatLoading}
                disabled={!message.trim() || chatLoading}
                size="sm"
                style={styles.sendButton}
              />
            </View>
          </SafeAreaView>
        </>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  headerSafeArea: {
    backgroundColor: colors.background
  },

  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border
  },
  backArrow: {
    color: colors.primary,
    marginRight: spacing.md
  },
  title: {
    flex: 1,
    color: colors.primary,
    fontWeight: 'bold'
  },
  offlineBadge: {
    backgroundColor: colors.warning,
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    marginLeft: spacing.sm
  },
  offlineBadgeText: {
    color: colors.text.inverse
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surface
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent'
  },
  activeTab: {
    borderBottomColor: colors.primary
  },
  tabLabel: {
    textAlign: 'center',
    color: colors.text.secondary,
    fontWeight: '500'
  },
  activeTabLabel: {
    color: colors.primary,
    fontWeight: '600'
  },
  contentArea: {
    flex: 1
  },
  contentContainer: {
    padding: spacing.md,
    paddingBottom: spacing.lg
  },
  sectionTitle: {
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing.sm
  },
  sectionContent: {
    color: colors.text.primary,
    lineHeight: 24
  },
  activityItem: {
    color: colors.text.primary,
    marginBottom: spacing.sm,
    marginLeft: spacing.md
  },
  chatArea: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xl
  },
  emptyStateTitle: {
    color: colors.primary,
    marginBottom: spacing.md,
    textAlign: 'center'
  },
  emptyStateText: {
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
    maxWidth: 300
  },
  suggestedQuestions: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    width: '100%'
  },
  suggestLabel: {
    color: colors.text.secondary,
    fontWeight: '600',
    marginBottom: spacing.sm
  },
  suggestion: {
    color: colors.primary,
    marginBottom: spacing.xs,
    marginLeft: spacing.sm
  },
  messageContainer: {
    marginVertical: spacing.sm
  },
  userMessage: {
    alignItems: 'flex-end'
  },
  assistantMessage: {
    alignItems: 'flex-start'
  },
  messageBubble: {
    maxWidth: '85%',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.lg
  },
  userBubble: {
    backgroundColor: colors.primary
  },
  assistantBubble: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border
  },
  messageText: {
    color: colors.text.primary
  },
  userText: {
    color: colors.text.inverse
  },
  assistantText: {
    color: colors.text.primary
  },
  inputSafeArea: {
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    gap: spacing.sm
  },
  chatInput: {
    flex: 1,
    marginBottom: 0
  },
  sendButton: {
    minWidth: 50,
    paddingHorizontal: 8
  },
  agentSelector: {
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    gap: spacing.sm
  },
  agentLabel: {
    color: colors.text.secondary,
    fontWeight: '600',
    marginBottom: spacing.xs
  },
  agentButtonsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'space-between'
  },
  agentButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border
  },
  agentButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  agentButtonIcon: {
    marginBottom: spacing.xs
  },
  agentButtonLabel: {
    color: colors.text.secondary,
    fontWeight: '500'
  },
  agentButtonLabelActive: {
    color: colors.text.inverse
  }
});
