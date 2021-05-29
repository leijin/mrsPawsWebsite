module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C3A2E7",
          light: "#F3D2FF",
          dark: "#8F72B6",
        },
        secondary: {
          DEFAULT: "#FF8A80",
          light: "#FFBCAF",
          dark: "#C85A54",
        },
      },
      fontFamily: {
        headline: "Spectral, serif",
        primary: "Karla, sans-serif",
        heroHeadline: "Sue Ellen Francisco, sans-serif",
      },
      height: {
        18: "5rem",
        19: "6rem",
        20: "7rem",
        21: "8rem",
        22: "9rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
