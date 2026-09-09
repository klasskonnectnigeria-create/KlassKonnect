/**
 * EXAMPLE: How to integrate gamification into your chat screen
 *
 * This file shows the key integration points needed to use the gamification system
 * Copy the relevant sections into your actual TutorScreen.js
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import { GamificationNotification } from '../components/GamificationNotification';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default function TutorScreen({ route, token }) {
  const { topicId } = route.params;

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [gamification, setGamification] = useState(null);
  const flatListRef = useRef(null);

  /**
   * STEP 1: Send message to tutor and handle response
   */
  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    setInputText('');

    // Add user message to chat
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    }]);

    setLoading(true);

    try {
      // STEP 2: Call chat endpoint and get gamification data
      const response = await axios.post(
        `${API_URL}/agents/chat`,
        {
          message: userMessage,
          topicId: topicId,
          agentType: 'tutor'
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const { response: aiResponse, gamification: gamificationData } = response.data;

      // Add AI response to chat
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      }]);

      // STEP 3: Display gamification notification if we got data
      if (gamificationData) {
        setGamification(gamificationData);

        // Log gamification event for analytics/debugging
        console.log('Gamification Update:', {
          pointsEarned: gamificationData.pointsEarned,
          newLevel: gamificationData.level,
          streak: gamificationData.currentStreak
        });
      }

      // Scroll to bottom
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);

    } catch (error) {
      console.error('Error sending message:', error);
      Alert.alert(
        'Error',
        error.response?.data?.error || 'Failed to get response. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  /**
   * STEP 4: Render individual messages
   */
  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageRow,
      item.role === 'user' ? styles.userMessageRow : styles.aiMessageRow
    ]}>
      <View style={[
        styles.messageBubble,
        item.role === 'user' ? styles.userBubble : styles.aiBubble
      ]}>
        <Text style={[
          styles.messageText,
          item.role === 'user' ? styles.userText : styles.aiText
        ]}>
          {item.content}
        </Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* STEP 5: Add notification component at top */}
      <GamificationNotification
        gamification={gamification}
        onDismiss={() => setGamification(null)}
      />

      {/* Chat Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
        onEndReachedThreshold={0.1}
        scrollEventThrottle={16}
      />

      {/* Loading Indicator */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#1B54F5" />
          <Text style={styles.loadingText}>Tutor is thinking...</Text>
        </View>
      )}

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask me anything..."
          placeholderTextColor="#999"
          value={inputText}
          onChangeText={setInputText}
          multiline
          maxLength={500}
          editable={!loading}
        />
        <TouchableOpacity
          style={[styles.sendButton, loading && styles.sendButtonDisabled]}
          onPress={handleSendMessage}
          disabled={loading}
        >
          <MaterialCommunityIcons
            name="send"
            size={20}
            color={loading ? '#ccc' : 'white'}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1EC'
  },

  messagesList: {
    paddingHorizontal: 12,
    paddingVertical: 8
  },

  messageRow: {
    marginVertical: 6,
    flexDirection: 'row'
  },

  userMessageRow: {
    justifyContent: 'flex-end'
  },

  aiMessageRow: {
    justifyContent: 'flex-start'
  },

  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: 'white'
  },

  userBubble: {
    backgroundColor: '#1B54F5'
  },

  aiBubble: {
    backgroundColor: 'white',
    borderLeftWidth: 4,
    borderLeftColor: '#1B54F5'
  },

  messageText: {
    fontSize: 14,
    lineHeight: 20
  },

  userText: {
    color: 'white'
  },

  aiText: {
    color: '#0B1B3F'
  },

  loadingContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  loadingText: {
    marginLeft: 8,
    fontSize: 12,
    color: '#666'
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0'
  },

  input: {
    flex: 1,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 8,
    fontSize: 14,
    color: '#0B1B3F'
  },

  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1B54F5',
    justifyContent: 'center',
    alignItems: 'center'
  },

  sendButtonDisabled: {
    backgroundColor: '#ccc'
  }
});

/**
 * KEY INTEGRATION POINTS:
 *
 * 1. Import GamificationNotification component
 * 2. State: const [gamification, setGamification] = useState(null)
 * 3. In handleSendMessage, extract gamification from response
 * 4. Call setGamification(gamificationData) to show notification
 * 5. Add <GamificationNotification> component at top of JSX
 *
 * The notification auto-dismisses after 4 seconds or when tapped
 * The response from /api/agents/chat includes gamification data:
 * {
 *   response: string (AI response),
 *   gamification: {
 *     pointsEarned: number,
 *     totalPoints: number,
 *     level: number,
 *     levelName: string,
 *     currentStreak: number,
 *     levelProgress: { currentLevel, nextLevelName, pointsToNextLevel, progressPercent },
 *     profile: { badgeCount, longestStreak },
 *     badgesUnlocked: [ { name, description }, ... ]
 *   }
 * }
 */
