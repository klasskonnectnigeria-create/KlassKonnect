import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useAuthStore } from '../store/authStore';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { colors, spacing, typography, borderRadius } from '../constants/colors';
import { API_URL } from '../config/api';

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuthStore();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    const success = await login(email, password, API_URL);

    if (success) {
      // Navigation handled by root layout based on auth state
    } else {
      setError('Login failed. Please check your credentials.');
    }

    setLoading(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, typography.h1]}>
          NERDC AI Tutor
        </Text>
        <Text style={[styles.subtitle, typography.body1]}>
          Your Personal Math Guide
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
      </View>

      {/* Sign Up Link */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, typography.body2]}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={[styles.signUpLink, typography.body2]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
