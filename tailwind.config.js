/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Indigo
        secondary: '#F59E0B', // Amber
        accent: '#10B981', // Emerald
        dark: '#111827',
        light: '#F9FAFB',
      },
    },
  },
  plugins: [],
};
