// Design System: Color Palette
// Consistent color tokens with semantic meanings

export const colors = {
  // Brand Colors
  brand: {
    primary: '#282c64', // ugl-purple
    primaryLight: '#3c4088', // ugl-purple-light
    primaryDark: '#1e2050', // ugl-purple-dark
    secondary: '#f79421', // ugl-orange
    secondaryLight: '#ffb84d', // ugl-orange-light
    accent: '#f7c949', // ugl-yellow
    neutral: '#324158', // ugl-blue
  },

  // Semantic Colors
  semantic: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // Neutral Colors (for text, backgrounds, borders)
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },

  // Text Colors
  text: {
    primary: '#1e293b', // neutral-800
    secondary: '#475569', // neutral-600
    tertiary: '#64748b', // neutral-500
    inverse: '#ffffff',
    accent: '#282c64', // brand primary
    highlight: '#f79421', // brand secondary
  },

  // Background Colors
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc', // neutral-50
    tertiary: '#f1f5f9', // neutral-100
    accent: '#282c64', // brand primary
    overlay: 'rgba(40, 44, 100, 0.9)',
  },

  // Border Colors
  border: {
    light: '#e2e8f0', // neutral-200
    medium: '#cbd5e1', // neutral-300
    dark: '#94a3b8', // neutral-400
    accent: '#f79421', // brand secondary
  },

  // Interactive States
  interactive: {
    hover: 'rgba(247, 148, 33, 0.1)',
    focus: 'rgba(247, 148, 33, 0.2)',
    active: 'rgba(247, 148, 33, 0.3)',
    disabled: '#cbd5e1',
  },
};

// Gradients
export const gradients = {
  primary: 'linear-gradient(135deg, #282c64 0%, #3c4088 50%, #4a5099 100%)',
  secondary: 'linear-gradient(135deg, #f79421 0%, #ffb84d 100%)',
  accent: 'linear-gradient(135deg, #f7c949 0%, #f79421 100%)',
  overlay:
    'linear-gradient(135deg, rgba(40, 44, 100, 0.8) 0%, rgba(60, 64, 136, 0.6) 100%)',
};

// Shadow System
export const shadows = {
  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  base: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
  md: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
  lg: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  xl: '0 25px 50px rgba(0, 0, 0, 0.25)',

  // Brand-colored shadows
  brandSm: '0 4px 15px rgba(247, 148, 33, 0.3)',
  brandMd: '0 8px 25px rgba(247, 148, 33, 0.4)',
  brandLg: '0 12px 35px rgba(247, 148, 33, 0.5)',
};
