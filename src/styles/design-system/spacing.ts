// Design System: Spacing Tokens
// Following 8px base grid for consistency

export const spacing = {
  // Component spacing
  xs: '4px', // 0.5rem
  sm: '8px', // 1rem
  md: '16px', // 2rem
  lg: '24px', // 3rem
  xl: '32px', // 4rem
  '2xl': '48px', // 6rem
  '3xl': '64px', // 8rem
  '4xl': '96px', // 12rem

  // Semantic spacing
  section: {
    base: '48px',
    md: '64px',
    lg: '96px',
  },

  container: {
    base: '16px',
    md: '24px',
    lg: '32px',
  },

  gap: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
  },
};

// Responsive spacing utilities
export const responsiveSpacing = {
  sectionY: {
    base: spacing.section.base,
    md: spacing.section.md,
    lg: spacing.section.lg,
  },
  containerX: {
    base: spacing.container.base,
    md: spacing.container.md,
    lg: spacing.container.lg,
  },
  containerY: { base: spacing.md, md: spacing.lg, lg: spacing.xl },
  elementGap: { base: spacing.gap.xs, md: spacing.gap.sm, lg: spacing.gap.md },
};
