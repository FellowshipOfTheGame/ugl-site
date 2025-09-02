// Design System Exports
// Central hub for all design tokens

export * from './colors';
export * from './typography';
export * from './spacing';

// Common component patterns
export const commonPatterns = {
  // Flexbox patterns
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },

  // Container patterns
  container: {
    maxWidth: '1200px',
    marginX: 'auto',
    paddingX: { base: '16px', md: '24px', lg: '32px' },
  },

  section: {
    paddingY: { base: '48px', md: '64px', lg: '96px' },
    width: '100%',
  },

  // Border radius
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '9999px',
  },

  // Transitions
  transition: {
    fast: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    normal: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
