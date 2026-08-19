import { connectionManager } from './connectionManager';
import {
  queueAction,
  getThemes,
  getTopics,
  getTopic,
  getStudentProgress,
  saveThemes,
  saveTopics,
  saveTopic,
  getConversationHistory,
  saveConversationMessage,
  updateStudentProgress
} from './database';
import { useOfflineStore } from '../store/offlineStore';

import { API_URL } from '../config/api';

class OfflineApiClient {
  constructor() {
    this.requestCache = new Map();
  }

  /**
   * GET request with offline fallback to local DB
   */
  async get(endpoint, token) {
    const isOnline = connectionManager.isOnline();

    if (isOnline) {
      try {
        const response = await fetch(`${API_URL}${endpoint}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        // Auto-cache responses based on endpoint
        await this._cacheResponseToDb(endpoint, data);

        return data;
      } catch (error) {
        console.warn(`Network GET failed for ${endpoint}, falling back to cache:`, error);
        return await this._getFromCache(endpoint);
      }
    } else {
      console.log(`Offline: Reading from cache for ${endpoint}`);
      return await this._getFromCache(endpoint);
    }
  }

  /**
   * POST request with offline queuing
   */
  async post(endpoint, data, token) {
    const isOnline = connectionManager.isOnline();

    if (isOnline) {
      try {
        const response = await fetch(`${API_URL}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const responseData = await response.json();

        // Save to local DB if it's a chat or progress update
        if (endpoint === '/api/agents/chat' && responseData.response) {
          // Chat response will be handled by the screen
        } else if (endpoint.includes('/progress')) {
          // Progress response will be handled by the screen
        }

        return responseData;
      } catch (error) {
        console.warn(`Network POST failed for ${endpoint}, queuing locally:`, error);
        return await this._queueAndReturnOptimistic(endpoint, data, token);
      }
    } else {
      console.log(`Offline: Queuing action for ${endpoint}`);
      return await this._queueAndReturnOptimistic(endpoint, data, token);
    }
  }

  /**
   * Internal: Cache response to local database
   */
  async _cacheResponseToDb(endpoint, data) {
    try {
      if (endpoint === '/api/content/themes') {
        // Cache themes
        if (Array.isArray(data)) {
          await saveThemes(data);
        }
      } else if (endpoint.includes('/api/content/themes/') && endpoint.includes('/topics')) {
        // Cache topics for a theme
        const themeId = parseInt(endpoint.match(/themes\/(\d+)/)[1]);
        if (Array.isArray(data)) {
          await saveTopics(themeId, data);
        }
      } else if (endpoint.includes('/api/content/topics/')) {
        // Cache topic details
        if (data.id) {
          await saveTopic(data);
        }
      }
    } catch (error) {
      console.warn('Error caching response:', error);
      // Don't fail the request if caching fails
    }
  }

  /**
   * Internal: Get data from local cache
   */
  async _getFromCache(endpoint) {
    try {
      if (endpoint === '/api/content/themes') {
        return await getThemes();
      } else if (endpoint.includes('/api/content/themes/') && endpoint.includes('/topics')) {
        const themeId = parseInt(endpoint.match(/themes\/(\d+)/)[1]);
        return await getTopics(themeId);
      } else if (endpoint.includes('/api/content/topics/')) {
        const topicId = parseInt(endpoint.match(/topics\/(\d+)/)[1]);
        return await getTopic(topicId);
      }
      return null;
    } catch (error) {
      console.error('Error reading from cache:', error);
      return null;
    }
  }

  /**
   * Internal: Queue action and return optimistic response
   */
  async _queueAndReturnOptimistic(endpoint, data, token) {
    try {
      // Determine action type
      let actionType = 'chat';
      if (endpoint.includes('/progress')) {
        actionType = 'progress';
      }

      // Queue the action
      await queueAction(actionType, endpoint, 'POST', data);

      // Update queue count in store
      const { getPendingActions } = await import('./database');
      const pending = await getPendingActions();
      useOfflineStore.getState().setQueueLength(pending.length);

      // Return optimistic response
      if (endpoint === '/api/agents/chat') {
        return {
          response: '💾 Message saved locally. Will send when back online.',
          agentType: data.agentType || 'tutor',
          nextStep: 'Queued for delivery',
          isQueued: true
        };
      } else if (endpoint.includes('/progress')) {
        return {
          success: true,
          message: '💾 Progress saved locally. Will sync when back online.',
          isQueued: true
        };
      }

      return { isQueued: true };
    } catch (error) {
      console.error('Error queuing action:', error);
      throw error;
    }
  }

  /**
   * Get conversation history (local only, no server fallback needed)
   */
  async getConversationHistory(studentId, topicId, token) {
    try {
      return await getConversationHistory(studentId, topicId, 50);
    } catch (error) {
      console.error('Error fetching conversation history:', error);
      return [];
    }
  }

  /**
   * Save conversation message locally
   */
  async saveConversation(studentId, topicId, userMessage, aiResponse, agentType) {
    try {
      await saveConversationMessage(studentId, topicId, userMessage, aiResponse, agentType);
    } catch (error) {
      console.error('Error saving conversation:', error);
      throw error;
    }
  }

  /**
   * Update student progress (online or queued)
   */
  async updateProgress(studentId, topicId, updates, token) {
    const isOnline = connectionManager.isOnline();

    if (isOnline) {
      try {
        const response = await fetch(`${API_URL}/api/progress/topics/${topicId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(updates)
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        // Also update locally
        await updateStudentProgress(studentId, topicId, updates);

        return data;
      } catch (error) {
        console.warn('Network progress update failed, queuing locally:', error);

        // Queue and update locally
        await queueAction('progress', `/api/progress/topics/${topicId}`, 'POST', updates);
        await updateStudentProgress(studentId, topicId, updates);

        return { isQueued: true };
      }
    } else {
      console.log('Offline: Updating progress locally');

      // Update locally and queue
      await updateStudentProgress(studentId, topicId, updates);
      await queueAction('progress', `/api/progress/topics/${topicId}`, 'POST', updates);

      return { isQueued: true };
    }
  }
}

export const offlineApiClient = new OfflineApiClient();
