import {
  getGamificationStats,
  initializeGamificationStats,
  addPoints,
  updateStreak,
  awardBadge,
  getBadges,
  getStudentProgressByTopic,
  getTopics,
  updateStudentProgress
} from './database';
import { notificationService } from './notificationService';

const BADGES = {
  // Beginner badges
  BEGINNER: {
    type: 'beginner',
    name: '🎓 Beginner',
    description: 'Complete your first lesson',
    requirement: () => true // Awarded on first lesson
  },
  FIRST_TOPIC: {
    type: 'first_topic_completed',
    name: '🚀 First Topic',
    description: 'Complete your first topic',
    requirement: () => true
  },

  // Practice badges
  PRACTITIONER_10: {
    type: 'practitioner_10',
    name: '💪 Practitioner (10)',
    description: 'Solve 10 practice problems',
    requirement: (points) => points >= 50 // 10 problems × 5 points
  },
  PRACTITIONER_50: {
    type: 'practitioner_50',
    name: '💪 Practitioner (50)',
    description: 'Solve 50 practice problems',
    requirement: (points) => points >= 250
  },

  // Streak badges
  CONSISTENT_3: {
    type: 'consistent_3',
    name: '🔥 Consistent (3 days)',
    description: '3-day learning streak',
    requirement: (points, streak) => streak >= 3
  },
  CONSISTENT_7: {
    type: 'consistent_7',
    name: '🔥 Consistent (7 days)',
    description: '7-day learning streak',
    requirement: (points, streak) => streak >= 7
  },
  DEDICATED_30: {
    type: 'dedicated_30',
    name: '💎 Dedicated (30 days)',
    description: '30-day learning streak',
    requirement: (points, streak) => streak >= 30
  },

  // Accuracy badges
  ACCURACY_EXPERT: {
    type: 'accuracy_expert',
    name: '🎯 Accuracy Expert',
    description: '90%+ accuracy on any topic',
    requirement: () => true // Checked per-topic
  },

  // Speed badges
  SPEED_DEMON: {
    type: 'speed_demon',
    name: '⚡ Speed Demon',
    description: 'Solve a problem in under 2 minutes',
    requirement: () => true // Checked per-problem
  },

  // Topic mastery badges
  MASTER_BASIC: {
    type: 'master_basic',
    name: '👑 Master (Basic)',
    description: '90%+ on all topics in a theme',
    requirement: () => true // Checked per-theme
  }
};

class GamificationService {
  constructor() {
    this.pointsPerAction = {
      lessonCompleted: 10,
      problemSolved: 5,
      correctAnswer: 2,
      accuracyBonus: 5 // 90%+ accuracy
    };
  }

  async initializeForStudent(studentId) {
    try {
      await initializeGamificationStats(studentId);
      console.log(`Gamification initialized for student ${studentId}`);
    } catch (error) {
      console.error('Error initializing gamification:', error);
    }
  }

  async recordLessonCompletion(studentId, topicId) {
    try {
      const stats = await getGamificationStats(studentId);
      if (!stats) {
        await this.initializeForStudent(studentId);
      }

      // Award points for lesson completion
      const result = await addPoints(studentId, this.pointsPerAction.lessonCompleted, 'lesson_completed');

      // Update streak
      const streak = await updateStreak(studentId);

      // Check and award badges
      const badges = await this._checkAndAwardBadges(studentId, result.totalPoints, streak);

      // Send notifications
      await notificationService.notifyPointsEarned(
        this.pointsPerAction.lessonCompleted,
        result.totalPoints,
        result.level
      );

      // Notify for badges
      for (const badge of badges) {
        await notificationService.notifyBadgeEarned(badge.name, badge.description);
      }

      // Notify for streak milestones
      if ([3, 7, 14, 30].includes(streak)) {
        await notificationService.notifyStreakMilestone(streak);
      }

      return {
        points: this.pointsPerAction.lessonCompleted,
        totalPoints: result.totalPoints,
        level: result.level,
        streak,
        badgesEarned: badges
      };
    } catch (error) {
      console.error('Error recording lesson completion:', error);
      throw error;
    }
  }

  async recordProblemSolution(studentId, isCorrect, solvingTime = null) {
    try {
      const stats = await getGamificationStats(studentId);
      if (!stats) {
        await this.initializeForStudent(studentId);
      }

      let points = 0;

      // Points for solving problem
      points += this.pointsPerAction.problemSolved;

      // Points for correct answer
      if (isCorrect) {
        points += this.pointsPerAction.correctAnswer;
      }

      // Speed bonus (under 2 minutes)
      if (solvingTime && solvingTime < 120) {
        points += 3; // Speed bonus
      }

      const result = await addPoints(studentId, points, 'problem_solved');

      // Update streak
      const streak = await updateStreak(studentId);

      // Check and award badges
      const badges = await this._checkAndAwardBadges(studentId, result.totalPoints, streak);

      // Check for speed demon badge
      if (solvingTime && solvingTime < 120) {
        const speedBadge = await awardBadge(
          studentId,
          BADGES.SPEED_DEMON.type,
          BADGES.SPEED_DEMON.name,
          BADGES.SPEED_DEMON.description,
          { solvingTime }
        );
        if (speedBadge) badges.push(BADGES.SPEED_DEMON);
      }

      // Send notifications
      await notificationService.notifyPointsEarned(points, result.totalPoints, result.level);

      // Notify for badges
      for (const badge of badges) {
        await notificationService.notifyBadgeEarned(badge.name, badge.description);
      }

      // Speed bonus celebration
      if (solvingTime && solvingTime < 120) {
        await notificationService.sendLocalNotification(
          '⚡ Speed Bonus!',
          `Solved in ${Math.round(solvingTime)} seconds! +3 points`,
          { type: 'speedBonus', time: solvingTime },
          0
        );
      }

      return {
        points,
        totalPoints: result.totalPoints,
        level: result.level,
        streak,
        badgesEarned: badges
      };
    } catch (error) {
      console.error('Error recording problem solution:', error);
      throw error;
    }
  }

  async checkTopicMastery(studentId, topicId) {
    try {
      const progress = await getStudentProgressByTopic(studentId, topicId);

      if (!progress || progress.understanding_level < 90) {
        return null;
      }

      // Award topic mastery badge
      const badgeType = `master_topic_${topicId}`;
      const badge = await awardBadge(
        studentId,
        badgeType,
        `👑 Master Topic #${topicId}`,
        `Achieved 90%+ mastery on topic ${topicId}`,
        { topicId }
      );

      return badge ? { type: badgeType, name: `Master Topic #${topicId}` } : null;
    } catch (error) {
      console.error('Error checking topic mastery:', error);
      return null;
    }
  }

  async checkThemeMastery(studentId, themeId) {
    try {
      const topics = await getTopics(themeId);

      if (!topics || topics.length === 0) {
        return null;
      }

      // Check if all topics in theme are 90%+ mastered
      let allMastered = true;
      for (const topic of topics) {
        const progress = await getStudentProgressByTopic(studentId, topic.id);
        if (!progress || progress.understanding_level < 90) {
          allMastered = false;
          break;
        }
      }

      if (!allMastered) {
        return null;
      }

      // Award theme mastery badge
      const badgeType = `master_theme_${themeId}`;
      const badge = await awardBadge(
        studentId,
        badgeType,
        `👑 Master Theme #${themeId}`,
        `Achieved 90%+ mastery on all topics in theme ${themeId}`,
        { themeId }
      );

      return badge ? { type: badgeType, name: `Master Theme #${themeId}` } : null;
    } catch (error) {
      console.error('Error checking theme mastery:', error);
      return null;
    }
  }

  async _checkAndAwardBadges(studentId, totalPoints, streak) {
    const awardedBadges = [];

    try {
      // Check beginner badge (on first completion)
      const existingBadges = await getBadges(studentId);
      if (existingBadges.length === 0) {
        const badge = await awardBadge(
          studentId,
          BADGES.BEGINNER.type,
          BADGES.BEGINNER.name,
          BADGES.BEGINNER.description
        );
        if (badge) awardedBadges.push(BADGES.BEGINNER);
      }

      // Check streak badges
      if (streak >= 3 && !existingBadges.some(b => b.badge_type === BADGES.CONSISTENT_3.type)) {
        const badge = await awardBadge(
          studentId,
          BADGES.CONSISTENT_3.type,
          BADGES.CONSISTENT_3.name,
          BADGES.CONSISTENT_3.description,
          { streak }
        );
        if (badge) awardedBadges.push(BADGES.CONSISTENT_3);
      }

      if (streak >= 7 && !existingBadges.some(b => b.badge_type === BADGES.CONSISTENT_7.type)) {
        const badge = await awardBadge(
          studentId,
          BADGES.CONSISTENT_7.type,
          BADGES.CONSISTENT_7.name,
          BADGES.CONSISTENT_7.description,
          { streak }
        );
        if (badge) awardedBadges.push(BADGES.CONSISTENT_7);
      }

      if (streak >= 30 && !existingBadges.some(b => b.badge_type === BADGES.DEDICATED_30.type)) {
        const badge = await awardBadge(
          studentId,
          BADGES.DEDICATED_30.type,
          BADGES.DEDICATED_30.name,
          BADGES.DEDICATED_30.description,
          { streak }
        );
        if (badge) awardedBadges.push(BADGES.DEDICATED_30);
      }

      // Check practitioner badges
      if (totalPoints >= 50 && !existingBadges.some(b => b.badge_type === BADGES.PRACTITIONER_10.type)) {
        const badge = await awardBadge(
          studentId,
          BADGES.PRACTITIONER_10.type,
          BADGES.PRACTITIONER_10.name,
          BADGES.PRACTITIONER_10.description,
          { totalPoints }
        );
        if (badge) awardedBadges.push(BADGES.PRACTITIONER_10);
      }

      if (totalPoints >= 250 && !existingBadges.some(b => b.badge_type === BADGES.PRACTITIONER_50.type)) {
        const badge = await awardBadge(
          studentId,
          BADGES.PRACTITIONER_50.type,
          BADGES.PRACTITIONER_50.name,
          BADGES.PRACTITIONER_50.description,
          { totalPoints }
        );
        if (badge) awardedBadges.push(BADGES.PRACTITIONER_50);
      }
    } catch (error) {
      console.warn('Error checking badges:', error);
    }

    return awardedBadges;
  }

  getPointsPerAction() {
    return this.pointsPerAction;
  }

  getAllBadges() {
    return BADGES;
  }
}

export const gamificationService = new GamificationService();
