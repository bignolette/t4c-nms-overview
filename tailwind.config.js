/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          850: '#1e293b', // Custom darker slate
          950: '#020617', // Deep background
        },
        amber: {
          450: '#fbbf24', // Gold accent
        }
      }
    },
  },
  plugins: [],
}