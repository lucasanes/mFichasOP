import { styled } from '../../stitches.config';

export const Container = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',

  '.container': {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

  }

})

export const ContainerInput = styled('div', {
  width: '100%',
  overflow: 'hidden',
  height: '5rem',
  border: "2px solid #ffffff90",
  borderRadius: '1rem',
  background: 'transparent',
  display: 'flex',
  zIndex: 3
})

export const InputA = styled('input', {
  width: '100%',
  height: 'auto',
  wordWrap: 'break-all',
  fontSize: "2rem",
  padding: "1rem",
  background: "transparent",
  border: 'none',
  outline: 'solid 0.2rem #ffffff90',
  color: 'transparent',
  caretColor: 'white',
})

export const InputB = styled('label', {
  minWidth: '11rem',
  height: 'auto',
  fontSize: "2rem",
  background: "transparent",
  display: 'flex',
  position: 'relative',
  transition: '.2s',

  '&:hover': {
    cursor: 'pointer',
    background: '#ffffff25'
  },

  '.msg': {
    width: '100%',
    position: 'absolute',
    fontSize: '1.5rem',
    top: 5,
    left: 2,
    fontFamily: 'Arial',
    fontWeight: 100,
  },

  variants: {
    progresso: {
      ni: {
        '.msg': {
          top: 14
        }
      }
    }
  }
})

export const SpanMsg = styled('span', {

  color: '#ffffff90',

  variants: {
    msg: {
      erro: {
        color: '#ff3a3a'
      },
      enviado: {
        color: '#00ff73'
      }
    }
  }

});

export const ProgressBar = styled('span', {
  width: '85%',
  position: 'absolute',
  left: 10,
  top: 27,
  height: '1.2rem',
  borderRadius: '10px',
  backgroundColor: '#3a3a3aff',
  overflow: 'hidden',
  display: 'flex',

  variants: {
    progresso: {
      ni: {
        display: 'none'
      },
    }
  }

});

export const Progress = styled('span', {

  position: 'absolute',
  left: 0,
  top: 0,
  height: '1.2rem',
  borderRadius: '10px 0 0 10px',
  display: 'flex',
  zIndex: 3,
  transition: '0.3s',

  variants: {
    progresso: {
      i: {
        backgroundColor: '#0083e0',
      },

      f: {
        backgroundColor: '#00ff73',
      }
    }
  }

});

export const LabelContainer = styled('label', {

  position: 'absolute',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  bottom: '22%',
  left: 15,
  zIndex: 1,
  fontSize: '2.4rem',
  fontWeight: 100,
  fontFamily: 'arial',
  backgroundColor: 'rgb(20, 20, 20)',
  fontFamily: 'Cormorant Garamond',
  color: '#ffffff90',
  transition: '0.3s',

  variants: {
    hover: {
      true: {
        fontSize: '2rem',
        transform: 'translateX(1rem) translateY(-2.7rem)',
        padding: '0px 10px',
        zIndex: 4
      }
    },
  },

})