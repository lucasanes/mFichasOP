import { globalCss } from "@stitches/react";

export const GlobalStyles = globalCss({
  ":root": {
    fontSize: "62.5%",

    // "@media (max-width:1200px)": {
    //   fontSize: "56.25%"
    // },

    // "@media(max-width:1080px)": {
    //   fontSize: "50%"
    // },

    // "@media(max-width: 900px)": {
    //   fontSize: "43.75%"
    // },

    // "@media(max-width: 790px)": {
    //   fontSize: "38.5%"
    // }
  },

  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontSize: "1.6rem",
    '::-webkit-scrollbar': {
      backgroundColor: '#1d1d1d',
      width: '7px',
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px'
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#5b5b5b',
      borderRadius: '5px',
    },
  },

  body: {
    width: "100vw",
    height: "100vh",
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "rgb(10,10,10)",
    position: 'fixed',
    overflow: 'hidden'
  },

  button: {
    cursor: "pointer"
  },

  input: {
    '-webkit-text-fill-color': 'white !important',
  },

  'input:-webkit-autofill': {
    '-webkit-box-shadow': '0 0 0 30px rgb(20,20,20) inset'
  },

  '@font-face': {
    fontFamily: 'sinais',
    src: "url('./src/assets/fonts/SinaisEstrangeiro.ttf')"
  },

});
