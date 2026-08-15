import { create } from 'zustand';
import { connectionManager } from '../services/connectionManager';

export const useOfflineStore = create((set, get) => ({
  isOnline: true,
  isSyncing: false,
  queueLength: 0,
  lastSyncTime: null,
  syncStatus: 'idle', // 'idle' | 'syncing' | 'error'
  syncError: null,

  setIsOnline: (isOnline) => set({ isOnline }),
  setIsSyncing: (isSyncing) => set({ isSyncing }),
  setQueueLength: (queueLength) => set({ queueLength }),
  setLastSyncTime: (lastSyncTime) => set({ lastSyncTime }),
  setSyncStatus: (syncStatus, error = null) => set({ syncStatus, syncError: error }),

  // Subscribe to connection changes
  initializeConnectionListener: () => {
    connectionManager.addEventListener('onOnline', () => {
      get().setIsOnline(true);
      console.log('[OfflineStore] Online');
    });

    connectionManager.addEventListener('onOffline', () => {
      get().setIsOnline(false);
      console.log('[OfflineStore] Offline');
    });
  }
}));
