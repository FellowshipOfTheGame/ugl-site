// Design System: Typography System
// Consistent font sizes, weights, and line heights

export const typography = {
  // Font families
  fontFamily: {
    primary: 'Barlow, sans-serif',
    heading: 'Barlow, sans-serif',
    accent: '"Playfair Display", serif',
  },

  // Font sizes with consistent scale (1.25 ratio)
  fontSize: {
    xs: { base: '12px', md: '14px' },
    sm: { base: '14px', md: '16px' },
    base: { base: '16px', md: '18px' },
    lg: { base: '18px', md: '20px' },
    xl: { base: '20px', md: '22px' },
    '2xl': { base: '24px', md: '28px' },
    '3xl': { base: '28px', md: '32px' },
    '4xl': { base: '32px', md: '40px' },
    '5xl': { base: '40px', md: '48px' },
    '6xl': { base: '48px', md: '64px' },
  },

  // Font weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Line heights for better readability
  lineHeight: {
    tight: '1.2',
    snug: '1.3',
    normal: '1.5',
    relaxed: '1.6',
    loose: '1.8',
  },

  // Letter spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
  },
};

// Semantic text styles for consistent usage
export const textStyles = {
  // Headings
  h1: {
    fontSize: typography.fontSize['6xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight,
    fontFamily: typography.fontFamily.heading,
  },

  h2: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    fontFamily: typography.fontFamily.heading,
  },

  h3: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
    fontFamily: typography.fontFamily.heading,
  },

  h4: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
    fontFamily: typography.fontFamily.heading,
  },

  // Body text
  bodyLarge: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.relaxed,
    fontFamily: typography.fontFamily.primary,
  },

  body: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
    fontFamily: typography.fontFamily.primary,
  },

  bodySmall: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
    fontFamily: typography.fontFamily.primary,
  },

  // Accent text
  accent: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.snug,
    fontFamily: typography.fontFamily.accent,
  },

  // Interactive elements
  button: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.wide,
    fontFamily: typography.fontFamily.primary,
  },

  nav: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.wider,
    fontFamily: typography.fontFamily.primary,
  },
};
