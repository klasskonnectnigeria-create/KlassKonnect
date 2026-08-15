import { create } from 'zustand';
import axios from 'axios';
import { API_URL } from '../config/api';

export const useLeaderboardStore = create((set, get) => ({
  // Global leaderboard
  globalLeaderboard: [],
  gradeLeaderboard: [],
  weeklyLeaderboard: [],

  // Student rank info
  studentRank: null,
  surroundingPlayers: [],

  // Loading state
  isLoading: false,
  error: null,

  // Fetch global leaderboard
  fetchGlobalLeaderboard: async (limit = 20) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/api/leaderboard/global?limit=${limit}`);
      set({ globalLeaderboard: response.data });
    } catch (error) {
      console.error('Error fetching global leaderboard:', error);
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },

  // Fetch leaderboard for student's grade
  fetchGradeLeaderboard: async (grade, limit = 20) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/api/leaderboard/grade/${grade}?limit=${limit}`);
      set({ gradeLeaderboard: response.data });
    } catch (error) {
      console.error('Error fetching grade leaderboard:', error);
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },

  // Fetch weekly (streak) leaderboard
  fetchWeeklyLeaderboard: async (limit = 20) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/api/leaderboard/weekly?limit=${limit}`);
      set({ weeklyLeaderboard: response.data });
    } catch (error) {
      console.error('Error fetching weekly leaderboard:', error);
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },

  // Fetch student's rank and surrounding players
  fetchStudentRank: async (token) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/api/leaderboard/rank`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      set({
        studentRank: response.data.studentRank,
        surroundingPlayers: response.data.surrounding
      });
    } catch (error) {
      console.error('Error fetching student rank:', error);
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },

  // Fetch badges for a student
  fetchStudentBadges: async (studentId) => {
    try {
      const response = await axios.get(`${API_URL}/api/leaderboard/badges/${studentId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching badges:', error);
      return [];
    }
  },

  // Refresh all leaderboards
  refreshAll: async (token, grade) => {
    const state = get();
    await Promise.all([
      state.fetchGlobalLeaderboard(),
      state.fetchGradeLeaderboard(grade),
      state.fetchWeeklyLeaderboard(),
      state.fetchStudentRank(token)
    ]);
  }
}));
