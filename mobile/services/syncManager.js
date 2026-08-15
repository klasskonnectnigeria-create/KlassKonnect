import {
  getPendingActions,
  updateActionStatus,
  clearSyncedActions,
  getSyncMetadata,
  updateSyncMetadata,
  saveThemes,
  getThemes,
  saveTopics,
  getTopics,
  updateStudentProgress,
  saveConversationMessage
} from './database';
import { useOfflineStore } from '../store/offlineStore';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5000';

class SyncManager {
  constructor() {
    this.isSyncing = false;
  }

  async pushOfflineQueue(token, studentId) {
    if (this.isSyncing) {
      console.log('Sync already in progress, skipping');
      return;
    }

    this.isSyncing = true;
    useOfflineStore.getState().setIsSyncing(true);
    useOfflineStore.getState().setSyncStatus('syncing');

    try {
      // Get progress actions first (higher priority)
      const progressActions = await getPendingActions('progress');
      const chatActions = await getPendingActions('chat');
      const allActions = [...progressActions, ...chatActions];

      if (allActions.length === 0) {
        console.log('No pending actions to sync');
        useOfflineStore.getState().setSyncStatus('idle');
        useOfflineStore.getState().setQueueLength(0);
        this.isSyncing = false;
        return;
      }

      console.log(`Syncing ${allActions.length} pending actions...`);

      let successCount = 0;
      let failureCount = 0;

      for (const action of allActions) {
        try {
          await updateActionStatus(action.id, 'syncing');

          const body = JSON.parse(action.body);
          let response;

          if (action.method === 'POST') {
            response = await fetch(`${API_URL}${action.endpoint}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify(body)
            });
          } else if (action.method === 'GET') {
            response = await fetch(`${API_URL}${action.endpoint}`, {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
          }

          if (response.ok) {
            await updateActionStatus(action.id, 'synced');
            successCount++;
            console.log(`✓ Synced action ${action.id}: ${action.endpoint}`);
          } else {
            await updateActionStatus(action.id, 'failed');
            failureCount++;
            console.warn(`✗ Failed to sync action ${action.id}: ${response.status}`);
          }
        } catch (error) {
          await updateActionStatus(action.id, 'failed');
          failureCount++;
          console.error(`✗ Error syncing action ${action.id}:`, error);
        }
      }

      // Clear synced actions
      await clearSyncedActions();

      // Update sync metadata
      await updateSyncMetadata(studentId, new Date().toISOString(), 0, 'idle');

      // Update store
      const remaining = await getPendingActions();
      useOfflineStore.getState().setQueueLength(remaining.length);
      useOfflineStore.getState().setLastSyncTime(new Date());
      useOfflineStore.getState().setSyncStatus('idle');

      console.log(`Sync complete: ${successCount} succeeded, ${failureCount} failed`);
    } catch (error) {
      console.error('Error during sync:', error);
      useOfflineStore.getState().setSyncStatus('error', error.message);
    } finally {
      this.isSyncing = false;
      useOfflineStore.getState().setIsSyncing(false);
    }
  }

  async pullServerUpdates(token, studentId) {
    try {
      console.log('Pulling server updates...');

      // Get current themes locally
      const localThemes = await getThemes();
      const localServerVersion = localThemes.length > 0 ? 1 : 0;

      // Fetch themes from server
      const themesResponse = await fetch(`${API_URL}/api/content/themes`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!themesResponse.ok) {
        throw new Error(`Failed to fetch themes: ${themesResponse.status}`);
      }

      const themes = await themesResponse.json();

      if (themes.length > 0) {
        // Save themes locally
        await saveThemes(themes);
        console.log(`✓ Updated ${themes.length} themes`);

        // Fetch and save topics for each theme
        for (const theme of themes) {
          try {
            const topicsResponse = await fetch(
              `${API_URL}/api/content/themes/${theme.id}/topics`,
              { headers: { Authorization: `Bearer ${token}` } }
            );

            if (topicsResponse.ok) {
              const topics = await topicsResponse.json();
              await saveTopics(theme.id, topics);
              console.log(`✓ Updated ${topics.length} topics for theme ${theme.id}`);
            }
          } catch (error) {
            console.warn(`Error fetching topics for theme ${theme.id}:`, error);
          }
        }
      }

      console.log('✓ Server updates pulled successfully');
    } catch (error) {
      console.error('Error pulling server updates:', error);
      throw error;
    }
  }

  async resolveConflicts(localValue, serverValue, field, entityType) {
    // For now: timestamp-based resolution (server wins)
    // This is simplified; can be enhanced later with 3-way merge
    console.log(`Resolving conflict on ${entityType}.${field}: using server value`);
    return serverValue;
  }

  async checkAndSyncIfNeeded(token, studentId) {
    const offlineStore = useOfflineStore.getState();

    if (!offlineStore.isOnline) {
      console.log('Still offline, sync skipped');
      return;
    }

    console.log('Connection restored, initiating sync...');

    try {
      // Push queued actions first (progress + chat)
      await this.pushOfflineQueue(token, studentId);

      // Pull server updates
      await this.pullServerUpdates(token, studentId);

      console.log('✓ Sync cycle complete');
    } catch (error) {
      console.error('Sync error:', error);
      offlineStore.setSyncStatus('error', error.message);
    }
  }
}

export const syncManager = new SyncManager();
