import { create } from 'zustand';
import {
  getGamificationStats,
  getBadges,
  getDailyActivityLog
} from '../services/database';

export const useGamificationStore = create((set, get) => ({
  // State
  totalPoints: 0,
  level: 1,
  currentStreak: 0,
  longestStreak: 0,
  badges: [],
  dailyActivity: [],
  isLoading: false,

  // Setters
  setPoints: (totalPoints) => set({ totalPoints, level: Math.floor(totalPoints / 500) + 1 }),
  setLevel: (level) => set({ level }),
  setCurrentStreak: (currentStreak) => set({ currentStreak }),
  setLongestStreak: (longestStreak) => set({ longestStreak }),
  setBadges: (badges) => set({ badges }),
  setDailyActivity: (dailyActivity) => set({ dailyActivity }),
  setIsLoading: (isLoading) => set({ isLoading }),

  // Load gamification data
  loadGamificationData: async (studentId) => {
    let mounted = true;

    try {
      if (mounted) set({ isLoading: true });

      // Load stats
      const stats = await getGamificationStats(studentId);
      if (mounted && stats) {
        set({
          totalPoints: stats.total_points || 0,
          level: stats.level || 1,
          currentStreak: stats.current_streak || 0,
          longestStreak: stats.longest_streak || 0
        });
      }

      // Load badges
      const badges = await getBadges(studentId);
      if (mounted) {
        set({ badges });
      }

      // Load daily activity
      const dailyActivity = await getDailyActivityLog(studentId, 30);
      if (mounted) {
        set({ dailyActivity });
      }

      if (mounted) {
        console.log(`Loaded gamification data for student ${studentId}`);
      }
    } catch (error) {
      if (mounted) {
        console.error('Error loading gamification data:', error);
      }
    } finally {
      if (mounted) {
        set({ isLoading: false });
      }
    }

    // Cleanup - prevent future state updates
    return () => {
      mounted = false;
    };
  },

  // Update after earning points
  updateAfterPointsEarned: (points, level, streak, badgesEarned = []) => {
    const currentState = get();
    const newTotal = currentState.totalPoints + points;
    const newLevel = Math.floor(newTotal / 500) + 1;

    set({
      totalPoints: newTotal,
      level: newLevel,
      currentStreak: streak,
      badges: [...currentState.badges, ...badgesEarned]
    });
  },

  // Get badge by type
  getBadgeByType: (badgeType) => {
    const badges = get().badges;
    return badges.find(b => b.badge_type === badgeType);
  },

  // Check if badge earned
  hasBadge: (badgeType) => {
    const badges = get().badges;
    return badges.some(b => b.badge_type === badgeType);
  },

  // Get progress to next level
  getProgressToNextLevel: () => {
    const currentState = get();
    const pointsInCurrentLevel = currentState.totalPoints % 500;
    const progressPercent = (pointsInCurrentLevel / 500) * 100;
    return {
      pointsEarned: pointsInCurrentLevel,
      pointsNeeded: 500,
      percent: Math.round(progressPercent),
      pointsUntilNextLevel: 500 - pointsInCurrentLevel
    };
  },

  // Get statistics
  getStatistics: () => {
    const currentState = get();
    return {
      totalPoints: currentState.totalPoints,
      level: currentState.level,
      currentStreak: currentState.currentStreak,
      longestStreak: currentState.longestStreak,
      badgesEarned: currentState.badges.length,
      practicesSolved: Math.floor(currentState.totalPoints / 5), // Rough estimate
      nextLevelProgress: currentState.totalPoints % 500
    };
  }
}));
