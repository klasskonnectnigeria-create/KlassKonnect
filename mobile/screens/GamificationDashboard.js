import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  Animated
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

const { width } = Dimensions.get('window');

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Level names and colors
const LEVELS = {
  1: { name: 'Starter', color: '#0B1B3F', emoji: '⭐' },
  2: { name: 'Explorer', color: '#1B54F5', emoji: '🧭' },
  3: { name: 'Challenger', color: '#F5A524', emoji: '⚡' },
  4: { name: 'Expert', color: '#E4572E', emoji: '🎓' },
  5: { name: 'Master', color: '#0E9F6E', emoji: '👑' }
};

const BadgeGrid = ({ badges }) => {
  if (!badges || badges.length === 0) {
    return (
      <View style={styles.noBadgesContainer}>
        <Text style={styles.noBadgesText}>No badges yet. Keep learning! 🎯</Text>
      </View>
    );
  }

  return (
    <View style={styles.badgeGrid}>
      {badges.map((badge, index) => (
        <TouchableOpacity key={index} style={styles.badgeCard}>
          <Text style={styles.badgeName}>{badge.name}</Text>
          <Text style={styles.badgeDate}>
            {new Date(badge.earnedAt).toLocaleDateString()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const LevelProgressBar = ({ current, total, progressPercent }) => {
  const progressWidth = (progressPercent / 100) * (width - 60);

  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressLabelRow}>
        <Text style={styles.progressLabel}>Progress to Level {current + 1}</Text>
        <Text style={styles.progressPercent}>{progressPercent}%</Text>
      </View>
      <View style={styles.progressBarBackground}>
        <Animated.View
          style={[
            styles.progressBarFill,
            { width: progressWidth }
          ]}
        />
      </View>
    </View>
  );
};

const StatCard = ({ icon, label, value, color = '#1B54F5' }) => (
  <View style={styles.statCard}>
    <View style={[styles.statIcon, { backgroundColor: color }]}>
      <MaterialCommunityIcons name={icon} size={24} color="white" />
    </View>
    <View style={styles.statContent}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  </View>
);

export function GamificationDashboard({ token }) {
  const [profile, setProfile] = useState(null);
  const [levelProgress, setLevelProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchGamificationData();
  }, []);

  const fetchGamificationData = async () => {
    try {
      setLoading(true);
      const [profileRes, progressRes] = await Promise.all([
        axios.get(`${API_URL}/gamification/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get(`${API_URL}/gamification/level-progress`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      setProfile(profileRes.data);
      setLevelProgress(progressRes.data);
    } catch (error) {
      console.error('Failed to fetch gamification data:', error);
      Alert.alert('Error', 'Failed to load gamification data');
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchGamificationData();
    setRefreshing(false);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1B54F5" />
        <Text style={styles.loadingText}>Loading your stats...</Text>
      </View>
    );
  }

  if (!profile || !levelProgress) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Unable to load gamification data</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchGamificationData}>
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const level = profile.level;
  const levelInfo = LEVELS[level] || LEVELS[1];

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Level Card */}
      <View style={[styles.levelCard, { borderLeftColor: levelInfo.color }]}>
        <View style={styles.levelHeader}>
          <Text style={styles.levelEmoji}>{levelInfo.emoji}</Text>
          <View style={styles.levelInfo}>
            <Text style={styles.levelName}>{levelInfo.name}</Text>
            <Text style={styles.levelNumber}>Level {level}</Text>
          </View>
          <View style={[styles.levelBadge, { backgroundColor: levelInfo.color }]}>
            <Text style={styles.levelBadgeText}>{level}</Text>
          </View>
        </View>

        {/* Points Display */}
        <View style={styles.pointsSection}>
          <View style={styles.pointsDisplay}>
            <MaterialCommunityIcons name="star" size={28} color="#F5A524" />
            <View>
              <Text style={styles.pointsLabel}>Total Points</Text>
              <Text style={styles.pointsValue}>{profile.points}</Text>
            </View>
          </View>
        </View>

        {/* Progress Bar */}
        <LevelProgressBar
          current={level}
          total={5}
          progressPercent={levelProgress.progressPercent}
        />

        {/* Next Level Info */}
        {!levelProgress.maxLevel && (
          <Text style={styles.nextLevelText}>
            {levelProgress.pointsToNextLevel} points to {levelProgress.nextLevelName}
          </Text>
        )}
        {levelProgress.maxLevel && (
          <Text style={styles.maxLevelText}>
            🎉 You've reached Master level! Congratulations!
          </Text>
        )}
      </View>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <StatCard
          icon="fire"
          label="Current Streak"
          value={`${profile.currentStreak} 🔥`}
          color="#E4572E"
        />
        <StatCard
          icon="trophy"
          label="Longest Streak"
          value={`${profile.longestStreak}`}
          color="#0E9F6E"
        />
        <StatCard
          icon="medal"
          label="Badges Earned"
          value={`${profile.badgeCount}/12`}
          color="#1B54F5"
        />
      </View>

      {/* Badges Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialCommunityIcons name="medal" size={24} color="#1B54F5" />
          <Text style={styles.sectionTitle}>Achievements</Text>
        </View>
        <BadgeGrid badges={profile.badges} />
      </View>

      {/* Tips Section */}
      <View style={styles.tipsSection}>
        <MaterialCommunityIcons name="lightbulb" size={20} color="#F5A524" />
        <View style={styles.tipsContent}>
          <Text style={styles.tipsTitle}>Pro Tips</Text>
          <Text style={styles.tipsText}>
            • Keep your streak alive with daily practice{'\n'}
            • Answer correctly to earn points{'\n'}
            • Unlock badges by mastering topics{'\n'}
            • Speed answers earn bonus points!
          </Text>
        </View>
      </View>

      {/* Spacer */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1EC',
    paddingBottom: 20
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F1EC'
  },

  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#0B1B3F',
    fontWeight: '500'
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F1EC',
    paddingHorizontal: 20
  },

  errorText: {
    fontSize: 16,
    color: '#E4572E',
    marginBottom: 20,
    textAlign: 'center'
  },

  retryButton: {
    backgroundColor: '#1B54F5',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8
  },

  retryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },

  // Level Card Styles
  levelCard: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderLeftWidth: 6,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },

  levelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },

  levelEmoji: {
    fontSize: 40,
    marginRight: 12
  },

  levelInfo: {
    flex: 1
  },

  levelName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B1B3F'
  },

  levelNumber: {
    fontSize: 14,
    color: '#666',
    marginTop: 2
  },

  levelBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },

  levelBadgeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  },

  pointsSection: {
    marginBottom: 16
  },

  pointsDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8
  },

  pointsLabel: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8
  },

  pointsValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F5A524',
    marginLeft: 8
  },

  progressContainer: {
    marginBottom: 12
  },

  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },

  progressLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0B1B3F'
  },

  progressPercent: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1B54F5'
  },

  progressBarBackground: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden'
  },

  progressBarFill: {
    height: '100%',
    backgroundColor: '#1B54F5',
    borderRadius: 4
  },

  nextLevelText: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    fontStyle: 'italic'
  },

  maxLevelText: {
    fontSize: 14,
    color: '#0E9F6E',
    fontWeight: '600',
    marginTop: 8
  },

  // Stats Grid
  statsGrid: {
    marginHorizontal: 12,
    marginBottom: 12,
    gap: 12
  },

  statCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },

  statIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },

  statContent: {
    flex: 1
  },

  statLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2
  },

  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B1B3F'
  },

  // Section Styles
  section: {
    marginHorizontal: 12,
    marginBottom: 20
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B1B3F',
    marginLeft: 8
  },

  badgeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  },

  badgeCard: {
    width: (width - 40) / 2,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#1B54F5',
    alignItems: 'center'
  },

  badgeName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0B1B3F',
    textAlign: 'center',
    marginBottom: 4
  },

  badgeDate: {
    fontSize: 10,
    color: '#999'
  },

  noBadgesContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center'
  },

  noBadgesText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center'
  },

  // Tips Section
  tipsSection: {
    marginHorizontal: 12,
    marginBottom: 20,
    backgroundColor: '#FFF9E6',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row'
  },

  tipsContent: {
    flex: 1,
    marginLeft: 12
  },

  tipsTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#F5A524',
    marginBottom: 4
  },

  tipsText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18
  }
});
