/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: 'oklch(0.97 0.02 var(--hue-primary, 250))',
          100: 'oklch(0.93 0.04 var(--hue-primary, 250))',
          200: 'oklch(0.87 0.08 var(--hue-primary, 250))',
          300: 'oklch(0.78 0.12 var(--hue-primary, 250))',
          400: 'oklch(0.68 0.16 var(--hue-primary, 250))',
          500: 'oklch(0.58 0.2 var(--hue-primary, 250))',
          600: 'oklch(0.50 0.2 var(--hue-primary, 250))',
          700: 'oklch(0.43 0.18 var(--hue-primary, 250))',
          800: 'oklch(0.36 0.14 var(--hue-primary, 250))',
          900: 'oklch(0.30 0.10 var(--hue-primary, 250))',
          950: 'oklch(0.22 0.08 var(--hue-primary, 250))',
        },
      },
    },
  },
  plugins: [],
};
