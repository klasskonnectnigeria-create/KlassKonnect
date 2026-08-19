import { create } from 'zustand';
import { notificationService } from '../services/notificationService';

export const useNotificationStore = create((set, get) => ({
  // Settings state
  dailyReminders: true,
  reminderTime: '16:00',
  streakNotifications: true,
  achievementNotifications: true,
  pointsNotifications: false,
  quietHoursStart: '22:00',
  quietHoursEnd: '08:00',
  isLoading: false,
  expoPushToken: null,

  // Setters
  setDailyReminders: (enabled) => set({ dailyReminders: enabled }),
  setReminderTime: (time) => set({ reminderTime: time }),
  setStreakNotifications: (enabled) => set({ streakNotifications: enabled }),
  setAchievementNotifications: (enabled) => set({ achievementNotifications: enabled }),
  setPointsNotifications: (enabled) => set({ pointsNotifications: enabled }),
  setQuietHours: (start, end) => set({ quietHoursStart: start, quietHoursEnd: end }),
  setExpoPushToken: (token) => set({ expoPushToken: token }),
  setIsLoading: (loading) => set({ isLoading: loading }),

  // Initialize notifications
  initializeNotifications: async () => {
    let mounted = true;

    try {
      if (mounted) set({ isLoading: true });

      // Register for push notifications
      const token = await notificationService.registerForPushNotifications();
      if (mounted && token) {
        set({ expoPushToken: token });
      }

      // Load saved settings
      const settings = await notificationService.getNotificationSettings();
      if (mounted) {
        set({
          dailyReminders: settings.dailyReminders,
          reminderTime: settings.reminderTime,
          streakNotifications: settings.streakNotifications,
          achievementNotifications: settings.achievementNotifications,
          pointsNotifications: settings.pointsNotifications,
          quietHoursStart: settings.quietHoursStart,
          quietHoursEnd: settings.quietHoursEnd,
        });
      }

      // Start listening for notifications
      notificationService.startListening();

      // Schedule daily reminders if enabled
      if (mounted && settings.dailyReminders) {
        const [hours, minutes] = settings.reminderTime.split(':');
        await notificationService.scheduleDailyReminder(parseInt(hours), parseInt(minutes));
      }

      if (mounted) {
        console.log('Notifications initialized');
      }
    } catch (error) {
      if (mounted) {
        console.error('Error initializing notifications:', error);
      }
    } finally {
      if (mounted) {
        set({ isLoading: false });
      }
    }

    // Return cleanup function
    return () => {
      mounted = false;
    };
  },

  // Update settings and save
  updateSettings: async (newSettings) => {
    try {
      const state = get();

      // Update state
      set({
        dailyReminders: newSettings.dailyReminders !== undefined ? newSettings.dailyReminders : state.dailyReminders,
        reminderTime: newSettings.reminderTime || state.reminderTime,
        streakNotifications: newSettings.streakNotifications !== undefined ? newSettings.streakNotifications : state.streakNotifications,
        achievementNotifications: newSettings.achievementNotifications !== undefined ? newSettings.achievementNotifications : state.achievementNotifications,
        pointsNotifications: newSettings.pointsNotifications !== undefined ? newSettings.pointsNotifications : state.pointsNotifications,
        quietHoursStart: newSettings.quietHoursStart || state.quietHoursStart,
        quietHoursEnd: newSettings.quietHoursEnd || state.quietHoursEnd,
      });

      // Save to storage
      await notificationService.saveNotificationSettings({
        dailyReminders: newSettings.dailyReminders !== undefined ? newSettings.dailyReminders : state.dailyReminders,
        reminderTime: newSettings.reminderTime || state.reminderTime,
        streakNotifications: newSettings.streakNotifications !== undefined ? newSettings.streakNotifications : state.streakNotifications,
        achievementNotifications: newSettings.achievementNotifications !== undefined ? newSettings.achievementNotifications : state.achievementNotifications,
        pointsNotifications: newSettings.pointsNotifications !== undefined ? newSettings.pointsNotifications : state.pointsNotifications,
        quietHoursStart: newSettings.quietHoursStart || state.quietHoursStart,
        quietHoursEnd: newSettings.quietHoursEnd || state.quietHoursEnd,
      });

      // Reschedule daily reminders if time changed
      if (newSettings.reminderTime) {
        const [hours, minutes] = newSettings.reminderTime.split(':');
        await notificationService.scheduleDailyReminder(parseInt(hours), parseInt(minutes));
      }

      console.log('Notification settings updated');
    } catch (error) {
      console.error('Error updating notification settings:', error);
    }
  },

  // Clean up listeners
  cleanup: () => {
    notificationService.stopListening();
  },
}));
