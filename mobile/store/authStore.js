import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveStudent } from '../services/database';
import { gamificationService } from '../services/gamificationService';

export const useAuthStore = create((set, get) => ({
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzg3MjI2OTk4fQ.R9KOJ-eED2HZ_TO4D4bGr6PfiD4DGZYAaqa99l6Nbbs',
  student: { id: '1', email: 'alice@test.com', fullName: 'Alice Johnson', grade: 'Primary 4' },
  isLoading: false,

  setToken: (token) => set({ token }),
  setStudent: (student) => set({ student }),
  setIsLoading: (isLoading) => set({ isLoading }),

  // Restore session on app load
  restoreSession: async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const student = await AsyncStorage.getItem('student');
      if (token && student) {
        const parsedStudent = JSON.parse(student);
        set({ token, student: parsedStudent });

        // Also save to local DB for offline access
        try {
          await saveStudent(parsedStudent);
        } catch (dbError) {
          console.warn('Error saving student to DB:', dbError);
          // Don't fail the session restore if DB save fails
        }
      }
    } catch (error) {
      console.error('Error restoring session:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  // Login
  login: async (email, password, apiUrl) => {
    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) throw new Error('Login failed');

      const data = await response.json();
      await AsyncStorage.setItem('authToken', data.token);
      await AsyncStorage.setItem('student', JSON.stringify(data.student));

      // Save to local DB for offline access
      await saveStudent(data.student);

      // Initialize gamification for student
      await gamificationService.initializeForStudent(data.student.id);

      set({ token: data.token, student: data.student });
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },

  // Sign up
  signup: async (email, password, fullName, grade, apiUrl) => {
    try {
      const response = await fetch(`${apiUrl}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, fullName, grade })
      });

      const responseText = await response.text();

      console.log('Signup API status:', response.status);
      console.log('Signup API response:', responseText);

      if (!response.ok) {
        throw new Error(`Signup failed (${response.status}): ${responseText}`);
      }

      const data = JSON.parse(responseText);
      await AsyncStorage.setItem('authToken', data.token);
      await AsyncStorage.setItem('student', JSON.stringify(data.student));

      // Save to local DB for offline access
      await saveStudent(data.student);

      // Initialize gamification for new student
      await gamificationService.initializeForStudent(data.student.id);

      set({ token: data.token, student: data.student });
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  },

  // Logout
  logout: async () => {
    try {
      // Clear the in-memory session immediately.
      set({ token: null, student: null });

      // Remove persisted session in the background.
      await AsyncStorage.multiRemove(['authToken', 'student']);

      console.log('Logout completed successfully');
      return true;
    } catch (error) {
      console.error('Logout storage cleanup error:', error);

      // The in-memory session is already cleared, so logout still succeeds.
      return true;
    }
  }
}));
