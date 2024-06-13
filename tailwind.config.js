/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#f9f9f9",
        "off-black": "#121212",
        "dark-gray": "#333",
        "darker-gray": "#222",
        "light-gray": "#666",
      },
    },
  },
  plugins: [],
};
