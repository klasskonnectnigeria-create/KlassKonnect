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
  updateConversationMessage,
  updateStudentProgress,
  setGamificationStats,
  awardBadge
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
      let response;
      try {
        response = await fetch(`${API_URL}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(data)
        });
      } catch (networkError) {
        // fetch() itself threw - a genuine connectivity problem (no network, DNS
        // failure, timeout). The server was never reached, so queuing for later
        // retry is the right call.
        console.warn(`Network POST failed for ${endpoint}, queuing locally:`, networkError);
        return await this._queueAndReturnOptimistic(endpoint, data, token);
      }

      if (!response.ok) {
        // The request reached the server and the server said no (bad input, auth
        // failure, a real backend error, etc). This is not an offline condition -
        // retrying the identical request later won't help, and silently queuing it
        // would tell the student "will send when back online" about something the
        // server already rejected. Let the caller show a real error instead of
        // masking it as a sync-later success.
        const error = new Error(`HTTP ${response.status}`);
        error.isHttpError = true;
        error.status = response.status;
        throw error;
      }

      const responseData = await response.json();

      // Save to local DB if it's a chat or progress update
      if (endpoint === '/api/agents/chat' && responseData.response) {
        // Chat response will be handled by the screen
      } else if (endpoint.includes('/progress')) {
        // Progress response will be handled by the screen
      }

      return responseData;
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
          response: 'Message saved locally. Will send when back online.',
          agentType: data.agentType || 'tutor',
          nextStep: 'Queued for delivery',
          isQueued: true
        };
      } else if (endpoint.includes('/progress')) {
        return {
          success: true,
          message: 'Progress saved locally. Will sync when back online.',
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
   * Save conversation message locally. Returns the new row's local id so the
   * caller can update it in place once the real AI response arrives, instead
   * of inserting a second row for the same exchange.
   */
  async saveConversation(studentId, topicId, userMessage, aiResponse, agentType) {
    try {
      return await saveConversationMessage(studentId, topicId, userMessage, aiResponse, agentType);
    } catch (error) {
      console.error('Error saving conversation:', error);
      throw error;
    }
  }

  /**
   * Fill in the AI response on an already-saved conversation row (see
   * saveConversation above) rather than inserting a duplicate row.
   */
  async updateConversation(id, aiResponse, agentType) {
    try {
      await updateConversationMessage(id, aiResponse, agentType);
    } catch (error) {
      console.error('Error updating conversation:', error);
      throw error;
    }
  }

  /**
   * Refresh the local gamification cache (points/level/streak/badges) from the
   * server. The server is the authoritative source of truth for these numbers -
   * see backend/services/gamificationService.js, which is what actually computes
   * them from real chat use - so local SQLite is treated as a write-through
   * cache of the server's last-known values rather than a second place that
   * computes its own. store/gamificationStore.js calls this before reading the
   * local cache, so HomeScreen / Achievements can't drift
   * out of agreement with each other or with what the AI chat flow just earned.
   *
   * Offline, or on a failed fetch, this is a no-op - the caller's subsequent
   * read of the local cache just returns whatever was cached last, which is the
   * correct offline behavior (last-known-good rather than nothing).
   */
  async refreshGamificationProfile(studentId, token) {
    if (!studentId || !token || !connectionManager.isOnline()) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/gamification/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const profile = await response.json();

      await setGamificationStats(studentId, {
        totalPoints: profile.points || 0,
        level: profile.level || 1,
        currentStreak: profile.currentStreak || 0,
        longestStreak: profile.longestStreak || 0
      });

      for (const badge of profile.badges || []) {
        await awardBadge(studentId, badge.type, badge.name, badge.description || '', null);
      }
    } catch (error) {
      console.warn('Could not refresh gamification profile from server, using local cache:', error);
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
