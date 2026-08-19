import React, { useEffect } from 'react';
import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
    let mounted = true;

    const initializeApp = async () => {
      try {
        await initializeDatabase();
        console.log('Database initialized');

        connectionManager.startMonitoring();
        initializeConnectionListener();
        console.log('Connection monitoring started');

        await initializeNotifications();
        console.log('Notifications initialized');

        await restoreSession();
      } catch (error) {
        console.error('Error initializing app:', error);
      } finally {
        if (mounted) {
          await SplashScreen.hideAsync();
        }
      }
    };

    initializeApp();

    return () => {
      mounted = false;

      try {
        cleanup();
      } catch (error) {
        console.warn('Notification cleanup error:', error);
      }
    };
  }, []);

  useEffect(() => {
    if (!token || !student?.id) {
      return;
    }

    const sync = async () => {
      try {
        await syncManager.checkAndSyncIfNeeded(token, student.id);
      } catch (error) {
        console.warn('Sync error:', error);
      }
    };

    connectionManager.setSyncCallback(sync);
    connectionManager.addEventListener('onOnline', sync);

    console.log('Auto-sync configured for student', student.id);

    return () => {
      // Clear the sync callback when the authenticated session changes.
      connectionManager.setSyncCallback(null);
    };
  }, [token, student?.id]);

  if (isLoading) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}
