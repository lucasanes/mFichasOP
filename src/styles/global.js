import { globalCss } from "@stitches/react"

export const GlobalStyles = globalCss({
  ":root": {
    fontSize: "62.5%",
  },

  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontSize: "1.6rem",
    '::-webkit-scrollbar': {
      backgroundColor: '#373737',
      width: '7px',
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px'
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#6b6b6b',
      borderRadius: '5px',
    },
  },

  body: {
    width: "100vw",
    height: "100vh",
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "rgb(10,10,10)",
    overflow: 'hidden',
    position: 'fixed'
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

  'input[type=number]::-webkit-inner-spin-button': { 
    '-webkit-appearance': 'none'  
  },

  'input[type=number]': { 
    '-moz-appearance': 'textfield',
    'appearance': 'textfield'
  }

});
