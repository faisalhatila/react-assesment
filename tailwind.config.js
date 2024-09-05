/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      darkprimary: '#151515',
      lightPrimary: '#ffffff',
      secondary: '#6E56E0',
      white: '#ffffff',
      border: '#272727',
      pending: '#FFD928'
    },
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}