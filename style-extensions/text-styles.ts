import { defineTextStyles } from '@pandacss/dev';

const textStyles = defineTextStyles({
  // Navigation
  appBarFont: {
    description: 'Navigation menu text',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '600',
      fontSize: { base: '16px', md: '18px' },
      lineHeight: '1.3',
      letterSpacing: '0.05em',
    },
  },

  // Headings - Consistent hierarchy
  majorTitle: {
    description: 'Main hero title',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '700',
      fontSize: {
        base: '32px',
        sm: '40px',
        md: '48px',
        lg: '56px',
        xl: '64px',
      },
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
  },

  h1: {
    description: 'Primary heading',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '700',
      fontSize: {
        base: '28px',
        md: '40px',
        lg: '48px',
      },
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
  },

  h2: {
    description: 'Section heading',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '700',
      fontSize: {
        base: '24px',
        md: '32px',
        lg: '40px',
      },
      lineHeight: '1.3',
      letterSpacing: '0em',
    },
  },

  h3: {
    description: 'Subsection heading',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '600',
      fontSize: {
        base: '20px',
        md: '24px',
        lg: '28px',
      },
      lineHeight: '1.3',
      letterSpacing: '0.025em',
    },
  },

  // Body text - Consistent sizing
  bodyLarge: {
    description: 'Large body text',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '400',
      fontSize: { base: '18px', md: '20px' },
      lineHeight: '1.6',
    },
  },

  body: {
    description: 'Default body text',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '400',
      fontSize: { base: '16px', md: '18px' },
      lineHeight: '1.5',
    },
  },

  bodySmall: {
    description: 'Small body text',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '400',
      fontSize: { base: '14px', md: '16px' },
      lineHeight: '1.5',
    },
  },

  // Emphasized text
  strong: {
    description: 'Emphasized body text',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '600',
      fontSize: { base: '16px', md: '18px' },
      lineHeight: '1.5',
    },
  },

  // Special components
  guestName: {
    description: 'Guest name in cards',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '700',
      fontSize: { base: '20px', md: '24px' },
      lineHeight: '1.3',
      letterSpacing: '-0.025em',
    },
  },

  guestJob: {
    description: 'Guest job title',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '400',
      fontSize: { base: '14px', md: '16px' },
      lineHeight: '1.4',
      color: '#64748b',
    },
  },

  // Interactive elements
  button: {
    description: 'Button text',
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '600',
      fontSize: { base: '16px', md: '18px' },
      lineHeight: '1.2',
      letterSpacing: '0.025em',
    },
  },

  // Legacy aliases for gradual migration
  barlowH2: {
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '700',
      fontSize: { base: '24px', md: '32px', lg: '40px' },
      lineHeight: '1.3',
    },
  },
  barlowH3: {
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '600',
      fontSize: { base: '20px', md: '24px', lg: '28px' },
      lineHeight: '1.3',
    },
  },
  barlowP: {
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '400',
      fontSize: { base: '16px', md: '18px' },
      lineHeight: '1.5',
    },
  },
  barlowPSmall: {
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '400',
      fontSize: { base: '14px', md: '16px' },
      lineHeight: '1.5',
    },
  },
  barlowPThin: {
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '400',
      fontSize: { base: '16px', md: '18px' },
      lineHeight: '1.6',
    },
  },
  barlowStrong: {
    value: {
      fontFamily: 'Barlow, sans-serif',
      fontWeight: '600',
      fontSize: { base: '16px', md: '18px' },
      lineHeight: '1.5',
    },
  },
});

export default textStyles;
