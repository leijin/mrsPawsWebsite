module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
