/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#111827',
        },
        foreground: {
          light: '#111827',
          dark: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
