import * as Network from 'expo-network';

class ConnectionManager {
  constructor() {
    this.isOnlineState = true;
    this.listeners = {
      onOnline: [],
      onOffline: []
    };
    this.unsubscribe = null;
  }

  async checkNetworkStatus() {
    try {
      const networkState = await Network.getNetworkStateAsync();
      // In simulator/development, isInternetReachable is often unreliable
      // So we check if there's ANY connection (isConnected) and use that as a fallback
      const hasConnection = networkState.isConnected ?? true;
      const isReachable = networkState.isInternetReachable ?? hasConnection;
      this.isOnlineState = isReachable;
      console.log('[ConnectionManager] Network status:', { hasConnection, isReachable, isOnlineState: this.isOnlineState });
      return this.isOnlineState;
    } catch (error) {
      console.error('Error checking network status:', error);
      // Default to online on error (better UX than being stuck offline)
      this.isOnlineState = true;
      return this.isOnlineState;
    }
  }

  isOnline() {
    return this.isOnlineState;
  }

  startMonitoring() {
    // Check initial state
    this.checkNetworkStatus();

    // Subscribe to network status changes
    const subscription = Network.addNetworkStateListener(({ isInternetReachable, isConnected }) => {
      const wasOnline = this.isOnlineState;
      // Use isConnected as fallback since isInternetReachable is unreliable in simulator
      this.isOnlineState = isInternetReachable ?? isConnected ?? true;

      if (!wasOnline && this.isOnlineState) {
        console.log('Connection restored');
        this.emit('onOnline');
      } else if (wasOnline && !this.isOnlineState) {
        console.log('Connection lost');
        this.emit('onOffline');
      }
    });

    this.unsubscribe = subscription;
    console.log('Connection monitoring started');
  }

  stopMonitoring() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      console.log('Connection monitoring stopped');
    }
  }

  addEventListener(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event].push(callback);
      console.log(`Listener added for ${event}`);
    }
  }

  removeEventListener(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
      console.log(`Listener removed for ${event}`);
    }
  }

  emit(event) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => {
        try {
          callback();
        } catch (error) {
          console.error(`Error in ${event} listener:`, error);
        }
      });
    }
  }
}

export const connectionManager = new ConnectionManager();
