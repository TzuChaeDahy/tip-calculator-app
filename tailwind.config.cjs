/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      colors: {
        "project-neutral": {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(189, 41%, 97%)",
          300: "hsl(184, 14%, 56%)",
          400: "hsl(186, 14%, 43%)",
        },
        "project-cyan": {
          100: "hsl(185, 41%, 84%)",
          200: "hsl(172, 67%, 45%)",
          300: "hsl(183, 100%, 15%)",
        },
      },
      fontFamily: {
        space: ["'Space Mono', monospace;"],
      },
    },
  },
  plugins: [],
};
