import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuthStore } from '../store/authStore';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import {
  colors,
  spacing,
  typography,
  borderRadius
} from '../constants/colors';
import { API_URL } from '../config/api';

export function LoginScreen({ navigation, onGoToSignup }) {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    if (!email.trim() || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const success = await login(
        email.trim().toLowerCase(),
        password,
        API_URL
      );

      if (isMountedRef.current) {
        if (success) {
          router.replace('/(app)/home');
        } else {
          setError('Login failed. Please check your credentials.');
        }
      }
    } catch (err) {
      console.error('Login error:', err);

      if (isMountedRef.current) {
        setError('Unable to connect. Please try again.');
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  };

  const handleGoogleLogin = () => {
    Alert.alert(
      'Google Sign-In',
      'Google authentication will be connected next.'
    );
  };

  const handleAppleLogin = () => {
    Alert.alert(
      'Apple Sign-In',
      'Apple authentication will be connected next.'
    );
  };

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'bottom']}
    >
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View>
            {/* Branding */}
            <View style={styles.header}>
              <Text style={styles.title}>
                KLASSKONNECT
              </Text>

              <Text style={styles.subtitle}>
                Your Personal AI Tutor
              </Text>
            </View>

            {/* Login Form */}
            <View style={styles.form}>
              <Input
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                leftIcon={<Text style={{ fontSize: 18 }}>✉️</Text>}
                error={error && !email ? 'Email is required' : ''}
                style={styles.input}
              />

              <Input
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                leftIcon={<Text style={{ fontSize: 18 }}>🔒</Text>}
                rightIcon={<Text style={{ fontSize: 18 }}>{showPassword ? '🙈' : '👁️'}</Text>}
                onRightIconPress={() =>
                  setShowPassword(prev => !prev)
                }
                error={
                  error && !password
                    ? 'Password is required'
                    : ''
                }
                style={styles.input}
              />

              {error ? (
                <Text style={styles.errorMessage}>
                  {error}
                </Text>
              ) : null}

              <Button
                label="Login"
                onPress={handleLogin}
                loading={loading}
                style={styles.loginButton}
              />

              <TouchableOpacity
                onPress={() =>
                  router.push('/(auth)/forgot-password')
                }
                style={styles.forgotPasswordButton}
                activeOpacity={0.7}
              >
                <Text style={styles.forgotPasswordText}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.divider} />
            </View>

            {/* Social Login */}
            <View style={styles.socialContainer}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={handleGoogleLogin}
                activeOpacity={0.8}
              >
                <Text style={styles.googleIcon}>G</Text>
                <Text style={styles.socialText}>
                  Continue with Google
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                onPress={handleAppleLogin}
                activeOpacity={0.8}
              >
                <Text style={styles.appleIcon}></Text>
                <Text style={styles.socialText}>
                  Continue with Apple
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <TouchableOpacity
            style={styles.footer}
            onPress={() => {
              console.log('Sign Up pressed, onGoToSignup:', !!onGoToSignup);
              if (onGoToSignup) {
                onGoToSignup();
              } else {
                router.push('/(auth)/signup');
              }
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.footerText}>
              Don't have an account?{' '}
            </Text>

            <Text style={styles.signUpLink}>
              Sign Up
            </Text>
          </TouchableOpacity>
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
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl
  },

  header: {
    alignItems: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.xxl
  },

  title: {
    color: colors.primary,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '800',
    letterSpacing: -0.5
  },

  subtitle: {
    marginTop: spacing.sm,
    color: colors.text.secondary,
    fontSize: 18,
    lineHeight: 26
  },

  form: {
    width: '100%'
  },

  input: {
    marginBottom: spacing.lg
  },

  errorMessage: {
    color: colors.error,
    textAlign: 'center',
    marginTop: -spacing.sm,
    marginBottom: spacing.md,
    fontSize: 14
  },

  loginButton: {
    marginTop: spacing.sm
  },

  forgotPasswordButton: {
    alignItems: 'center',
    marginTop: spacing.md,
    paddingVertical: spacing.sm
  },

  forgotPasswordText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500'
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.lg
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.divider
  },

  orText: {
    color: colors.text.secondary,
    fontSize: 15,
    marginHorizontal: spacing.md
  },

  socialContainer: {
    gap: spacing.md
  },

  socialButton: {
    minHeight: 56,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background
  },

  googleIcon: {
    fontSize: 22,
    fontWeight: '700',
    marginRight: spacing.md
  },

  appleIcon: {
    fontSize: 23,
    marginRight: spacing.md
  },

  socialText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '500'
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
    paddingVertical: spacing.md
  },

  footerText: {
    color: colors.text.secondary,
    fontSize: 16
  },

  signUpLink: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600'
  }
});
