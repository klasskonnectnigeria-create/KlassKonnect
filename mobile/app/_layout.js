import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useAuthStore } from '../store/authStore';
import { useOfflineStore } from '../store/offlineStore';
import { useNotificationStore } from '../store/notificationStore';
import * as SplashScreen from 'expo-splash-screen';
import { initializeDatabase } from '../services/database';
import { connectionManager } from '../services/connectionManager';
import { syncManager } from '../services/syncManager';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { token, isLoading, restoreSession, student } = useAuthStore();
  const { initializeConnectionListener } = useOfflineStore();
  const { initializeNotifications, cleanup } = useNotificationStore();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Initialize database
        await initializeDatabase();
        console.log('Database initialized');

        // Start connection monitoring
        connectionManager.startMonitoring();
        initializeConnectionListener();
        console.log('Connection monitoring started');

        // Initialize notifications
        await initializeNotifications();
        console.log('Notifications initialized');

        // Restore auth session
        await restoreSession();
      } catch (error) {
        console.error('Error initializing app:', error);
      } finally {
        SplashScreen.hideAsync();
      }
    };

    initializeApp();

    // Cleanup on app close
    return () => {
      cleanup();
    };
  }, []);

  // Set up auto-sync when user is authenticated and connection is restored
  useEffect(() => {
    if (token && student?.id) {
      connectionManager.setSyncCallback(async () => {
        await syncManager.checkAndSyncIfNeeded(token, student.id);
      });

      // Listen for connection restore and trigger sync
      connectionManager.addEventListener('onOnline', async () => {
        await syncManager.checkAndSyncIfNeeded(token, student.id);
      });

      console.log('Auto-sync configured for student', student.id);
    }
  }, [token, student]);

  if (isLoading) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationEnabled: true
      }}
    >
      {token ? (
        // Authenticated stack
        <>
          <Stack.Screen name="(app)" />
        </>
      ) : (
        // Auth stack
        <>
          <Stack.Screen name="(auth)" />
        </>
      )}
    </Stack>
  );
}
