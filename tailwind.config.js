/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#534FFF",
        "dark-purple": "#3F3D99",
        "dark-gray": "#182122",
        section: "#242C2E",
        green: "#b1e365",
      },
      borderWidth: {
        "1/2": ".5px",
      },
    },
  },
  plugins: [],
};
