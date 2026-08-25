import React, { useEffect, useState } from 'react';
import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuthStore } from '../store/authStore';
import { useOfflineStore } from '../store/offlineStore';
import { useNotificationStore } from '../store/notificationStore';
import { LoadingScreen } from '../components/LoadingScreen';
import * as SplashScreen from 'expo-splash-screen';
import { initializeDatabase } from '../services/database';
import { connectionManager } from '../services/connectionManager';
import { syncManager } from '../services/syncManager';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const { token, isLoading, restoreSession, student } = useAuthStore();
  const { initializeConnectionListener } = useOfflineStore();
  const { initializeNotifications, cleanup } = useNotificationStore();

  useEffect(() => {
    let mounted = true;
    let timeoutId;

    const initializeApp = async () => {
      const initStart = Date.now();
      try {
        // 1. Database initialization
        const dbStart = Date.now();
        await initializeDatabase();
        const dbTime = Date.now() - dbStart;
        console.log(`✅ Database initialized (${dbTime}ms)`);

        // 2. Connection monitoring
        const connStart = Date.now();
        connectionManager.startMonitoring();
        initializeConnectionListener();
        const connTime = Date.now() - connStart;
        console.log(`✅ Connection monitoring started (${connTime}ms)`);

        // 3. Session restoration
        const sessStart = Date.now();
        await restoreSession();
        const sessTime = Date.now() - sessStart;
        console.log(`✅ Session restored (${sessTime}ms)`);

        // 4. Background notifications (non-blocking)
        const notifStart = Date.now();
        initializeNotifications()
          .catch(error => console.warn('Background notification init error:', error));
        const notifTime = Date.now() - notifStart;
        console.log(`✅ Notifications queued for background init (${notifTime}ms)`);

        const totalTime = Date.now() - initStart;
        console.log(`📊 TOTAL INITIALIZATION TIME: ${totalTime}ms`);
      } catch (error) {
        console.error('Error initializing app:', error);
      } finally {
        if (mounted) {
          await SplashScreen.hideAsync();
          setIsReady(true);
        }
      }
    };

    // Safety timeout: show app after 20 seconds even if init isn't complete
    // Investigation needed: critical path still taking ~10-15s (need to identify slow step)
    timeoutId = setTimeout(() => {
      if (mounted && !isReady) {
        console.warn('App initialization timeout - showing UI anyway (critical path took >20s)');
        SplashScreen.hideAsync();
        setIsReady(true);
      }
    }, 20000);

    initializeApp();

    return () => {
      mounted = false;
      clearTimeout(timeoutId);

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

    const syncStart = Date.now();
    const sync = async () => {
      try {
        const checkStart = Date.now();
        await syncManager.checkAndSyncIfNeeded(token, student.id);
        const checkTime = Date.now() - checkStart;
        console.log(`⏱️ Sync operation took: ${checkTime}ms`);
      } catch (error) {
        console.warn('Sync error:', error);
      }
    };

    // Set up callback for future syncs, and re-sync automatically when the
    // connection is restored after being offline (registering this listener
    // is cheap/synchronous and does not block UI startup).
    connectionManager.setSyncCallback(sync);
    connectionManager.addEventListener('onOnline', sync);

    const setupTime = Date.now() - syncStart;
    console.log(`✅ Sync callback configured for student ${student.id} (${setupTime}ms)`);

    return () => {
      connectionManager.setSyncCallback(null);
    };
  }, [token, student?.id]);

  // IMPORTANT: Always render GestureHandlerRootView to ensure gesture handlers are attached
  // Never return null from the root layout, as that breaks the component tree
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {!isReady && <LoadingScreen />}
      {isReady && !isLoading && <Slot />}
      {isReady && isLoading && null}
    </GestureHandlerRootView>
  );
}
