/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/js/script.js","./index.php",'./index.html','./product/index.html','./cart/index.html'],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    }, fontFamily: {
      'Rubik': ['Rubik Doodle Shadow'],
      'Oswald': ['Oswald'],
     'Poppins':['Poppins']
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
