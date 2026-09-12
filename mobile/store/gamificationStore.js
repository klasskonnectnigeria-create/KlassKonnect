import { create } from 'zustand';
import {
  getGamificationStats,
  getBadges,
  getDailyActivityLog,
  setGamificationStats,
  awardBadge
} from '../services/database';
import { offlineApiClient } from '../services/offlineApiClient';

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
  loadGamificationData: async (studentId, token) => {
    let mounted = true;

    try {
      if (mounted) set({ isLoading: true });

      // Refresh the local cache from the server first - the server is the source
      // of truth for points/level/streak/badges (see
      // offlineApiClient.refreshGamificationProfile). Offline, or on a failed
      // fetch, this is a no-op and the reads below just return the existing
      // cache, which is the correct offline behavior.
      await offlineApiClient.refreshGamificationProfile(studentId, token);

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

  // Update after earning points from a real, server-computed chat response (see
  // TopicDetailsScreen.js). Trusts the `level` the server already computed
  // rather than recomputing one locally - the server's level thresholds
  // (backend/services/gamificationService.js LEVELS) are not evenly spaced, so a
  // local points/500 formula would disagree with it. Also writes the new totals
  // and any newly-unlocked badges through to the local cache immediately (not
  // just in-memory state), so this update survives a reload or going offline
  // before the next full server refresh - the same write-through pattern
  // offlineApiClient.refreshGamificationProfile uses on a full profile load.
  updateAfterPointsEarned: async (studentId, points, level, streak, badgesEarned = []) => {
    const currentState = get();
    const newTotal = currentState.totalPoints + points;
    const newLevel = level != null ? level : currentState.level;
    const newLongestStreak = Math.max(streak || 0, currentState.longestStreak || 0);

    // Badges arrive here shaped like the server's camelCase profile
    // ({type, name, description, earnedAt} - see backend awardBadge's return),
    // but the rest of the app (BadgesDisplay, getBadgeByType, hasBadge) expects
    // the local cache's snake_case row shape. Normalize once here rather than
    // letting two shapes coexist in the same array.
    const normalizedBadges = badgesEarned.map((b) => ({
      badge_type: b.badge_type || b.type,
      badge_name: b.badge_name || b.name,
      badge_description: b.badge_description || b.description || '',
      earned_date: b.earned_date || b.earnedAt || new Date().toISOString()
    }));

    set({
      totalPoints: newTotal,
      level: newLevel,
      currentStreak: streak,
      longestStreak: newLongestStreak,
      badges: [...currentState.badges, ...normalizedBadges]
    });

    if (!studentId) return;

    try {
      await setGamificationStats(studentId, {
        totalPoints: newTotal,
        level: newLevel,
        currentStreak: streak,
        longestStreak: newLongestStreak
      });

      for (const badge of normalizedBadges) {
        await awardBadge(studentId, badge.badge_type, badge.badge_name, badge.badge_description, null);
      }
    } catch (error) {
      console.error('Error caching gamification update:', error);
    }
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
