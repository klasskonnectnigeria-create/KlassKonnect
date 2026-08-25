import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuthStore } from '../store/authStore';
import { useGamificationStore } from '../store/gamificationStore';
import { PointsDisplay, StreakDisplay, BadgesDisplay } from '../components/GamificationDisplay';
import { ProgressBar } from '../components/ProgressBar';
import { Card } from '../components/Card';
import { colors, spacing, typography } from '../constants/colors';
import { API_URL } from '../config/api';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gamificationService } from '../services/gamificationService';

export function LeaderboardScreen() {
  const router = useRouter();
  const { student, token } = useAuthStore();
  const {
    loadGamificationData,
    totalPoints,
    level,
    currentStreak,
    longestStreak,
    badges
  } = useGamificationStore();

  const [isLoading, setIsLoading] = useState(true);
  const [subjectProgress, setSubjectProgress] = useState([]);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      if (!student?.id || !token) {
        if (mounted) setIsLoading(false);
        return;
      }

      try {
        await gamificationService.initializeForStudent(student.id);
        if (!mounted) return;
        await loadGamificationData(student.id);

        const response = await fetch(`${API_URL}/api/progress/by-subject`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (response.ok) {
          const data = await response.json();
          if (mounted) setSubjectProgress(data.subjects || []);
        } else {
          console.warn('Failed to fetch subject progress:', response.status);
        }
      } catch (error) {
        console.warn('Error loading progress data:', error);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, [student?.id, token]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView edges={['top']} style={styles.headerSafeArea}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.replace('/(app)/home')}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>

          <Text style={[styles.title, typography.h2]}>🏆 Your Achievements</Text>

          <View style={styles.headerSpacer} />
        </View>
      </SafeAreaView>

      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

      {!isLoading && (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={[styles.introText, typography.body2]}>
            Your points, streak, badges, and progress by subject.
          </Text>

          <PointsDisplay points={totalPoints} level={level} />
          <StreakDisplay currentStreak={currentStreak} longestStreak={longestStreak} />
          {badges.length > 0 ? (
            <BadgesDisplay badges={badges} limit={12} />
          ) : (
            <View style={styles.emptyBadges}>
              <Text style={[styles.emptyBadgesText, typography.body2]}>
                No badges yet — complete topics and keep your streak going to earn your first one!
              </Text>
            </View>
          )}

          <Text style={[styles.sectionTitle, typography.subtitle1]}>
            📚 Progress by Subject
          </Text>

          {subjectProgress.length === 0 && (
            <View style={styles.emptyBadges}>
              <Text style={[styles.emptyBadgesText, typography.body2]}>
                No subject progress yet — start exploring a topic to begin tracking!
              </Text>
            </View>
          )}

          {subjectProgress.map((subj) => {
            const percent = subj.totalTopics > 0
              ? (subj.completedTopics / subj.totalTopics) * 100
              : 0;

            return (
              <Card key={subj.themeId} variant="elevated" style={styles.subjectCard}>
                <Text style={[styles.subjectName, typography.subtitle2]}>
                  {subj.subject}
                </Text>
                <ProgressBar
                  progress={percent}
                  label={`${subj.completedTopics} of ${subj.totalTopics} topics`}
                  style={styles.subjectProgressBar}
                />
                {subj.avgUnderstanding > 0 && (
                  <Text style={[styles.understandingText, typography.caption]}>
                    Avg. understanding: {Math.round(subj.avgUnderstanding)}%
                  </Text>
                )}
              </Card>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  headerSafeArea: {
    backgroundColor: colors.surface
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22
  },
  backButtonText: {
    fontSize: 36,
    lineHeight: 40,
    color: colors.primary,
    fontWeight: '300'
  },
  title: {
    color: colors.primary,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  headerSpacer: {
    width: 44
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    paddingBottom: spacing.xl
  },
  introText: {
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: spacing.md,
    marginHorizontal: spacing.md
  },
  emptyBadges: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.md,
    padding: spacing.lg,
    alignItems: 'center'
  },
  emptyBadgesText: {
    color: colors.text.secondary,
    textAlign: 'center'
  },
  sectionTitle: {
    color: colors.text.primary,
    fontWeight: '600',
    marginHorizontal: spacing.md,
    marginTop: spacing.lg,
    marginBottom: spacing.sm
  },
  subjectCard: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.sm
  },
  subjectName: {
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing.sm
  },
  subjectProgressBar: {
    marginBottom: spacing.xs
  },
  understandingText: {
    color: colors.text.secondary,
    marginTop: spacing.xs
  }
});
