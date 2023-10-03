import { defineTextStyles } from "@pandacss/dev";

const textStyles = defineTextStyles({
    appBarFont: {
        description: "Use this style in the AppBar.",
        value: {
            fontFamily: "Barlow, sans-serif",
            fontWeight: "700",
            fontSize: "25px",
            lineHeight: "58px",
            letterSpacing: "0",
        },
    },

    majorTitle: {
        description: "Use this style in the AppBar.",
        value: {
            fontFamily: "Barlow, sans-serif",
            fontWeight: "700",
            fontSize: {
                base: "46px",
                sm: "54px",
                md: "62px",
                lg: "70px",
                xl: "78px",
                "2xl": "80px",
            },
            lineHeight: {
                base: "62px",
                sm: "70px",
                md: "78px",
                lg: "86px",
                xl: "94px",
                "2xl": "96px",
            },
        },
    },

    barlowH2: {
        description: "Use this style as a section title.",
        value: {
            fontFamily: "Barlow, sans-serif",
            fontWeight: "700",
            fontSize: {
                base: "35px",
                sm: "37px",
                md: "40px",
                lg: "43px",
                xl: "45px",
            },
            lineHeight: {
                base: "40px",
                sm: "43px",
                md: "45px",
                lg: "47px",
                xl: "50px",
            },
            letterSpacing: "0.0em",
        },
    },

    barlowH3: {
        description: "Use this style in the AppBar.",
        value: {
            fontFamily: "Barlow, sans-serif",
            fontWeight: "700",
            fontSize: {
                base: "24px",
                sm: "26px",
                md: "28px",
                lg: "30px",
                xl: "32px",
            },
            letterSpacing: "0.1em",
        },
    },

    barlowP: {
        description: "Use this style in common text.",
        value: {
            fontFamily: "Barlow, sans-serif",
            fontWeight: "500",
            fontSize: "22px",
            lineHeight: "29px",
            letterSpacing: "0.05em",
        },
    },

    barlowStrong: {
        description: "Use this style in a strong text.",
        value: {
            fontFamily: "Barlow, sans-serif",
            fontWeight: "700",
            fontSize: "22px",
            lineHeight: "29px",
            letterSpacing: "0.05em",
        },
    },

    guestName: {
        description:
            "This text style is used in the name of the guests in the guests page.",
        value: {
            fontFamily: "'Playfair Display', sans-serif",
            fontWeight: "700",
            fontSize: "25px",
        },
    },

    guestJob: {
        description:
            "This text style is used in the guest subtitle, their job, game, etc.",
        value: {
            fontFamily: "Barlow, sans-serif",
            fontWeight: "400",
            fontSize: "16px",
        },
    },
});

export default textStyles;
