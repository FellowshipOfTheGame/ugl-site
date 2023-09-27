import { defineConfig } from "@pandacss/dev";
import textStyles from "./style-extensions/text-styles";
import colors from './style-extensions/colors';

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        tokens: {
            // fonts: {
            //     'font-name': {value: 'Raleway, sans-serif'},
            // },
        },
        extend: {
            textStyles,
            tokens: {
                colors,
            },
        },
    },

    // The output directory for your css system
    outdir: "styled-system",
});
