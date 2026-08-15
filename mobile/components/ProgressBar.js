import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius } from '../constants/colors';

export function ProgressBar({ progress = 0, label, showPercentage = true }) {
  const percentage = Math.min(Math.max(progress, 0), 100);

  const getColor = () => {
    if (percentage < 30) return colors.error;
    if (percentage < 70) return colors.warning;
    return colors.success;
  };

  return (
    <View>
      {label && (
        <View style={styles.header}>
          <Text style={[styles.label, typography.subtitle2]}>
            {label}
          </Text>
          {showPercentage && (
            <Text style={[styles.percentage, typography.body2]}>
              {Math.round(percentage)}%
            </Text>
          )}
        </View>
      )}
      <View style={styles.barContainer}>
        <View
          style={[
            styles.bar,
            {
              width: `${percentage}%`,
              backgroundColor: getColor()
            }
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm
  },
  label: {
    color: colors.text.primary,
    fontWeight: '500'
  },
  percentage: {
    color: colors.text.secondary,
    fontWeight: '600'
  },
  barContainer: {
    height: 8,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.full,
    overflow: 'hidden'
  },
  bar: {
    height: '100%',
    borderRadius: borderRadius.full
  }
});
