/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          25: '#f1f5f9',
          50: '#e2e8f0',
          100: '#cbd5e1',
          200: '#94a3b8',
          300: '#64748b',
          400: '#475569',
          500: '#334155',
          600: '#1e293b',
          700: '#0f172a',
          800: '#0f172a', // Dark Mode Primary
          900: '#0a1122', // Even darker for extreme contrast
        },
        secondary: {
          25: '#fefce8',
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f', // Dark Mode Secondary
          900: '#5f370e', // Darker Secondary
        },
        accent: {
          25: '#f3f4f6',
          50: '#e5e7eb',
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#1f2937',
          700: '#111827',
          800: '#0c1a23', // Dark Mode Accent
          900: '#09121b', // Darker Accent
        },
        pastelblue: {
          50: '#ebf5ff',
          100: '#d6eaff',
          200: '#add5ff',
          300: '#85c1ff',
          400: '#5cabff',
          500: '#3396ff',
          600: '#1f7ae6',
          700: '#1760b3',
          800: '#114680',
          900: '#0a2b4d',
        },
      },
      fontFamily: {
        cursive: ['"Brush Script MT"', 'cursive'], // Add your desired cursive font here
        sans: ['"Lato"', 'sans-serif'],
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
    },
  },
  plugins: [],
};
