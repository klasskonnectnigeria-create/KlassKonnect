import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, typography, borderRadius } from '../constants/colors';

export function Input({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  error,
  disabled = false,
  style
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={style}>
      {label && (
        <Text style={[styles.label, typography.subtitle2]}>
          {label}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          typography.body1,
          isFocused && styles.inputFocused,
          error && styles.inputError,
          disabled && styles.inputDisabled
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.text.light}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        editable={!disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {error && (
        <Text style={[styles.error, typography.caption]}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: spacing.xs,
    color: colors.text.primary,
    fontWeight: '500'
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.background,
    color: colors.text.primary,
    minHeight: 48
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2
  },
  inputError: {
    borderColor: colors.error
  },
  inputDisabled: {
    backgroundColor: colors.surface,
    opacity: 0.6
  },
  error: {
    marginTop: spacing.xs,
    color: colors.error
  }
});
