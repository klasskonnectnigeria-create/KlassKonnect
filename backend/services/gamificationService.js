import { pool } from '../server.js';

/**
 * Gamification Service
 * Handles all points, streaks, levels, and badge logic based on student interactions
 */

// POINTS CONFIGURATION
const POINTS = {
  // Base points
  CORRECT_ANSWER: 10,
  WRONG_ANSWER: 3,
  ATTEMPT: 1,

  // Bonus multipliers
  STREAK_BONUS: 1.5,       // x1.5 for streak
  SPEED_BONUS: 1.2,        // x1.2 for under 60 seconds
  ACCURACY_MILESTONE: 2,   // x2 for 15-problem streak
  FIRST_CORRECT: 15,       // First correct answer on new topic
  CONCEPT_MASTERY: 25,     // After completing topic assessment
};

// LEVEL PROGRESSION
const LEVELS = {
  1: { name: 'Starter', pointsRequired: 0 },
  2: { name: 'Explorer', pointsRequired: 100 },
  3: { name: 'Challenger', pointsRequired: 500 },
  4: { name: 'Expert', pointsRequired: 1500 },
  5: { name: 'Master', pointsRequired: 3000 },
};

// BADGE DEFINITIONS
const BADGES = {
  // Skill badges
  ADDITION_MASTER: {
    type: 'addition_master',
    name: '🎓 Addition Master',
    description: '5 correct addition answers in a row',
    criteria: { skill: 'addition', correctStreak: 5 }
  },
  FRACTION_EXPERT: {
    type: 'fraction_expert',
    name: '🌟 Fraction Expert',
    description: 'Mastered fractions (topic completed)',
    criteria: { topic: 'fractions', status: 'completed' }
  },

  // Consistency badges
  WEEK_WARRIOR: {
    type: 'week_warrior',
    name: '🔥 Week Warrior',
    description: 'Studied 7 days in a row',
    criteria: { days: 7 }
  },
  MONTH_MARATHON: {
    type: 'month_marathon',
    name: '💪 Month Marathon',
    description: 'Studied 30 days in a row',
    criteria: { days: 30 }
  },

  // Speed badges
  SPEED_DEMON: {
    type: 'speed_demon',
    name: '⚡ Speed Demon',
    description: 'Solved 10 problems in under 5 minutes',
    criteria: { problems: 10, timeSeconds: 300 }
  },

  // Accuracy badges
  SHARPSHOOTER: {
    type: 'sharpshooter',
    name: '🎯 Sharpshooter',
    description: '95%+ accuracy across 20 problems',
    criteria: { accuracy: 95, problems: 20 }
  },
  PERFECTIONIST: {
    type: 'perfectionist',
    name: '💯 Perfectionist',
    description: '15 correct answers in a row (no mistakes)',
    criteria: { perfectStreak: 15 }
  },

  // Challenge badges
  PEAK_CLIMBER: {
    type: 'peak_climber',
    name: '🏔️ Peak Climber',
    description: 'Solved 5 hard problems correctly',
    criteria: { hardProblems: 5 }
  },

  // Discovery badges
  INSIGHT_HUNTER: {
    type: 'insight_hunter',
    name: '🧠 Insight Hunter',
    description: 'Spotted a pattern or connection',
    criteria: { connections: 1 }
  },

  // Social badges
  MENTOR: {
    type: 'mentor',
    name: '👥 Mentor',
    description: 'Helped a classmate or explained a concept',
    criteria: { helpCount: 1 }
  },
  SCHOLAR: {
    type: 'scholar',
    name: '📚 Scholar',
    description: 'Mastered 3+ different topics',
    criteria: { masteredTopics: 3 }
  },
};

/**
 * Update gamification stats after a chat interaction
 * @param {number} studentId
 * @param {object} interaction - { isCorrect, timeSeconds, topicId, responseQuality }
 */
export async function updateGamificationStats(studentId, interaction) {
  const { isCorrect, timeSeconds = 60, topicId, responseQuality = 'normal' } = interaction;

  try {
    // Calculate points earned
    let points = isCorrect ? POINTS.CORRECT_ANSWER : POINTS.WRONG_ANSWER;

    // Speed bonus (under 60 seconds)
    if (timeSeconds && timeSeconds < 60) {
      points = Math.floor(points * POINTS.SPEED_BONUS);
    }

    // Get current stats
    const statsResult = await pool.query(
      'SELECT * FROM gamification_stats WHERE student_id = $1',
      [studentId]
    );

    let stats;
    if (statsResult.rows.length === 0) {
      // Create new stats
      const result = await pool.query(
        `INSERT INTO gamification_stats (
          student_id, total_points, level, current_streak, longest_streak, last_activity_date
        ) VALUES ($1, $2, 1, $3, $3, CURRENT_DATE)
        RETURNING *`,
        [studentId, points, isCorrect ? 1 : 0]
      );
      stats = result.rows[0];
    } else {
      stats = statsResult.rows[0];

      // Update streak
      const today = new Date().toDateString();
      const lastActivityDate = stats.last_activity_date ? new Date(stats.last_activity_date).toDateString() : null;
      const isNewDay = today !== lastActivityDate;

      let newStreak = stats.current_streak;
      if (isCorrect) {
        newStreak = (newStreak || 0) + 1;
      } else {
        newStreak = 0;
      }

      // Update level based on total points
      const newTotalPoints = (stats.total_points || 0) + points;
      let newLevel = stats.level || 1;
      for (const [level, config] of Object.entries(LEVELS)) {
        if (newTotalPoints >= config.pointsRequired) {
          newLevel = parseInt(level);
        }
      }

      // Update in database
      const result = await pool.query(
        `UPDATE gamification_stats
         SET total_points = $1,
             level = $2,
             current_streak = $3,
             longest_streak = GREATEST(longest_streak, $4),
             last_activity_date = CURRENT_DATE,
             updated_at = CURRENT_TIMESTAMP
         WHERE student_id = $5
         RETURNING *`,
        [newTotalPoints, newLevel, newStreak, newStreak, studentId]
      );
      stats = result.rows[0];
    }

    return {
      pointsEarned: points,
      totalPoints: stats.total_points,
      level: stats.level,
      currentStreak: stats.current_streak,
      levelName: LEVELS[stats.level]?.name || 'Starter'
    };
  } catch (error) {
    console.error('Error updating gamification stats:', error);
    throw error;
  }
}

/**
 * Award a badge to a student if criteria are met
 * @param {number} studentId
 * @param {string} badgeType - badge key from BADGES
 */
export async function awardBadge(studentId, badgeType) {
  const badgeConfig = BADGES[badgeType];
  if (!badgeConfig) {
    console.warn(`Badge type ${badgeType} not defined`);
    return null;
  }

  try {
    // Check if already earned
    const existingResult = await pool.query(
      'SELECT id FROM student_badges WHERE student_id = $1 AND badge_type = $2',
      [studentId, badgeConfig.type]
    );

    if (existingResult.rows.length > 0) {
      return { message: 'Badge already earned' };
    }

    // Award badge
    const result = await pool.query(
      `INSERT INTO student_badges (
        student_id, badge_type, badge_name, badge_description
      ) VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [studentId, badgeConfig.type, badgeConfig.name, badgeConfig.description]
    );

    return {
      badgeAwarded: true,
      badge: result.rows[0]
    };
  } catch (error) {
    console.error('Error awarding badge:', error);
    throw error;
  }
}

/**
 * Check if student qualifies for any badges based on current stats
 * @param {number} studentId
 * @param {object} context - { topicId, currentStreak, perfectStreak, accuracy, etc. }
 */
export async function checkBadgeQualifications(studentId, context = {}) {
  const { currentStreak, perfectStreak, daysActive, masteredTopics, accuracy, speedProblems, timeSeconds } = context;

  const badgesUnlocked = [];

  try {
    // Check Sharpshooter (95%+ accuracy)
    if (accuracy >= 95) {
      const result = await awardBadge(studentId, 'SHARPSHOOTER');
      if (result.badgeAwarded) badgesUnlocked.push(result.badge);
    }

    // Check Perfectionist (15 correct in a row)
    if (perfectStreak && perfectStreak >= 15) {
      const result = await awardBadge(studentId, 'PERFECTIONIST');
      if (result.badgeAwarded) badgesUnlocked.push(result.badge);
    }

    // Check Week Warrior (7 days)
    if (daysActive >= 7) {
      const result = await awardBadge(studentId, 'WEEK_WARRIOR');
      if (result.badgeAwarded) badgesUnlocked.push(result.badge);
    }

    // Check Month Marathon (30 days)
    if (daysActive >= 30) {
      const result = await awardBadge(studentId, 'MONTH_MARATHON');
      if (result.badgeAwarded) badgesUnlocked.push(result.badge);
    }

    // Check Speed Demon (10 problems in <5 min)
    if (speedProblems >= 10 && timeSeconds < 300) {
      const result = await awardBadge(studentId, 'SPEED_DEMON');
      if (result.badgeAwarded) badgesUnlocked.push(result.badge);
    }

    // Check Scholar (3+ mastered topics)
    if (masteredTopics >= 3) {
      const result = await awardBadge(studentId, 'SCHOLAR');
      if (result.badgeAwarded) badgesUnlocked.push(result.badge);
    }

    return badgesUnlocked;
  } catch (error) {
    console.error('Error checking badge qualifications:', error);
    throw error;
  }
}

/**
 * Get detailed gamification profile for a student
 * @param {number} studentId
 */
export async function getStudentGamificationProfile(studentId) {
  try {
    const [statsResult, badgesResult] = await Promise.all([
      pool.query('SELECT * FROM gamification_stats WHERE student_id = $1', [studentId]),
      pool.query('SELECT * FROM student_badges WHERE student_id = $1 ORDER BY earned_at DESC', [studentId])
    ]);

    const stats = statsResult.rows[0] || {
      total_points: 0,
      level: 1,
      current_streak: 0,
      longest_streak: 0
    };

    return {
      points: stats.total_points,
      level: stats.level,
      levelName: LEVELS[stats.level]?.name || 'Starter',
      currentStreak: stats.current_streak,
      longestStreak: stats.longest_streak,
      badges: badgesResult.rows.map(row => ({
        type: row.badge_type,
        name: row.badge_name,
        earnedAt: row.earned_at
      })),
      badgeCount: badgesResult.rows.length
    };
  } catch (error) {
    console.error('Error fetching gamification profile:', error);
    throw error;
  }
}

/**
 * Calculate progress to next level
 * @param {number} studentId
 */
export async function getLevelProgress(studentId) {
  try {
    const result = await pool.query(
      'SELECT total_points, level FROM gamification_stats WHERE student_id = $1',
      [studentId]
    );

    if (result.rows.length === 0) {
      return {
        currentLevel: 1,
        currentPoints: 0,
        pointsToNextLevel: LEVELS[2].pointsRequired,
        progressPercent: 0
      };
    }

    const stats = result.rows[0];
    const currentLevel = stats.level || 1;
    const nextLevel = currentLevel + 1;
    const currentPoints = stats.total_points || 0;

    if (!LEVELS[nextLevel]) {
      return {
        currentLevel,
        currentPoints,
        pointsToNextLevel: 0,
        progressPercent: 100,
        maxLevel: true
      };
    }

    const nextLevelPoints = LEVELS[nextLevel].pointsRequired;
    const currentLevelPoints = LEVELS[currentLevel].pointsRequired;
    const pointsInLevel = currentPoints - currentLevelPoints;
    const pointsNeededForLevel = nextLevelPoints - currentLevelPoints;
    const progressPercent = Math.round((pointsInLevel / pointsNeededForLevel) * 100);

    return {
      currentLevel,
      currentLevelName: LEVELS[currentLevel].name,
      currentPoints,
      nextLevelName: LEVELS[nextLevel].name,
      pointsToNextLevel: Math.max(0, nextLevelPoints - currentPoints),
      progressPercent: Math.min(100, Math.max(0, progressPercent))
    };
  } catch (error) {
    console.error('Error calculating level progress:', error);
    throw error;
  }
}

export default {
  updateGamificationStats,
  awardBadge,
  checkBadgeQualifications,
  getStudentGamificationProfile,
  getLevelProgress,
  POINTS,
  LEVELS,
  BADGES
};
