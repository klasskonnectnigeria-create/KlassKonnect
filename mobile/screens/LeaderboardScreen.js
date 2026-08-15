import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, ScrollView, Text, TouchableOpacity,
  ActivityIndicator, RefreshControl, FlatList
} from 'react-native';
import { useAuthStore } from '../store/authStore';
import { useLeaderboardStore } from '../store/leaderboardStore';
import { LeaderboardEntry } from '../components/LeaderboardEntry';
import { Card } from '../components/Card';
import { colors, spacing, typography, borderRadius } from '../constants/colors';

export function LeaderboardScreen() {
  const { student, token } = useAuthStore();
  const {
    globalLeaderboard,
    gradeLeaderboard,
    weeklyLeaderboard,
    studentRank,
    surroundingPlayers,
    isLoading,
    fetchGlobalLeaderboard,
    fetchGradeLeaderboard,
    fetchWeeklyLeaderboard,
    fetchStudentRank,
    refreshAll
  } = useLeaderboardStore();

  const [activeTab, setActiveTab] = useState('global'); // 'global', 'grade', 'weekly'
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadLeaderboards();
  }, []);

  const loadLeaderboards = async () => {
    if (!token || !student) return;
    await refreshAll(token, student.grade);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadLeaderboards();
    setRefreshing(false);
  };

  const renderLeaderboard = () => {
    let data = [];

    switch (activeTab) {
      case 'global':
        data = globalLeaderboard;
        break;
      case 'grade':
        data = gradeLeaderboard;
        break;
      case 'weekly':
        data = weeklyLeaderboard;
        break;
      default:
        data = globalLeaderboard;
    }

    if (data.length === 0 && !isLoading) {
      return (
        <View style={styles.emptyState}>
          <Text style={[styles.emptyStateText, typography.body2]}>
            No data available yet
          </Text>
        </View>
      );
    }

    return (
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.studentId}-${item.rank}`}
        renderItem={({ item }) => (
          <LeaderboardEntry
            entry={item}
            isCurrentUser={item.studentId === student?.id}
          />
        )}
        scrollEnabled={false}
        contentContainerStyle={styles.listContent}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, typography.h2]}>🏆 Leaderboard</Text>
      </View>

      {/* Your Rank Card */}
      {studentRank && (
        <Card style={styles.rankCard}>
          <View style={styles.rankCardContent}>
            <View style={styles.rankCardLeft}>
              <Text style={[styles.yourRankLabel, typography.caption]}>
                YOUR RANK
              </Text>
              <Text style={[styles.yourRank, typography.h1]}>
                #{studentRank}
              </Text>
            </View>

            <View style={styles.rankCardDivider} />

            <View style={styles.rankCardRight}>
              <View style={styles.rankCardStat}>
                <Text style={[styles.rankCardStatValue, typography.subtitle1]}>
                  {surroundingPlayers.find(p => p.isCurrentUser)?.points || 0}
                </Text>
                <Text style={[styles.rankCardStatLabel, typography.caption]}>
                  Points
                </Text>
              </View>

              <View style={styles.rankCardStat}>
                <Text style={[styles.rankCardStatValue, typography.subtitle1]}>
                  {surroundingPlayers.find(p => p.isCurrentUser)?.currentStreak || 0}
                </Text>
                <Text style={[styles.rankCardStatLabel, typography.caption]}>
                  Streak
                </Text>
              </View>

              <View style={styles.rankCardStat}>
                <Text style={[styles.rankCardStatValue, typography.subtitle1]}>
                  {surroundingPlayers.find(p => p.isCurrentUser)?.badgeCount || 0}
                </Text>
                <Text style={[styles.rankCardStatLabel, typography.caption]}>
                  Badges
                </Text>
              </View>
            </View>
          </View>
        </Card>
      )}

      {/* Tab Navigation */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'global' && styles.activeTab]}
          onPress={() => setActiveTab('global')}
        >
          <Text style={[
            styles.tabLabel,
            typography.subtitle2,
            activeTab === 'global' && styles.activeTabLabel
          ]}>
            🌍 Global
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'grade' && styles.activeTab]}
          onPress={() => setActiveTab('grade')}
        >
          <Text style={[
            styles.tabLabel,
            typography.subtitle2,
            activeTab === 'grade' && styles.activeTabLabel
          ]}>
            🎓 Grade {student?.grade}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'weekly' && styles.activeTab]}
          onPress={() => setActiveTab('weekly')}
        >
          <Text style={[
            styles.tabLabel,
            typography.subtitle2,
            activeTab === 'weekly' && styles.activeTabLabel
          ]}>
            🔥 Hot Streaks
          </Text>
        </TouchableOpacity>
      </View>

      {/* Leaderboard List */}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

      {!isLoading && (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {renderLeaderboard()}
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
  header: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border
  },
  title: {
    color: colors.primary,
    fontWeight: 'bold'
  },
  rankCard: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.md,
    backgroundColor: colors.surface,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary
  },
  rankCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rankCardLeft: {
    flex: 1,
    alignItems: 'center'
  },
  rankCardDivider: {
    width: 1,
    height: 60,
    backgroundColor: colors.border,
    marginHorizontal: spacing.md
  },
  rankCardRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  yourRankLabel: {
    color: colors.text.secondary,
    fontWeight: '600',
    marginBottom: spacing.xs
  },
  yourRank: {
    color: colors.primary,
    fontWeight: '700'
  },
  rankCardStat: {
    alignItems: 'center'
  },
  rankCardStatValue: {
    color: colors.text.primary,
    fontWeight: '600',
    marginBottom: spacing.xs
  },
  rankCardStatLabel: {
    color: colors.text.secondary
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.sm
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    alignItems: 'center'
  },
  activeTab: {
    borderBottomColor: colors.primary
  },
  tabLabel: {
    textAlign: 'center',
    color: colors.text.secondary,
    fontWeight: '500'
  },
  activeTabLabel: {
    color: colors.primary,
    fontWeight: '600'
  },
  scrollView: {
    flex: 1
  },
  scrollContent: {
    padding: spacing.md
  },
  listContent: {
    gap: spacing.sm
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xl
  },
  emptyStateText: {
    color: colors.text.secondary,
    textAlign: 'center'
  }
});
