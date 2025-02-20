/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // For Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#2ecc71",
        secondary: "#f1c40f",
        neutral: "#ecf0f1",
        accent: "#2c3e50",
        highlight: "#e74c3c",
      }
    },
  },
  plugins: [],
};


// #2ecc71 rgb(46, 204, 113) primary color
// #f1c40f rgb(241, 196, 15) secondary color
// #ecf0f1 rgb(236, 240, 241) neutral color
// #2c3e50 rgb(44, 62, 80) accent color
// #e74c3c rgb(231, 76, 60) optional highlight color