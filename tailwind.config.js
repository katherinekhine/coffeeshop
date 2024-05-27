/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        primaryColor: "#94B1DE",
        navColor: "#E9EDF3",
        titleColor: "#A6C7F9",
        whiteColor: "#FFFFFF",
        menuBtnColor: "#7B8DA9",
        btnColor: "#063B89",
        darkBlueColor: "#121D2E",
        cardColor: "#5F6D82",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1.5rem",
        },
      },
    },
  },
  plugins: [],
};
