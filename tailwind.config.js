/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#185CFF',
        'secondary': '#002B4E',
        'blue-1': '#194060',
        'blue-2': '#607D94',
        'blue-3': '#C9DCEC',
        'tertiary': '#F0F9FF',
        'black': '#292D33',
        'gray': '#9497A1',
        'background': '#F1F6FA',
        'error': '#C14040',
      },
      boxShadow: {
        'button':'0px 12px 30px rgba(24, 92, 255, 0.18)',
        'card-1':'0px 2px 20px 17px rgba(24, 92, 255, 0.04)',
        'card-2':'0px 12px 30px 17px rgba(24, 92, 255, 0.04)',
        'card-3':'0px 4px 12px rgba(12, 68, 204, 0.1)',
        'dropdown':'0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3)',
      }
    },
  },
  plugins: [],
}