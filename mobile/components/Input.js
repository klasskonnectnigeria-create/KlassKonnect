import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  colors,
  spacing,
  typography,
  borderRadius
} from '../constants/colors';

export function Input({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  autoCorrect = false,
  error,
  disabled = false,
  leftIcon,
  rightIcon,
  onRightIconPress,
  multiline = false,
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

      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.inputFocused,
          error && styles.inputError,
          disabled && styles.inputDisabled
        ]}
      >
        {leftIcon ? (
          <View style={styles.leftIcon}>
            {leftIcon}
          </View>
        ) : null}

        <TextInput
          style={[styles.input, typography.body1, multiline && styles.inputMultiline]}
          placeholder={placeholder}
          placeholderTextColor={colors.text.light}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          editable={!disabled}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {rightIcon && onRightIconPress ? (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.rightButton}
            activeOpacity={0.7}
          >
            {rightIcon}
          </TouchableOpacity>
        ) : rightIcon ? (
          <View style={styles.rightButton}>
            {rightIcon}
          </View>
        ) : null}
      </View>

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
    marginBottom: spacing.sm,
    color: colors.text.primary,
    fontWeight: '500'
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.background,
    minHeight: 54
  },

  input: {
    flex: 1,
    minHeight: 52,
    paddingVertical: 0,
    color: colors.text.primary
  },

  inputMultiline: {
    minHeight: 44,
    maxHeight: 100,
    paddingVertical: spacing.sm
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

  leftIcon: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm
  },

  rightButton: {
    width: 36,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },

  error: {
    marginTop: spacing.xs,
    color: colors.error
  }
});
