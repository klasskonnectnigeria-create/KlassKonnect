import axios from 'axios';
import { API_URL } from '../config/api';
import { getGamificationStats, getBadges } from './database';

class GamificationSyncService {
  async syncToBackend(studentId, token) {
    try {
      // Get local gamification stats
      const stats = await getGamificationStats(studentId);
      if (!stats) {
        console.log('No gamification stats to sync');
        return null;
      }

      // Get local badges
      const badges = await getBadges(studentId);

      // Sync stats to backend
      const statsPayload = {
        totalPoints: stats.total_points,
        level: stats.level,
        currentStreak: stats.current_streak,
        longestStreak: stats.longest_streak
      };

      const response = await axios.post(
        `${API_URL}/api/gamification/stats`,
        statsPayload,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      // Sync each badge to backend
      if (badges && badges.length > 0) {
        for (const badge of badges) {
          await this.syncBadgeToBackend(studentId, badge, token);
        }
      }

      console.log('Gamification stats synced to backend');
      return response.data;
    } catch (error) {
      console.error('Error syncing gamification stats:', error);
      // Silently fail - don't break the app if sync fails
      return null;
    }
  }

  async syncBadgeToBackend(studentId, badge, token) {
    try {
      await axios.post(
        `${API_URL}/api/gamification/badges`,
        {
          badgeType: badge.badge_type,
          badgeName: badge.badge_name,
          badgeDescription: badge.badge_description,
          metadata: badge.metadata || {}
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
    } catch (error) {
      console.warn('Error syncing badge:', error);
      // Silently fail - don't break the app
    }
  }
}

export const gamificationSyncService = new GamificationSyncService();
