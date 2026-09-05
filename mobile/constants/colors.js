// KlassKonnect brand palette (see root CLAUDE.md "Brand & design system" for the source spec).
// Core brand colors: Ink Navy #0B1B3F, Konnect Blue #1B54F5, Signal Yellow #F5A524
// (never as small text — use #7F4F00 instead), Paper #F2F1EC.
// Token names below are preserved from the pre-rebrand palette so all existing imports keep
// working; only `secondaryLight` is new. Values marked "derived" are tints/steps this file
// needed but aren't one of the 4 core hexes above — flagged for design sign-off.
export const colors = {
  primary: '#1B54F5',        // Konnect Blue — actions/links/borders (the app's dominant interactive color, ~49 call sites)
  primaryDark: '#0B1B3F',    // Ink Navy — dark UI / pressed-state companion to primary
  primaryLight: '#E7ECFD',   // derived: pale Konnect Blue tint, for soft highlight card backgrounds

  secondary: '#F5A524',      // Signal Yellow — safe as a fill/border; never as small text
  secondaryLight: '#FDECD2', // derived: pale Signal Yellow tint, for soft accent card backgrounds
  secondaryDark: '#7F4F00',  // Signal Yellow's text-safe dark shade, reused for pressed/dark states

  accent: '#7F4F00',         // Signal Yellow set as TYPE on light backgrounds — never the raw #F5A524 for text, per brand spec

  background: '#F2F1EC',     // Paper — screen backgrounds, light lockup ground
  surface: '#E8E7E0',        // derived: muted Paper step for inputs/disabled states/recessed surfaces

  text: {
    primary: '#0B1B3F',      // Ink Navy — headings and primary body text
    secondary: '#757575',
    light: '#BDBDBD',
    inverse: '#FFFFFF'
  },

  border: '#E0E0E0',
  divider: '#EEEEEE',

  success: '#4CAF50',
  successLight: '#D4EDDA',   // pale success tint for banners/notifications (same value already in use, just centralized)
  successDark: '#155724',    // success text-on-light shade (same value already in use, just centralized)
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',

  shadow: 'rgba(0, 0, 0, 0.1)'
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 50
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36
  },
  h3: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32
  },
  subtitle1: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24
  },
  body1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24
  },
  body2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24
  }
};
