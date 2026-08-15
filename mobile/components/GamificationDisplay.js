import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius } from '../constants/colors';

export function PointsDisplay({ points, level }) {
  const nextLevelPoints = (level * 500);
  const currentLevelPoints = ((level - 1) * 500);
  const pointsInLevel = points - currentLevelPoints;
  const progressPercent = Math.round((pointsInLevel / 500) * 100);

  return (
    <View style={styles.pointsContainer}>
      <View style={styles.pointsRow}>
        <View style={styles.pointsBox}>
          <Text style={[styles.pointsValue, typography.h3]}>{points}</Text>
          <Text style={[styles.pointsLabel, typography.caption]}>Points</Text>
        </View>
        <View style={styles.levelBox}>
          <Text style={[styles.levelValue, typography.h2]}>Lvl {level}</Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${Math.min(progressPercent, 100)}%` }
              ]}
            />
          </View>
          <Text style={[styles.progressText, typography.caption]}>
            {pointsInLevel}/500
          </Text>
        </View>
      </View>
    </View>
  );
}

export function StreakDisplay({ currentStreak, longestStreak }) {
  return (
    <View style={styles.streakContainer}>
      <View style={styles.streakBox}>
        <Text style={styles.streakEmoji}>🔥</Text>
        <View>
          <Text style={[styles.streakValue, typography.h3]}>{currentStreak}</Text>
          <Text style={[styles.streakLabel, typography.body2]}>Day Streak</Text>
        </View>
      </View>
      {longestStreak > 0 && longestStreak !== currentStreak && (
        <View style={styles.maxStreakBox}>
          <Text style={[styles.maxStreakValue, typography.body2]}>
            Best: {longestStreak} 🏆
          </Text>
        </View>
      )}
    </View>
  );
}

export function BadgesDisplay({ badges = [], limit = 5 }) {
  const displayBadges = badges.slice(0, limit);
  const remainingCount = Math.max(0, badges.length - limit);

  return (
    <View style={styles.badgesContainer}>
      <Text style={[styles.badgesTitle, typography.subtitle2]}>Badges Earned</Text>
      <View style={styles.badgesList}>
        {displayBadges.map((badge, idx) => (
          <View key={idx} style={styles.badgeItem}>
            <Text style={styles.badgeEmoji}>
              {badge.badge_name ? badge.badge_name.split(' ')[0] : '🏆'}
            </Text>
            <Text style={[styles.badgeName, typography.caption]} numberOfLines={1}>
              {badge.badge_name}
            </Text>
          </View>
        ))}
        {remainingCount > 0 && (
          <View style={styles.badgeItem}>
            <Text style={styles.badgeEmoji}>+{remainingCount}</Text>
            <Text style={[styles.badgeName, typography.caption]}>more</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export function BadgeUnlockedNotification({ badge }) {
  if (!badge) return null;

  return (
    <View style={styles.notificationContainer}>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationEmoji}>🎉</Text>
        <View style={styles.notificationText}>
          <Text style={[styles.notificationTitle, typography.subtitle2]}>
            Badge Unlocked!
          </Text>
          <Text style={[styles.notificationDesc, typography.body2]}>
            {badge.name}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pointsContainer: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border
  },
  pointsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md
  },
  pointsBox: {
    flex: 0.4,
    alignItems: 'center',
    paddingVertical: spacing.sm
  },
  pointsValue: {
    color: colors.primary,
    fontWeight: 'bold'
  },
  pointsLabel: {
    color: colors.text.secondary,
    marginTop: spacing.xs
  },
  levelBox: {
    flex: 0.6,
    justifyContent: 'center'
  },
  levelValue: {
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: spacing.sm
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: borderRadius.sm,
    overflow: 'hidden',
    marginBottom: spacing.xs
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary
  },
  progressText: {
    color: colors.text.secondary,
    textAlign: 'center'
  },

  streakContainer: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.md,
    flexDirection: 'row',
    gap: spacing.md
  },
  streakBox: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md
  },
  streakEmoji: {
    fontSize: 32
  },
  streakValue: {
    color: colors.primary,
    fontWeight: 'bold'
  },
  streakLabel: {
    color: colors.text.secondary,
    marginTop: spacing.xs
  },
  maxStreakBox: {
    flex: 1,
    backgroundColor: '#FFF3CD',
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFE69C'
  },
  maxStreakValue: {
    color: '#856404',
    fontWeight: '600',
    textAlign: 'center'
  },

  badgesContainer: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.md
  },
  badgesTitle: {
    color: colors.primary,
    marginBottom: spacing.md,
    fontWeight: '600'
  },
  badgesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md
  },
  badgeItem: {
    width: '30%',
    alignItems: 'center',
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border
  },
  badgeEmoji: {
    fontSize: 32,
    marginBottom: spacing.xs
  },
  badgeName: {
    color: colors.text.primary,
    textAlign: 'center'
  },

  notificationContainer: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.md,
    backgroundColor: '#D4EDDA',
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md
  },
  notificationEmoji: {
    fontSize: 28
  },
  notificationText: {
    flex: 1
  },
  notificationTitle: {
    color: '#155724',
    fontWeight: '600',
    marginBottom: spacing.xs
  },
  notificationDesc: {
    color: '#155724'
  }
});
