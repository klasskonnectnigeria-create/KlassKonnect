import React, { useState, useEffect, useRef } from 'react';
import { useRouter, Link } from 'expo-router';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../store/authStore';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { colors, spacing, typography, borderRadius } from '../constants/colors';
import { API_URL } from '../config/api';

export function LoginScreen({ navigation, onGoToSignup }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const isMountedRef = useRef(true);

  const { login } = useAuthStore();


  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      if (isMountedRef.current) setError('Please fill in all fields');
      return;
    }

    if (isMountedRef.current) setLoading(true);
    if (isMountedRef.current) setError('');

    const success = await login(email, password, API_URL);

    if (isMountedRef.current) {
      if (success) {
        console.log('Login successful - navigating to Home');
        router.replace('/(app)/home');
      } else {
        setError('Login failed. Please check your credentials.');
      }
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
        >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, typography.h1]}>
          KLASSKONNECT
        </Text>
        <Text style={[styles.subtitle, typography.body1]}>
          Your Personal AI Tutor
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          error={error && !email ? 'Email is required' : ''}
          style={styles.input}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={error && !password ? 'Password is required' : ''}
          style={styles.input}
        />

        {error && (
          <Text style={[styles.errorMessage, typography.body2]}>
            {error}
          </Text>
        )}

        <Button
          label="Login"
          onPress={handleLogin}
          loading={loading}
          style={styles.loginButton}
        />

        <TouchableOpacity
          onPress={() => router.push('/(auth)/forgot-password')}
          style={styles.forgotPasswordButton}
          activeOpacity={0.7}
        >
          <Text style={[styles.forgotPasswordText, typography.body2]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <Pressable
        style={({ pressed }) => [
          styles.footer,
          pressed && { opacity: 0.7 }
        ]}
        onPress={onGoToSignup}
      >
        <Text style={[styles.footerText, typography.body2]}>
          Don't have an account?{' '}
        </Text>
        <Text style={[styles.signUpLink, typography.body2]}>
          Sign Up
        </Text>
      </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
  keyboardView: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: spacing.lg
  },
  header: {
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.xl
  },
  title: {
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: spacing.sm
  },
  subtitle: {
    color: colors.text.secondary
  },
  form: {
    width: '100%'
  },
  input: {
    marginBottom: spacing.lg
  },
  errorMessage: {
    color: colors.error,
    marginBottom: spacing.md,
    textAlign: 'center'
  },
  loginButton: {
    marginTop: spacing.md
  },
  forgotPasswordButton: {
    alignItems: 'center',
    marginTop: spacing.md,
    paddingVertical: spacing.sm
  },

  forgotPasswordText: {
    color: colors.primary,
    fontWeight: '600'
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg
  },
  footerText: {
    color: colors.text.secondary
  },
  signUpLink: {
    color: colors.primary,
    fontWeight: '600'
  }
});
