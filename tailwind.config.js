/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#E63946',
          light: '#FF6B6B',
          dark: '#C1121F',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          2: '#111111',
          3: '#1A1A1A',
          4: '#222222',
        },
        foreground: '#F5F5F5',
        muted: '#6B7280',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(4rem, 14vw, 14rem)',
        'hero-sm': 'clamp(3rem, 10vw, 8rem)',
      },
      letterSpacing: {
        tightest: '-0.06em',
        display: '-0.04em',
      },
      lineHeight: {
        editorial: '0.82',
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #E63946 0%, #FF6B6B 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
      },
      animation: {
        'pulse-red': 'pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'hero-fade': 'heroFade 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};