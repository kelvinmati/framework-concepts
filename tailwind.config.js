module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      width: {
        mobile: "90%",
        container_width: "80%",
      },
      colors: {
        mainColor: "#64bcf4",
        hoverColor: "#5bacdf",
        textColor: "#ccc",
      },
    },
  },
  plugins: [],
};
