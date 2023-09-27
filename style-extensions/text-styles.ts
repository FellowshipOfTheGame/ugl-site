import { defineTextStyles } from '@pandacss/dev';


const textStyles = defineTextStyles({
    appBarFont: {
        description:
            'Use this style in the AppBar.',
        value: {
            fontFamily: 'Barlow, sans-serif',
            fontWeight: '700',
            fontSize: '25px',
            lineHeight: '58px',
            letterSpacing: '0',
        },
    },

    majorTitle: {
        description:
            'Use this style in the AppBar.',
        value: {
            fontFamily: 'Barlow, sans-serif',
            fontWeight: '700',
            fontSize: '80px',
            lineHeight: '96px',
        },
    },

    barlowH2: {
        description:
            'Use this style as a section title.',
        value: {
            fontFamily: 'Barlow, sans-serif',
            fontWeight: '700',
            fontSize: '45px',
            lineHeight: '50px',
            letterSpacing: '0.0em',
        },
    },

    barlowH3: {
        description:
            'Use this style in the AppBar.',
        value: {
            fontFamily: 'Barlow, sans-serif',
            fontWeight: '700',
            fontSize: '32px',
            letterSpacing: '0.1em',
        },
    },

    barlowP: {
        description:
            'Use this style in common text.',
        value: {
            fontFamily: 'Barlow, sans-serif',
            fontWeight: '500',
            fontSize: '22px',
            lineHeight: '29px',
            letterSpacing: '0.05em',
        },
    },

    barlowStrong: {
        description:
            'Use this style in a strong text.',
        value: {
            fontFamily: 'Barlow, sans-serif',
            fontWeight: '700',
            fontSize: '22px',
            lineHeight: '29px',
            letterSpacing: '0.05em',
        },
    },
});


export default textStyles;