import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius } from '../constants/colors';

export function LeaderboardEntry({ entry, isCurrentUser = false }) {
  const getMedalEmoji = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <View style={[styles.container, isCurrentUser && styles.currentUserContainer]}>
      {/* Rank/Medal */}
      <View style={styles.rankSection}>
        <Text style={[styles.medal, typography.subtitle2]}>
          {getMedalEmoji(entry.rank)}
        </Text>
      </View>

      {/* Player Info */}
      <View style={styles.infoSection}>
        <Text style={[styles.name, typography.subtitle2, isCurrentUser && styles.currentUserName]}>
          {entry.name}
          {isCurrentUser && ' (You)'}
        </Text>
        <Text style={[styles.grade, typography.caption]}>
          Grade {entry.grade}
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsSection}>
        <View style={styles.stat}>
          <Text style={[styles.statValue, typography.subtitle2]}>
            {entry.points}
          </Text>
          <Text style={[styles.statLabel, typography.caption]}>
            pts
          </Text>
        </View>

        <View style={styles.stat}>
          <Text style={[styles.statValue, typography.subtitle2]}>
            Lvl {entry.level}
          </Text>
        </View>

        {entry.currentStreak > 0 && (
          <View style={styles.stat}>
            <Text style={[styles.statValue, typography.subtitle2]}>
              🔥 {entry.currentStreak}
            </Text>
          </View>
        )}

        {entry.badgeCount > 0 && (
          <View style={styles.stat}>
            <Text style={[styles.statValue, typography.subtitle2]}>
              🎖️ {entry.badgeCount}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm
  },
  currentUserContainer: {
    backgroundColor: colors.primary + '10', // 10% opacity
    borderLeftWidth: 3,
    borderLeftColor: colors.primary
  },
  rankSection: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md
  },
  medal: {
    fontSize: 24,
    textAlign: 'center'
  },
  infoSection: {
    flex: 1
  },
  name: {
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing.xs
  },
  currentUserName: {
    color: colors.primary,
    fontWeight: '700'
  },
  grade: {
    color: colors.text.secondary
  },
  statsSection: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center'
  },
  stat: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  statValue: {
    color: colors.text.primary,
    fontWeight: '600'
  },
  statLabel: {
    color: colors.text.secondary,
    marginTop: spacing.xs
  }
});
