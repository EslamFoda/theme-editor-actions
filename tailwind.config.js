module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-hover": "#2267d8",
        "gray-color": "#999999",
        "light-gray": "#f7f8fa",
        light: "#f7f8fa",
        "font-color": "#191919",
        "gray-border": "#e9e7e7",
        onNeutralBg: "var(--onNeutralBg)",
        neutralBg: "var(--neutralBg)",
        onPrimaryBg: "var(--onPrimaryBg)",
        primaryBg: "var(--primaryBg)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      fontSize: {
        "very-small": "4px",
        small: "6px",
      },
      width: {
        small: "100px",
      },
      boxShadow: {
        custom: "0px 0px 5px rgba(0, 0, 0, 0.50)",
        big: "0 6px 50px rgba(0,0,0,.2)",
        inside: "inset 0px 0px 0px 4px",
        "inside-small": "inset 0px 0px 0px 3px",
      },
      fontFamily: {
        choosedFont: "var(--mainFont)",
      },
    },
  },
  plugins: [],
};
