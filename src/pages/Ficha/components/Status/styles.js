import {styled} from '../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  overflow: 'hidden'

});

export const BodyDefesas = styled('div', {

  maxHeight: 'calc(100% - 60px)',
  padding: '1.9rem 1rem',
  overflow: 'hidden auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '.grid2': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem'
  },

  '.grid3': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem 1.5rem',

    '@md': {
      gridTemplateColumns: '1fr 1fr 1fr'
    }
  },

  hr: {
    margin: '.5rem'
  }

});

export const BodyStatus = styled('div', {

  maxHeight: 'calc(100% - 60px)',
  padding: '2rem 1rem',
  overflow: 'hidden auto',

  h3: {
    color: 'white',
    textAlign: 'center',
    fontSize: '2rem',
    fontFamily: 'El Messiri'
  },

  '.header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '2rem',
    marginBottom: '2rem',

    '@md': {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '5rem'
    },

    '@lg': {
      gap: '10rem'
    },

    '.portrait': {
      border: '2px solid white',

      '.portrait-body': {
        display: 'flex',
        padding: '1rem 2rem',
        gap: '2rem'
      },

      h1: {
        color: 'white',
        textAlign: 'center',
        fontSize: '1.8rem',
        fontFamily: 'Special Elite',
        padding: '.8rem .5rem .5rem .4rem',
        letterSpacing: '1px'
      },

      h2: {
        color: 'white',
        textAlign: 'center',
        fontSize: '1.8rem',
        fontFamily: 'El Messiri',
        letterSpacing: '1px'
      },

      '.portrait-status': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem'
      },

      '.portrait-ocultar': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem'
      }
    }
  }

});

export const Img = styled('div', {

  width: '180px',
  border: '2px solid white',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    width: '180px',
    borderRadius: '100%',
    transition: '1s',

  }


});

export const PortraitButton = styled('button', {

  background: 'none',
  width: '100px',
  padding: '.3rem 0 .1rem 0',
  borderRadius: '5px',
  fontSize: '1.8rem',
  fontFamily: 'El Messiri',
  transition: '.2s',

  variants: {
    color: {
      red: {
        border: '1px solid #ff4343',
        color: '#ff4343',

        '&:hover': {
          background: '#ff434350'
        },
      },
      blue: {
        border: '1px solid #005eff',
        color: '#005eff',

        '&:hover': {
          background: '#005eff50'
        }
      },
      yellow: {
        border: '1px solid #ffd900',
        color: '#ffd900',

        '&:hover': {
          background: '#ffd90050'
        }
      }
    },

    active: {
      truered: {
        color: 'white',
        background: '#ff434350'

      },
      trueblue: {
        color: 'white',
        background: '#005eff50'
      },
      trueyellow: {
        color: 'white',
        background: '#ffd90050'
      }
    }
  }

});

export const Header = styled('div', {

  height: '60px',
  width: '100%',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem'

});

export const Button = styled('button', {

  color: 'white',
  fontFamily: 'Special Elite',
  textAlign: 'center',
  fontSize: '2.4rem',
  padding: '.8rem 1rem .4rem 1rem',
  letterSpacing: '1px',
  background: 'none',
  border: '2px solid grey',
  transition: '.3s',

  '&:hover': {
    background: '#ffffff15'
  },

  variants: {
    active: {
      true: {
        background: '#ffffff30',
        cursor: 'default'
      }
    }
  }

});

export const ButtonEdit = styled('button', {

  position: 'fixed',
  right: 15,
  background: 'none',
  border: '1px solid transparent',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '.2rem',
  transition: '.3s',

  '&:hover': {
    borderColor: 'Yellow'
  }

});