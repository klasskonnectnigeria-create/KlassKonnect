import React from 'react';
import { Stack } from 'expo-router';
import { colors } from '../../constants/colors';

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background }
      }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="leaderboard" />
      <Stack.Screen
        name="themes"
        options={{
          animationEnabled: true
        }}
      />
      <Stack.Screen
        name="topic-details"
        options={{
          animationEnabled: true
        }}
      />
    </Stack>
  );
}
