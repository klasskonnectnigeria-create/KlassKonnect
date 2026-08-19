import React from 'react';
import { Redirect } from 'expo-router';
import { useAuthStore } from '../store/authStore';

export default function Index() {
  const { token, isLoading } = useAuthStore();

  if (isLoading) {
    return null;
  }

  return token ? <Redirect href="/(app)/home" /> : <Redirect href="/(auth)/login" />;
}
