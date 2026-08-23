// API Base URL - change this based on environment
// Use local development URL for testing, production URL as fallback
const isDevelopment = __DEV__;

export const API_URL = isDevelopment
  ? 'https://pacific-growth-production-d82a.up.railway.app'  // TEMP: testing on physical device via Expo Go
  : 'https://pacific-growth-production-d82a.up.railway.app';  // Production Railway URL

export const endpoints = {
  auth: {
    signup: `${API_URL}/api/auth/signup`,
    login: `${API_URL}/api/auth/login`,
    me: `${API_URL}/api/auth/me`
  },
  content: {
    themes: `${API_URL}/api/content/themes`,
    topics: (themeId) => `${API_URL}/api/content/themes/${themeId}/topics`,
    topicDetails: (topicId) => `${API_URL}/api/content/topics/${topicId}`,
    progress: (themeId) => `${API_URL}/api/content/themes/${themeId}/progress`
  },
  progress: {
    stats: `${API_URL}/api/progress`,
    updateTopic: (topicId) => `${API_URL}/api/progress/topics/${topicId}`,
    getTopic: (topicId) => `${API_URL}/api/progress/topics/${topicId}`
  },
  agents: {
    chat: `${API_URL}/api/agents/chat`,
    history: `${API_URL}/api/agents/history`
  }
};
