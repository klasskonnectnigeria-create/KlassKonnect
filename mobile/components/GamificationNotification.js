import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

/**
 * Displays achievement notifications for gamification events
 * Shows: points earned, streaks, level ups, badges
 */
export default function GamificationNotification({ gamification, onDismiss }) {
  const [animValue] = useState(new Animated.Value(0));
  const [visible, setVisible] = useState(!!gamification);

  useEffect(() => {
    if (gamification) {
      setVisible(true);
      // Animate in
      Animated.timing(animValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();

      // Auto-dismiss after 4 seconds
      const timer = setTimeout(() => {
        dismiss();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [gamification]);

  const dismiss = () => {
    Animated.timing(animValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start(() => {
      setVisible(false);
      onDismiss?.();
    });
  };

  if (!visible || !gamification) return null;

  const translateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0]
  });

  const opacity = animValue;

  const hasLevelUp = gamification.levelProgress &&
    gamification.levelProgress.currentLevel > 1;

  const hasBadges = gamification.badgesUnlocked &&
    gamification.badgesUnlocked.length > 0;

  const hasStreakMilestone = gamification.currentStreak &&
    gamification.currentStreak > 0 &&
    gamification.currentStreak % 5 === 0;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
          opacity
        }
      ]}
    >
      <TouchableOpacity activeOpacity={0.9} onPress={dismiss}>
        <View style={styles.content}>
          {/* Main Achievement - Level Up */}
          {hasLevelUp && (
            <View style={styles.section}>
              <View style={styles.header}>
                <MaterialCommunityIcons name="star" size={24} color="#F5A524" />
                <Text style={styles.title}>Level Up! 🎉</Text>
              </View>
              <Text style={styles.subtitle}>
                You've reached {gamification.levelProgress.currentLevelName}!
              </Text>
            </View>
          )}

          {/* Secondary Achievement - Badges */}
          {hasBadges && !hasLevelUp && (
            <View style={styles.section}>
              <View style={styles.header}>
                <MaterialCommunityIcons name="medal" size={24} color="#0E9F6E" />
                <Text style={styles.title}>Badge Unlocked!</Text>
              </View>
              {gamification.badgesUnlocked.map((badge, idx) => (
                <Text key={idx} style={styles.badgeName}>
                  {badge.name}
                </Text>
              ))}
            </View>
          )}

          {/* Streak Milestone */}
          {hasStreakMilestone && !hasLevelUp && !hasBadges && (
            <View style={styles.section}>
              <View style={styles.header}>
                <MaterialCommunityIcons name="fire" size={24} color="#E4572E" />
                <Text style={styles.title}>Streak Milestone!</Text>
              </View>
              <Text style={styles.subtitle}>
                You're on a {gamification.currentStreak}-day streak! Keep it up! 🔥
              </Text>
            </View>
          )}

          {/* Points Earned */}
          <View style={styles.pointsRow}>
            <MaterialCommunityIcons name="plus-circle" size={20} color="#1B54F5" />
            <Text style={styles.pointsText}>
              +{gamification.pointsEarned} points
            </Text>
          </View>

          {/* Stats Summary */}
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Level</Text>
              <Text style={styles.statValue}>{gamification.level}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Streak</Text>
              <Text style={styles.statValue}>{gamification.currentStreak}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Total</Text>
              <Text style={styles.statValue}>{gamification.totalPoints}</Text>
            </View>
          </View>

          {/* Close Hint */}
          <Text style={styles.hint}>Tap to dismiss</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  },

  content: {
    marginHorizontal: 12,
    marginTop: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    borderTopWidth: 4,
    borderTopColor: '#1B54F5',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8
  },

  section: {
    marginBottom: 12
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B1B3F',
    marginLeft: 8
  },

  subtitle: {
    fontSize: 13,
    color: '#666',
    marginLeft: 32
  },

  badgeName: {
    fontSize: 13,
    color: '#0E9F6E',
    fontWeight: '600',
    marginTop: 4,
    marginLeft: 32
  },

  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F1EC',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 12
  },

  pointsText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1B54F5',
    marginLeft: 8
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFF9E6',
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 12
  },

  stat: {
    alignItems: 'center',
    flex: 1
  },

  statLabel: {
    fontSize: 11,
    color: '#999',
    marginBottom: 2
  },

  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B1B3F'
  },

  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#E0E0E0'
  },

  hint: {
    fontSize: 11,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic'
  }
});
