/* eslint-disable */
export type Token = "colors.ugl-blue" | "colors.ugl-purple" | "colors.ugl-purple-light" | "colors.ugl-purple-dark" | "colors.ugl-yellow" | "colors.ugl-orange" | "colors.ugl-orange-light" | "colors.gradient-primary" | "colors.gradient-accent" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl"

export type ColorToken = "ugl-blue" | "ugl-purple" | "ugl-purple-light" | "ugl-purple-dark" | "ugl-yellow" | "ugl-orange" | "ugl-orange-light" | "gradient-primary" | "gradient-accent"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce"

export type Tokens = {
		colors: ColorToken
		breakpoints: BreakpointToken
		sizes: SizeToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"