import { createTheme } from "@mui/material/styles";
import KopubWorldDotumBold from "../assets/fonts/KoPubWorldDotumBold.ttf";
import KopubWorldDotumLight from "../assets/fonts/KoPubWorldDotumLight.woff";
import EstablishRetrosansOTF from "../assets/fonts/establishRetrosansOTF.woff";
import KopubWorldDotumMedium from "../assets/fonts/KoPubWorldDotumMedium.ttf";

const theme = createTheme({
  palette: {
    primary: { main: "#5DB683" },
    text: { primary: "#353535" },
    background: { default: "#FFFFFF", paper: "#F5F6F6" },
  },
  typography: {
    fontFamily: "'KoPubWorld Dotum Light', sans-serif",
    h1: {
      fontFamily: "establishRetrosansOTF",
      fontSize: "22px",
      fontWeight: 500,
      color: "#353535",
      lineHeight: "35px",
    },
    h2: {
      fontFamily: "establishRetrosansOTF",
      fontSize: "22px",
      fontWeight: 500,
      color: "#5DB683",
      lineHeight: "35px",
    },
    body1: {
      fontFamily: "'KoPubWorld Dotum Light'",
      fontSize: "16px",
      color: "#353535",
      fontWeight: 300,
      lineHeight: "20px",
    },
    body2: {
      fontFamily: "'KoPubWorld Dotum Medium'",
      fontSize: "16px",
      color: "#353535",
      fontWeight: 300,
    },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1280, xl: 1440 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'KoPubWorld Dotum Bold';
          src: url('${KopubWorldDotumBold}');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'KoPubWorld Dotum Light';
          src: url('${KopubWorldDotumLight}');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'establishRetrosansOTF';
          src: url('${EstablishRetrosansOTF}');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'KoPubWorld Dotum Medium';
          src: url('${KopubWorldDotumMedium}');
          font-weight: normal;
          font-style: normal;
        }
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `,
    },
  },
});

export default theme;
