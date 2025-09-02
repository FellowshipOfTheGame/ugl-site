const tokens = {
  "colors.ugl-blue": {
    "value": "#324158",
    "variable": "var(--colors-ugl-blue)"
  },
  "colors.ugl-purple": {
    "value": "#282c64",
    "variable": "var(--colors-ugl-purple)"
  },
  "colors.ugl-purple-light": {
    "value": "#3c4088",
    "variable": "var(--colors-ugl-purple-light)"
  },
  "colors.ugl-purple-dark": {
    "value": "#1e2050",
    "variable": "var(--colors-ugl-purple-dark)"
  },
  "colors.ugl-yellow": {
    "value": "#f7c949",
    "variable": "var(--colors-ugl-yellow)"
  },
  "colors.ugl-orange": {
    "value": "#f79421",
    "variable": "var(--colors-ugl-orange)"
  },
  "colors.ugl-orange-light": {
    "value": "#ffb84d",
    "variable": "var(--colors-ugl-orange-light)"
  },
  "colors.gradient-primary": {
    "value": "linear-gradient(135deg, #282c64 0%, #3c4088 50%, #4a5099 100%)",
    "variable": "var(--colors-gradient-primary)"
  },
  "colors.gradient-accent": {
    "value": "linear-gradient(135deg, #f79421 0%, #ffb84d 100%)",
    "variable": "var(--colors-gradient-accent)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar