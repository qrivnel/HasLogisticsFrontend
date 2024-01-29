/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'logistics': "url('./src/assets/logistics2.jpeg')",
      'storage': "url('./src/assets/logistics3.jpeg')"
    }
  },
  plugins: [],
}

