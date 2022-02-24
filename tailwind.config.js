module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "45": "45%",
        "200": "200%",
        "120": "120%"
      },
      keyframes: {
        fadeUp: {
          from: { transform: "translate3d(0,40px,0)", opacity: "0" },
          to: { transform: "translate3d(0,0,0)", opacity: "1" },
        },
        fadeUpFast: {
          from: { transform: "translate3d(0,10px,0)", opacity: "0" },
          to: { transform: "translate3d(0,0,0)", opacity: "1" },
        },
        fadeDown: {
          from: { transform: "translate3d(0,10px,0)", opacity: "0" },
          to: { transform: "translate3d(0,10px,0)", opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s ease-in 1",
        fadeDown: "fadeDown 0.5s ease-in 1",
        fadeUpFast: "fadeUpFast 0.5s ease-in-out 1",
      },
    },
    textColor: {
      primary: "#333",
      white: "#ffffff",
    },
    backgroundColor: {
      primary: "#333",
      gray: "rgba(209, 213, 219, 1)",
      lightGray: "rgba(156, 163, 175, 1)",
      white: "#ffffff",
      blue: "#0d1e2d",
    },
  },
  variants: {
    extend: {},
    cursor: ["responsive"],
  },
  plugins: [],
};
