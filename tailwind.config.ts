import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "rgb(var(--color-brand-background-rgb) / <alpha-value>)",
          primaryText: "rgb(var(--color-brand-primary-text-rgb) / <alpha-value>)",
          secondaryText: "rgb(var(--color-brand-secondary-text-rgb) / <alpha-value>)",
          secondaryText50: "rgb(var(--color-brand-secondary-text-rgb) / 0.5)",
          tagBg: "rgb(var(--color-brand-tag-bg-rgb) / 0.5)",
          error: "rgb(var(--color-state-error-rgb) / <alpha-value>)",
          errorSoft: "rgb(var(--color-state-error-rgb) / 0.18)",
          disabledBg: "rgb(var(--color-state-disabled-bg-rgb) / 0.2)",
          disabledText: "rgb(var(--color-state-disabled-text-rgb) / 0.72)",
        },
        primary: {
          DEFAULT: "rgb(var(--color-brand-primary-text-rgb) / <alpha-value>)",
          dark: "rgb(var(--color-brand-secondary-text-rgb) / <alpha-value>)",
        },
        background: "rgb(var(--color-brand-background-rgb) / <alpha-value>)",
        text: {
          DEFAULT: "rgb(var(--color-brand-secondary-text-rgb) / <alpha-value>)",
          muted: "rgb(var(--color-brand-secondary-text-rgb) / 0.5)",
        },
      },
      backgroundImage: {
        "brand-accent": "var(--gradient-brand-accent)",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        "header-1": ["var(--text-header-1)", { lineHeight: "1.06" }],
        title: ["var(--text-title)", { lineHeight: "1.1" }],
        "body-display": ["var(--text-body-display)", { lineHeight: "1.15" }],
        body: ["var(--text-body)", { lineHeight: "1.45" }],
        footer: ["var(--text-footer)", { lineHeight: "1.35" }],
        button: ["var(--text-button)", { lineHeight: "1.2" }],
        hero: ["var(--text-header-1)", { lineHeight: "1.06" }],
        h1: ["var(--text-title)", { lineHeight: "1.1" }],
        h2: ["var(--text-body-display)", { lineHeight: "1.15" }],
        h3: ["var(--text-body)", { lineHeight: "1.45" }],
        small: ["0.875rem", { lineHeight: "1.2" }],
        caption: ["0.75rem", { lineHeight: "1.2" }],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
      spacing: {
        section: "var(--space-section)",
        "title-subtitle": "var(--space-title-subtitle)",
        "card-gap": "var(--space-card-gap)",
        "container-gap": "var(--space-container-gap)",
      },
    },
  },
  plugins: [],
};
export default config;
