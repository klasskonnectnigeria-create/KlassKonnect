import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useAuthStore } from '../store/authStore';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { colors, spacing, typography } from '../constants/colors';
import { API_URL } from '../config/api';

const GRADES = ['Primary 4', 'Primary 5', 'Primary 6', 'JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2', 'SS 3'];

export function SignupScreen({ onSignupSuccess, onLogin }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [grade, setGrade] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showGradeDropdown, setShowGradeDropdown] = useState(false);

  const { signup } = useAuthStore();

  const handleSignup = async () => {
    // Validation
    if (!fullName || !email || !password || !confirmPassword || !grade) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setError('');

    const success = await signup(email, password, fullName, grade, API_URL);

    if (success) {
      onSignupSuccess?.();
      return;
    } else {
      setError('Signup failed. Email may already be in use.');
    }

    setLoading(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, typography.h2]}>
          Create Account
        </Text>
        <Text style={[styles.subtitle, typography.body2]}>
          Join KlassKonnect today
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
        />

        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />

        <View style={styles.gradeContainer}>
          <Text style={[styles.gradeLabel, typography.subtitle2]}>
            Grade
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.gradeSelector}
            onPress={() => setShowGradeDropdown(!showGradeDropdown)}
          >
            <Text
              style={[
                typography.body1,
                grade ? styles.gradeText : styles.gradePlaceholder
              ]}
            >
              {grade || 'Select your grade'}
            </Text>

            <Text style={styles.chevron}>
              {showGradeDropdown ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>
        </View>

        {showGradeDropdown && (
          <View style={styles.dropdown}>
            {GRADES.map((g) => (
              <TouchableOpacity
                key={g}
                style={styles.dropdownItem}
                onPress={() => {
                  setGrade(g);
                  setShowGradeDropdown(false);
                }}
              >
                <Text style={[typography.body1, { color: colors.text.primary }]}>
                  {g}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Input
          label="Password"
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
        />

        {error && (
          <Text style={[styles.errorMessage, typography.body2]}>
            {error}
          </Text>
        )}

        <Button
          label="Sign Up"
          onPress={handleSignup}
          loading={loading}
          style={styles.signupButton}
        />
      </View>

      {/* Login Link */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, typography.body2]}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={onLogin}>
          <Text style={[styles.loginLink, typography.body2]}>
            Login
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
    marginTop: spacing.lg,
    marginBottom: spacing.lg
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
  gradeContainer: {
    marginBottom: spacing.lg
  },
  gradeLabel: {
    marginBottom: spacing.xs,
    color: colors.text.primary,
    fontWeight: '500'
  },
  gradeSelector: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  gradeText: {
    color: colors.text.primary
  },
  gradePlaceholder: {
    color: colors.text.light
  },
  chevron: {
    color: colors.text.secondary,
    fontSize: 12
  },
  dropdown: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border
  },
  dropdownItem: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider
  },
  errorMessage: {
    color: colors.error,
    marginBottom: spacing.md,
    textAlign: 'center'
  },
  signupButton: {
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
  loginLink: {
    color: colors.primary,
    fontWeight: '600'
  }
});
