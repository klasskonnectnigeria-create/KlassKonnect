import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, spacing, typography, borderRadius } from '../constants/colors';

export function LeaderboardEntry({ entry, isCurrentUser = false }) {
  // Medal colors for the top 3 ranks (no emoji - see root CLAUDE.md's "no emoji in
  // product UI" brand rule). Anything outside the top 3 falls back to a plain rank number.
  const medalColor = (rank) => {
    if (rank === 1) return '#D4AF37'; // gold
    if (rank === 2) return '#A8A9AD'; // silver
    if (rank === 3) return '#CD7F32'; // bronze
    return null;
  };

  return (
    <View style={[styles.container, isCurrentUser && styles.currentUserContainer]}>
      {/* Rank/Medal */}
      <View style={styles.rankSection}>
        {medalColor(entry.rank) ? (
          <MaterialCommunityIcons name="medal" size={26} color={medalColor(entry.rank)} />
        ) : (
          <Text style={[styles.medal, typography.subtitle2]}>
            {`#${entry.rank}`}
          </Text>
        )}
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
          <View style={[styles.stat, styles.statRow]}>
            <MaterialCommunityIcons name="fire" size={16} color={colors.warning} />
            <Text style={[styles.statValue, typography.subtitle2]}>
              {entry.currentStreak}
            </Text>
          </View>
        )}

        {entry.badgeCount > 0 && (
          <View style={[styles.stat, styles.statRow]}>
            <MaterialCommunityIcons name="trophy-variant" size={16} color={colors.secondary} />
            <Text style={[styles.statValue, typography.subtitle2]}>
              {entry.badgeCount}
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
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs
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
