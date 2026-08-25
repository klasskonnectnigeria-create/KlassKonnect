import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, ScrollView, Text, TouchableOpacity, ActivityIndicator, SafeAreaView,
  KeyboardAvoidingView, Platform, FlatList
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../store/authStore';
import { useContentStore } from '../store/contentStore';
import { useOfflineStore } from '../store/offlineStore';
import { useGamificationStore } from '../store/gamificationStore';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { BadgeUnlockedNotification } from '../components/GamificationDisplay';
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
  const [agentType, setAgentType] = useState('tutor'); // 'tutor', 'practice', 'assessment'
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [chatLoading, setChatLoading] = useState(false);
  const [unlockedBadge, setUnlockedBadge] = useState(null);
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    loadTopicDetails();
  }, [topicId]);

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

    try {
      // Save user message to DB
      if (student?.id) {
        await offlineApiClient.saveConversation(
          student.id,
          topicId,
          userMessage,
          '', // Will be updated with AI response
          agentType
        );
      }

      // Use offline-aware API client for chat
      const requestStart = Date.now();
      const data = await offlineApiClient.post(
        '/api/agents/chat',
        {
          message: userMessage,
          topicId,
          agentType
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

        // Save AI response to DB if not queued
        if (student?.id && !data.isQueued) {
          await offlineApiClient.saveConversation(
            student.id,
            topicId,
            userMessage,
            data.response,
            data.agentType || 'tutor'
          );
        }

        // Award gamification points for interaction
        if (student?.id && !data.isQueued) {
          setMessageCount((prev) => prev + 1);

          try {
            const gamificationResult = await gamificationService.recordLessonCompletion(
              student.id,
              topicId
            );

            // Update store
            updateAfterPointsEarned(
              gamificationResult.points,
              gamificationResult.level,
              gamificationResult.streak,
              gamificationResult.badgesEarned
            );

            // Show badge notification if earned
            if (gamificationResult.badgesEarned.length > 0) {
              setUnlockedBadge(gamificationResult.badgesEarned[0]);
              // Auto-dismiss notification after 3 seconds
              setTimeout(() => setUnlockedBadge(null), 3000);
            }

            console.log(`Earned ${gamificationResult.points} points! Total: ${gamificationResult.totalPoints}`);
          } catch (gamificationError) {
            console.warn('Error recording gamification:', gamificationError);
            // Don't fail the chat if gamification fails
          }
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setChatMessages((prev) => [...prev, {
        id: Date.now(),
        type: 'assistant',
        content: '❌ Error: Unable to send message. Please check your connection.'
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
              <Text style={[styles.offlineBadgeText, typography.caption]}>📴</Text>
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
            📚 Content
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
            💬 Chat
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
              <Text style={[styles.sectionTitle, typography.subtitle2]}>📖 Knowledge</Text>
              <Text style={[styles.sectionContent, typography.body2]}>
                {currentTopic.content.knowledge}
              </Text>
            </Card>
          )}

          {/* Skills */}
          {currentTopic?.content?.skills && (
            <Card>
              <Text style={[styles.sectionTitle, typography.subtitle2]}>💪 Skills</Text>
              <Text style={[styles.sectionContent, typography.body2]}>
                {currentTopic.content.skills}
              </Text>
            </Card>
          )}

          {/* Learning Activities */}
          {currentTopic?.learningActivities?.length > 0 && (
            <Card>
              <Text style={[styles.sectionTitle, typography.subtitle2]}>📝 Activities</Text>
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
              <Text style={[styles.sectionTitle, typography.subtitle2]}>✅ You'll Be Able To</Text>
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
          {unlockedBadge && (
            <BadgeUnlockedNotification badge={unlockedBadge} />
          )}

          {/* Agent Type Selector */}
          <View style={styles.agentSelector}>
            <Text style={[styles.agentLabel, typography.caption]}>Learning Mode:</Text>
            <View style={styles.agentButtonsRow}>
              {[
                { type: 'tutor', icon: '🧑‍🏫', label: 'Tutor' },
                { type: 'practice', icon: '✏️', label: 'Practice' },
                { type: 'assessment', icon: '📋', label: 'Test' }
              ].map(({ type, icon, label }) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.agentButton,
                    agentType === type && styles.agentButtonActive
                  ]}
                  onPress={() => setAgentType(type)}
                >
                  <Text style={[styles.agentButtonIcon]}>{icon}</Text>
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
                  {agentType === 'tutor' && '👋 Welcome to AI Tutor'}
                  {agentType === 'practice' && '✏️ Let\'s Practice'}
                  {agentType === 'assessment' && '📋 Test Your Knowledge'}
                </Text>
                <Text style={[styles.emptyStateText, typography.body2]}>
                  {agentType === 'tutor' && `Ask me anything about ${topicName}. I'm here to help you learn!`}
                  {agentType === 'practice' && `Let's work through some problems about ${topicName} together!`}
                  {agentType === 'assessment' && `Answer these questions to test your understanding of ${topicName}.`}
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
          <View style={styles.inputArea}>
            <Input
              placeholder="Ask your question..."
              value={message}
              onChangeText={setMessage}
              style={styles.chatInput}
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
    backgroundColor: colors.warning || '#FF6F00',
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    marginLeft: spacing.sm
  },
  offlineBadgeText: {
    color: colors.text.inverse || '#fff'
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
  inputArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
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
    fontSize: 18,
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
