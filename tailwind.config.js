/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/js/script.js","./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    }, fontFamily: {
      'Rubik': ['Rubik Doodle Shadow'],
      'Oswald': ['Oswald']
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
