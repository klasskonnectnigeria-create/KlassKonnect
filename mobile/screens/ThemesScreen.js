import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../store/authStore';
import { useContentStore } from '../store/contentStore';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { colors, spacing, typography } from '../constants/colors';
import { API_URL } from '../config/api';

export function ThemesScreen({ route, navigation }) {
  const router = useRouter();
  const { themeId, themeName } = route.params;
  const { token } = useAuthStore();
  const { topics, fetchTopics } = useContentStore();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    loadData();
  }, [themeId]);

  const loadData = async () => {
    setLoading(true);
    try {
      // Fetch topics for this theme
      await fetchTopics(API_URL, token, themeId);

      // Fetch progress for each topic
      const response = await fetch(
        `${API_URL}/api/content/themes/${themeId}/progress`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const progressData = await response.json();

      // Create progress map
      const progressMap = {};
      progressData.forEach((p) => {
        progressMap[p.id] = p;
      });
      setProgress(progressMap);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const themeTopics = topics[themeId] || [];
  const completedCount = Object.values(progress).filter((p) => p.status === 'completed').length;
  const overallProgress = themeTopics.length > 0 ? (completedCount / themeTopics.length) * 100 : 0;

  const getStatusBadge = (topicId) => {
    const p = progress[topicId];
    if (!p || p.status === 'not_started') return '🔒 Not Started';
    if (p.status === 'in_progress') return '📖 In Progress';
    return '✅ Completed';
  };

  const getStatusColor = (topicId) => {
    const p = progress[topicId];
    if (!p || p.status === 'not_started') return colors.text.light;
    if (p.status === 'in_progress') return colors.warning;
    return colors.success;
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
      {/* Header with back button */}
      <SafeAreaView edges={['top']} style={styles.headerSafeArea}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={[styles.backArrow, typography.h3]}>←</Text>
          </TouchableOpacity>

          <View style={styles.headerContent}>
            <Text style={[styles.title, typography.h2]} numberOfLines={1}>
              {themeName}
            </Text>

            <Text style={[styles.subtitle, typography.body2]}>
              {themeTopics.length} topics
            </Text>
          </View>
        </View>
      </SafeAreaView>

      {/* Progress Card */}
      <Card variant="elevated" style={styles.progressCard}>
        <ProgressBar
          progress={overallProgress}
          label="Subject Progress"
          style={styles.progressBar}
        />
        <Text style={[styles.progressStats, typography.body2]}>
          {completedCount} of {themeTopics.length} topics completed
        </Text>
      </Card>

      {/* Topics List */}
      {themeTopics.map((topic, index) => (
        <TouchableOpacity
          key={topic.id}
          onPress={() => router.push({ pathname: '/(app)/topic-details', params: { topicId: topic.id, topicName: topic.name } })}
        >
          <Card variant="elevated" style={styles.topicCard}>
            <View style={styles.topicHeader}>
              <View style={styles.topicNumber}>
                <Text style={[styles.topicNumberText, typography.subtitle2]}>
                  {index + 1}
                </Text>
              </View>
              <View style={styles.topicInfo}>
                <Text style={[styles.topicName, typography.subtitle2]}>
                  {topic.name}
                </Text>
                <Text style={[styles.topicOutcome, typography.caption]}>
                  {topic.learning_outcome?.substring(0, 60)}...
                </Text>
              </View>
              <Text style={[styles.statusBadge, { color: getStatusColor(topic.id) }]}>
                {getStatusBadge(topic.id)}
              </Text>
            </View>

            {/* Progress for this topic */}
            {progress[topic.id] && (
              <ProgressBar
                progress={progress[topic.id].understanding_level || 0}
                showPercentage={true}
                style={styles.topicProgress}
              />
            )}

            {/* Attempts info */}
            {progress[topic.id]?.attempts > 0 && (
              <Text style={[styles.attemptsText, typography.caption]}>
                {progress[topic.id].attempts} attempt{progress[topic.id].attempts > 1 ? 's' : ''}
              </Text>
            )}
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerSafeArea: {
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
    alignItems: 'center',
    marginBottom: spacing.lg
  },
  backButton: {
    paddingRight: spacing.md
  },
  backArrow: {
    color: colors.primary
  },
  headerContent: {
    flex: 1
  },
  title: {
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: spacing.xs
  },
  subtitle: {
    color: colors.text.secondary
  },
  progressCard: {
    marginBottom: spacing.lg,
    backgroundColor: colors.primaryLight
  },
  progressBar: {
    marginBottom: spacing.md
  },
  progressStats: {
    color: colors.text.secondary,
    textAlign: 'center',
    fontWeight: '500'
  },
  topicCard: {
    marginBottom: spacing.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md
  },
  topicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md
  },
  topicNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md
  },
  topicNumberText: {
    color: colors.text.inverse,
    fontWeight: 'bold'
  },
  topicInfo: {
    flex: 1
  },
  topicName: {
    color: colors.text.primary,
    fontWeight: '600',
    marginBottom: spacing.xs
  },
  topicOutcome: {
    color: colors.text.secondary
  },
  statusBadge: {
    fontWeight: '600',
    fontSize: 12
  },
  topicProgress: {
    marginBottom: spacing.sm
  },
  attemptsText: {
    color: colors.text.secondary,
    fontStyle: 'italic'
  }
});
