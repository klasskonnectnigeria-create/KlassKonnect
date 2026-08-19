import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { colors, spacing, typography } from '../constants/colors';
import { API_URL } from '../config/api';

export function ForgotPasswordScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRequestReset = async () => {
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase()
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to process request');
      }

      Alert.alert(
        'Reset Request Sent',
        'If an account exists for this email, a password reset request has been created.',
        [
          {
            text: 'OK',
            onPress: () => router.back()
          }
        ]
      );
    } catch (err) {
      console.error('Forgot password error:', err);
      setError(err.message || 'Unable to process request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>

          <Text style={[styles.title, typography.h1]}>
            Reset Password
          </Text>

          <Text style={[styles.subtitle, typography.body1]}>
            Enter your email and we'll help you get back into your account.
          </Text>
        </View>

        <View style={styles.form}>
          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            error={error}
            style={styles.input}
          />

          <Button
            label="Continue"
            onPress={handleRequestReset}
            loading={loading}
            style={styles.button}
          />
        </View>

        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.loginLink}
          activeOpacity={0.7}
        >
          <Text style={[styles.loginText, typography.body2]}>
            Remember your password?{' '}
            <Text style={styles.loginTextBold}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },

  container: {
    flex: 1,
    backgroundColor: colors.background
  },

  contentContainer: {
    flexGrow: 1,
    padding: spacing.lg
  },

  header: {
    marginBottom: spacing.xl
  },

  backButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg
  },

  backButtonText: {
    fontSize: 40,
    lineHeight: 44,
    color: colors.primary,
    fontWeight: '300'
  },

  title: {
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: spacing.sm
  },

  subtitle: {
    color: colors.text.secondary,
    lineHeight: 24
  },

  form: {
    width: '100%'
  },

  input: {
    marginBottom: spacing.lg
  },

  button: {
    marginTop: spacing.sm
  },

  loginLink: {
    alignItems: 'center',
    marginTop: spacing.xl
  },

  loginText: {
    color: colors.text.secondary
  },

  loginTextBold: {
    color: colors.primary,
    fontWeight: '600'
  }
});
