import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Set notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

class NotificationService {
  constructor() {
    this.expoPushToken = null;
    this.notificationListener = null;
    this.responseListener = null;
  }

  async registerForPushNotifications() {
    try {
      if (!Device.isDevice) {
        console.log('Push notifications not available on simulator');
        return null;
      }

      // Check if already have permission
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        console.warn('Failed to get push token for push notification!');
        return null;
      }

      // Get Expo push token
      try {
        const token = await Notifications.getExpoPushTokenAsync();
        this.expoPushToken = token.data;
        console.log('Expo push token:', this.expoPushToken);

        // Save token for backend
        await AsyncStorage.setItem('expoPushToken', this.expoPushToken);

        return this.expoPushToken;
      } catch (error) {
        console.error('Error getting Expo push token:', error);
        return null;
      }
    } catch (error) {
      console.error('Error registering for push notifications:', error);
      return null;
    }
  }

  startListening() {
    // Listen for notifications when app is in foreground
    this.notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log('Notification received:', notification);
      }
    );

    // Listen for notification response (user tapped notification)
    this.responseListener = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log('Notification response:', response);
        const { data } = response.notification.request.content;

        // Handle notification tap based on type
        if (data?.type === 'streak') {
          // Navigate to home screen to show streak
        } else if (data?.type === 'achievement') {
          // Navigate to achievements screen
        } else if (data?.type === 'reminder') {
          // Navigate to topics list
        }
      }
    );
  }

  stopListening() {
    if (this.notificationListener) {
      Notifications.removeNotificationSubscription(this.notificationListener);
    }
    if (this.responseListener) {
      Notifications.removeNotificationSubscription(this.responseListener);
    }
  }

  // Local notifications (work offline too)
  async sendLocalNotification(title, body, data = {}, seconds = 5) {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          sound: true,
          badge: 1,
          data,
        },
        trigger: { seconds },
      });
      console.log(`Local notification scheduled: ${title}`);
    } catch (error) {
      console.error('Error scheduling local notification:', error);
    }
  }

  // Schedule daily reminder at specific time
  async scheduleDailyReminder(hour = 16, minute = 0) {
    try {
      // Cancel any existing scheduled notifications
      await Notifications.cancelAllScheduledNotificationsAsync();

      // Schedule one notification that repeats every day
      await Notifications.scheduleNotificationAsync({
        content: {
          title: '📚 Time to study!',
          body: 'Ready to earn points with KlassKonnect?',
          sound: true,
          badge: 1,
          data: { type: 'reminder', priority: 'high' },
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DAILY,
          hour,
          minute,
        },
      });

      console.log(`Daily reminder scheduled for ${hour}:${minute}`);
      await AsyncStorage.setItem(
        'dailyReminderTime',
        `${hour}:${minute}`
      );
    } catch (error) {
      console.error('Error scheduling daily reminder:', error);
    }
  }

  // Notify on streak milestone
  async notifyStreakMilestone(streakDays) {
    const settings = await this.getNotificationSettings();
    if (!settings.streakNotifications || this.isWithinQuietHours(settings)) {
      return;
    }

    const messages = {
      3: { title: '🔥 3-Day Streak!', body: 'You are consistent! Keep it up!' },
      7: { title: '🔥 7-Day Streak!', body: 'A week of learning! Amazing!' },
      14: { title: '🔥 14-Day Streak!', body: 'Two weeks strong! You are unstoppable!' },
      30: { title: '💎 30-Day Streak!', body: 'One month of dedication! Legendary!' },
    };

    const milestone = messages[streakDays];
    if (milestone) {
      await this.sendLocalNotification(
        milestone.title,
        milestone.body,
        { type: 'streak', days: streakDays },
        0
      );
    }
  }

  // Notify on badge earned
  async notifyBadgeEarned(badgeName, badgeDescription) {
    const settings = await this.getNotificationSettings();
    if (!settings.achievementNotifications || this.isWithinQuietHours(settings)) {
      return;
    }

    await this.sendLocalNotification(
      '🎉 Badge Unlocked!',
      `${badgeName} - ${badgeDescription}`,
      { type: 'achievement', badge: badgeName },
      0
    );
  }

  // Notify on points earned
  async notifyPointsEarned(points, totalPoints, level) {
    const settings = await this.getNotificationSettings();
    if (!settings.pointsNotifications || this.isWithinQuietHours(settings)) {
      return;
    }

    await this.sendLocalNotification(
      `🌟 +${points} Points!`,
      `Total: ${totalPoints} • Level ${level}`,
      { type: 'points', points, totalPoints, level },
      0
    );
  }

  // Notify on topic completion
  async notifyTopicCompletion(topicName, understanding) {
    if (understanding >= 90) {
      await this.sendLocalNotification(
        '👑 Topic Mastered!',
        `You achieved 90%+ mastery on ${topicName}!`,
        { type: 'achievement', topic: topicName },
        0
      );
    }
  }

  // Check and remind about broken streak
  async checkStreakReminder(currentStreak) {
    if (currentStreak === 0) {
      // Streak was broken, send motivational reminder
      await this.sendLocalNotification(
        '💪 Get Back on Track',
        'Start a new streak today. One lesson is all it takes!',
        { type: 'motivation', priority: 'high' },
        5
      );
    }
  }

  // Get saved push token
  async getSavedPushToken() {
    try {
      const token = await AsyncStorage.getItem('expoPushToken');
      return token;
    } catch (error) {
      console.error('Error getting saved push token:', error);
      return null;
    }
  }

  // Get notification settings
  async getNotificationSettings() {
    try {
      const settings = await AsyncStorage.getItem('notificationSettings');
      return settings ? JSON.parse(settings) : this.getDefaultSettings();
    } catch (error) {
      console.error('Error getting notification settings:', error);
      return this.getDefaultSettings();
    }
  }

  // Save notification settings
  async saveNotificationSettings(settings) {
    try {
      await AsyncStorage.setItem('notificationSettings', JSON.stringify(settings));
      console.log('Notification settings saved');
    } catch (error) {
      console.error('Error saving notification settings:', error);
    }
  }

  // Get default notification settings
  getDefaultSettings() {
    return {
      dailyReminders: true,
      reminderTime: '16:00', // 4 PM
      streakNotifications: true,
      achievementNotifications: true,
      pointsNotifications: false,
      quietHoursStart: '22:00', // 10 PM
      quietHoursEnd: '08:00', // 8 AM
    };
  }

  // Check if within quiet hours
  isWithinQuietHours(settings) {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const start = settings.quietHoursStart;
    const end = settings.quietHoursEnd;

    // Handle case where quiet hours span midnight
    if (start > end) {
      return currentTime >= start || currentTime < end;
    } else {
      return currentTime >= start && currentTime < end;
    }
  }
}

export const notificationService = new NotificationService();
