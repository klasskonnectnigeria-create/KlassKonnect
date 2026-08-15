import * as Network from 'expo-network';

class ConnectionManager {
  constructor() {
    this.isOnlineState = true;
    this.listeners = {
      onOnline: [],
      onOffline: []
    };
    this.unsubscribe = null;
    this.syncCallback = null;
  }

  setSyncCallback(callback) {
    this.syncCallback = callback;
  }

  async checkNetworkStatus() {
    try {
      const networkState = await Network.getNetworkStateAsync();
      this.isOnlineState = networkState.isInternetReachable ?? false;
      return this.isOnlineState;
    } catch (error) {
      console.error('Error checking network status:', error);
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
    const subscription = Network.addNetworkStateListener(({ isInternetReachable }) => {
      const wasOnline = this.isOnlineState;
      this.isOnlineState = isInternetReachable ?? false;

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
