import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Team brand colors
        primary: {
          50: '#fff0f0',
          100: '#ffe6e6',
          500: '#E10600',
          600: '#cc0500',
          700: '#b30400',
          900: '#330100',
        },
        secondary: '#0B0B0D',
        surface: '#121217',
        accent: '#FFFFFF',
        highlight: '#00D1FF',
        // Dark mode base
        dark: {
          bg: '#0B0B0D',
          surface: '#121217',
          border: '#2d2d35',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', '--font-plex-thai', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.15em',
        motorsport: '0.1em',
      },
    },
  },
  plugins: [],
};

export default config;
