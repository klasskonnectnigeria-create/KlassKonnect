import { create } from 'zustand';
import { offlineApiClient } from '../services/offlineApiClient';
import { getThemes, getTopics, getTopic, saveTopics } from '../services/database';
import { connectionManager } from '../services/connectionManager';

export const useContentStore = create((set) => ({
  themes: [],
  topics: {},
  currentTopic: null,
  isLoadingFromCache: false,

  setThemes: (themes) => set({ themes }),
  setTopics: (themeId, topics) => set((state) => ({
    topics: { ...state.topics, [themeId]: topics }
  })),
  setCurrentTopic: (topic) => set({ currentTopic: topic }),
  setIsLoadingFromCache: (isLoadingFromCache) => set({ isLoadingFromCache }),

  // Fetch themes with offline support
  fetchThemes: async (apiUrl, token) => {
    try {
      const data = await offlineApiClient.get('/api/content/themes', token);

      if (data) {
        set({ themes: data });
        return data;
      }

      // Fallback to empty array if both network and cache fail
      return [];
    } catch (error) {
      console.error('Error fetching themes:', error);

      // Try to load from cache
      try {
        set({ isLoadingFromCache: true });
        const cachedThemes = await getThemes();
        if (cachedThemes && cachedThemes.length > 0) {
          set({ themes: cachedThemes });
          return cachedThemes;
        }
      } catch (cacheError) {
        console.warn('Error loading themes from cache:', cacheError);
      } finally {
        set({ isLoadingFromCache: false });
      }

      return [];
    }
  },

  // Fetch topics for a theme with offline support
  fetchTopics: async (apiUrl, token, themeId) => {
    try {
      const data = await offlineApiClient.get(`/api/content/themes/${themeId}/topics`, token);

      if (data) {
        set((state) => ({ topics: { ...state.topics, [themeId]: data } }));
        return data;
      }

      return [];
    } catch (error) {
      console.error('Error fetching topics:', error);

      // Try to load from cache
      try {
        set({ isLoadingFromCache: true });
        const cachedTopics = await getTopics(themeId);
        if (cachedTopics && cachedTopics.length > 0) {
          set((state) => ({ topics: { ...state.topics, [themeId]: cachedTopics } }));
          return cachedTopics;
        }
      } catch (cacheError) {
        console.warn('Error loading topics from cache:', cacheError);
      } finally {
        set({ isLoadingFromCache: false });
      }

      return [];
    }
  },

  // Fetch topic details with offline support
  fetchTopicDetails: async (apiUrl, token, topicId) => {
    try {
      const data = await offlineApiClient.get(`/api/content/topics/${topicId}`, token);

      if (data) {
        set({ currentTopic: data });
        return data;
      }

      return null;
    } catch (error) {
      console.error('Error fetching topic details:', error);

      // Try to load from cache
      try {
        set({ isLoadingFromCache: true });
        const cachedTopic = await getTopic(topicId);
        if (cachedTopic) {
          set({ currentTopic: cachedTopic });
          return cachedTopic;
        }
      } catch (cacheError) {
        console.warn('Error loading topic from cache:', cacheError);
      } finally {
        set({ isLoadingFromCache: false });
      }

      return null;
    }
  }
}));
