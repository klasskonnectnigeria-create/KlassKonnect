import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, ActivityIndicator, Alert, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
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

export function HomeScreen({ onLogout }) {
  const router = useRouter();
  const { student, token, logout } = useAuthStore();
  const { themes, setThemes, fetchThemes } = useContentStore();
  const { loadGamificationData, totalPoints, level, currentStreak, longestStreak, badges } = useGamificationStore();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ completedTopics: 0, totalTopics: 0, avgUnderstanding: 0 });

  useEffect(() => {
    let mounted = true;
    let abortController = new AbortController();

    const load = async () => {
      try {
        if (!token || !student?.id) {
          if (mounted) {
            setLoading(false);
          }
          return;
        }

        if (mounted) {
          setLoading(true);
        }

        // Fetch themes
        await fetchThemes(API_URL, token);

        if (!mounted) return;

        // Fetch progress stats
        const response = await fetch(`${API_URL}/api/progress`, {
          headers: { Authorization: `Bearer ${token}` },
          signal: abortController.signal
        });

        if (!response.ok) {
          throw new Error(`Progress request failed: ${response.status}`);
        }

        const data = await response.json();

        if (!mounted) return;
        setStats(data);

        // Initialize and load gamification data
        await gamificationService.initializeForStudent(student.id);

        if (!mounted) return;

        await loadGamificationData(student.id);

        if (!mounted) return;

        // Sync gamification stats to backend
        try {
          await gamificationSyncService.syncToBackend(student.id, token);
        } catch (syncError) {
          console.warn('Failed to sync gamification stats:', syncError);
        }
      } catch (error) {
        if (mounted && error.name !== 'AbortError') {
          console.error('Error loading data:', error);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      mounted = false;
      abortController.abort();
    };
  }, [token, student?.id, fetchThemes, loadGamificationData]);

  const handleLogout = async () => {
    try {
      setLoading(true);

      const success = await logout();

      if (success) {
        if (onLogout) {
          onLogout();
        } else {
          router.replace('/(auth)/login');
        }
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
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
          <Pressable onPress={() => router.push('/(app)/leaderboard')} style={styles.leaderboardButton}>
            <Text style={[styles.buttonText, typography.body2]}>🏆</Text>
          </Pressable>
          <Pressable onPress={handleLogout} style={styles.logoutButton}>
            <Text style={[styles.logoutText, typography.body2]}>Logout</Text>
          </Pressable>
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
          onPress={() => router.push({ pathname: '/(app)/themes', params: { themeId: theme.id, themeName: theme.name } })}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
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
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
    paddingTop: spacing.sm,
    gap: spacing.md
  },
  headerContent: {
    flex: 1,
    minWidth: 0,
    paddingRight: spacing.sm
  },
  greeting: {
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: spacing.xs,
    fontSize: 30,
    lineHeight: 38
  },
  headerSubtitle: {
    color: colors.text.secondary,
    fontSize: 18,
    lineHeight: 24
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flexShrink: 0
  },
  leaderboardButton: {
    width: 58,
    height: 58,
    borderRadius: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 25
  },
  logoutButton: {
    height: 58,
    paddingHorizontal: spacing.md,
    borderRadius: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center'
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
