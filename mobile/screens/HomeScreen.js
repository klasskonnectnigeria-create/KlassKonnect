import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuthStore } from '../store/authStore';
import { useContentStore } from '../store/contentStore';
import { useGamificationStore } from '../store/gamificationStore';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { PointsDisplay, StreakDisplay, BadgesDisplay } from '../components/GamificationDisplay';
import { colors, spacing, typography } from '../constants/colors';
import { API_URL } from '../config/api';
import { gamificationService } from '../services/gamificationService';
import { gamificationSyncService } from '../services/gamificationSyncService';

export function HomeScreen({ navigation }) {
  const { student, token, logout } = useAuthStore();
  const { themes, setThemes, fetchThemes } = useContentStore();
  const { loadGamificationData, totalPoints, level, currentStreak, longestStreak, badges } = useGamificationStore();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ completedTopics: 0, totalTopics: 0, avgUnderstanding: 0 });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      // Fetch themes
      await fetchThemes(API_URL, token);

      // Fetch progress stats
      const response = await fetch(`${API_URL}/api/progress`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      setStats(data);

      // Initialize and load gamification data
      if (student?.id) {
        await gamificationService.initializeForStudent(student.id);
        await loadGamificationData(student.id);

        // Sync gamification stats to backend
        try {
          await gamificationSyncService.syncToBackend(student.id, token);
        } catch (syncError) {
          console.warn('Failed to sync gamification stats:', syncError);
          // Don't fail the whole load if sync fails
        }
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={[styles.greeting, typography.h2]}>
            Hi, {student?.fullName}! 👋
          </Text>
          <Text style={[styles.headerSubtitle, typography.body2]}>
            {student?.grade}
          </Text>
        </View>
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={() => navigation.navigate('leaderboard')} style={styles.leaderboardButton}>
            <Text style={[styles.buttonText, typography.body2]}>🏆</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={[styles.logoutText, typography.body2]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Progress Stats */}
      <Card variant="elevated" style={styles.statsCard}>
        <Text style={[styles.statsTitle, typography.subtitle1]}>
          📊 Your Progress
        </Text>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, typography.h2]}>
              {stats.completedTopics || 0}
            </Text>
            <Text style={[styles.statLabel, typography.body2]}>
              Topics Completed
            </Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, typography.h2]}>
              {Math.round(stats.avgUnderstanding || 0)}%
            </Text>
            <Text style={[styles.statLabel, typography.body2]}>
              Understanding
            </Text>
          </View>
        </View>
        <ProgressBar
          progress={stats.totalTopics > 0 ? (stats.completedTopics / stats.totalTopics) * 100 : 0}
          label="Overall Progress"
          style={styles.progressBar}
        />
      </Card>

      {/* Gamification Stats */}
      <PointsDisplay points={totalPoints} level={level} />
      <StreakDisplay currentStreak={currentStreak} longestStreak={longestStreak} />
      {badges.length > 0 && <BadgesDisplay badges={badges} limit={6} />}

      {/* Themes */}
      <Text style={[styles.sectionTitle, typography.subtitle1]}>
        📚 Mathematics Topics
      </Text>

      {themes.map((theme) => (
        <Card
          key={theme.id}
          variant="elevated"
          onPress={() => navigation.navigate('themes', { themeId: theme.id, themeName: theme.name })}
          style={styles.themeCard}
        >
          <Text style={[styles.themeName, typography.subtitle2]}>
            {theme.name}
          </Text>
          <Text style={[styles.themeDescription, typography.body2]}>
            {theme.description || 'Click to explore topics'}
          </Text>
          <Text style={[styles.arrow, typography.body1]}>
            →
          </Text>
        </Card>
      ))}

      {/* Quick Start CTA */}
      <Card variant="elevated" style={styles.ctaCard}>
        <Text style={[styles.ctaTitle, typography.subtitle2]}>
          🚀 Need Help?
        </Text>
        <Text style={[styles.ctaText, typography.body2]}>
          Select a topic above to start learning with your personal AI tutor
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  contentContainer: {
    padding: spacing.md,
    paddingBottom: spacing.lg
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg
  },
  headerContent: {
    flex: 1
  },
  greeting: {
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: spacing.xs
  },
  headerSubtitle: {
    color: colors.text.secondary
  },
  headerButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center'
  },
  leaderboardButton: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    borderRadius: 8,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    minWidth: 40,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18
  },
  logoutButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 8,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border
  },
  logoutText: {
    color: colors.text.primary,
    fontWeight: '500'
  },
  statsCard: {
    marginBottom: spacing.lg,
    backgroundColor: '#F0F7F0'
  },
  statsTitle: {
    color: colors.primary,
    marginBottom: spacing.md,
    fontWeight: '600'
  },
  statsGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md
  },
  statItem: {
    flex: 1,
    alignItems: 'center'
  },
  statValue: {
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: spacing.xs
  },
  statLabel: {
    color: colors.text.secondary,
    textAlign: 'center'
  },
  statDivider: {
    width: 1,
    height: 50,
    backgroundColor: colors.border
  },
  progressBar: {
    marginTop: spacing.md
  },
  sectionTitle: {
    color: colors.text.primary,
    fontWeight: '600',
    marginBottom: spacing.md,
    marginTop: spacing.md
  },
  themeCard: {
    marginBottom: spacing.md,
    position: 'relative'
  },
  themeName: {
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing.xs
  },
  themeDescription: {
    color: colors.text.secondary
  },
  arrow: {
    position: 'absolute',
    right: spacing.md,
    top: spacing.md,
    color: colors.primary
  },
  ctaCard: {
    backgroundColor: '#FFF8F0',
    marginTop: spacing.lg
  },
  ctaTitle: {
    color: colors.accent,
    fontWeight: '600',
    marginBottom: spacing.xs
  },
  ctaText: {
    color: colors.text.secondary
  }
});
