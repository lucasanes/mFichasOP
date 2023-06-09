import { styled } from '../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginBottom: '1rem',

  variants: {
    semperm: {
      true: {
        'button': {
          display: 'none'
        },
      }
    }
  }
})

export const Botoes = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0rem 2rem',

  span: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '2rem',
    padding: '.5rem .5rem 0rem .5rem',
    fontWeight: 100
  },

  button: {
    margin: '.3rem',
    padding: '.8rem .5rem .4rem .5rem',
    fontFamily: 'Special Elite',
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    gap: '0rem',
    transition: '.3s',
    color: 'White',
    border: '1px solid transparent',
    fontSize: '1.4rem',
    borderRadius: '7px',
    fontWeight: 100,

    svg: {
      position: 'relative',
      bottom: 2
    }
  },

  'button:hover': {
    border: '1px solid white'
  },

  '@md2': {
    padding: '0rem',
    button: {
      margin: '.5rem .2rem',
    }
  }
})

export const Esquerda = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    marginLeft: '-.4rem'
  }
})

export const Direita = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    marginRight: '-.4rem'
  }
})


export const BarrinhaDiv = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProgressBar = styled('div', {

  width: '100%',
  height: '1.5rem',
  borderRadius: '10px',
  backgroundColor: '#ffffff14',
  overflow: 'hidden',
  display: 'flex',

})

export const Progress = styled('div', {

  height: '1.5rem',
  borderRadius: '10px 0 0 10px',
  display: 'flex',
  transition: '0.3s',

  variants: {
    color: {
      red: {
        backgroundColor: '#9a0000',
      },
      yellow: {
        backgroundColor: '#ffbf00b5',
      },
      aqua: {
        backgroundColor: '#005795',
      },
      orange: {
        backgroundColor: '#00ff8cff'
      }
    }
  }

})