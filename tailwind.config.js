/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0B0713',       // Canvas background (Dark Mode)
          card: '#150E25',       // Elevated surface background
          border: '#2A1B47',     // Glowing subtle borders
          light: '#F8F6F4',      // Canvas background (Light Mode)
          lightCard: '#FFFFFF',  // Light Mode card surface
          purple: {
            DEFAULT: '#4A154B',
            light: '#9B51E0',
            glow: '#7939A8',
          },
          bronze: {
            DEFAULT: '#8B5A3C',
            light: '#C59B27',
          },
          silver: '#E2E8F0',
        }
      },
      boxShadow: {
        'glow-purple': '0 0 25px -5px rgba(155, 81, 224, 0.35)',
        'glow-bronze': '0 0 20px -3px rgba(197, 155, 39, 0.25)',
        'glow-lg': '0 0 50px -10px rgba(121, 57, 168, 0.4)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(155,81,224,0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(197,155,39,0.6))' },
        }
      }
    },
  },
  plugins: [],
}
