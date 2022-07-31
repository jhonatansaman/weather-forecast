const theme = {
  colors: {
    primary: {
      default: "#F1F5FE",
      light: "#90B7FC",
      dark: "#5E97FA",
      translucent: "#A5C5FC",
    },
    secondary: {
      default: "#6992F7",
      light: "#FFF569",
      dark: "#DAAE0F",
    },
    contrast: {
      default: "#2485EA",
      light: "#f3f3f3",
      lightBlue: "#D3E7FB",
      dark: "#1C67B8",
      mininum: "#E3E7EE",
      success: "#77dd77",
    },
    base: {
      mininum: "#FFFFFF",
    },
  },
  breakpoints: {
    device: {
      mobileS: `(max-width: 320px)`,
      mobileM: `(max-width: 375px)`,
      mobileL: `(max-width: 425px)`,
      tablet: `(max-width: 768px)`,
      laptop: `(max-width: 768px)`,
      laptopL: `(max-width: 1024px)`,
      desktop: `(max-width: 1440px)`,
      desktopM: `(max-width: 1740px)`,
      desktopL: `(max-width: 2560px)`,
    },
  },
};

export default theme;
