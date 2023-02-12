/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1240px", //1496
      },
    },
    extend: {
      colors: {
        primary: "#0083C1",
        secondary: "#EE4047",
      },
      fontFamily: {
        Roboto: '"Roboto", sans-serif',
        Montserrat: '"Montserrat", sans-serif',
        Poppins: '"Poppins", sans-serif',
      },
    },
  },
  plugins: [],
};
