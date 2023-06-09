import { styled } from '../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const Botoes = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0rem 2rem',

  span: {
    color: 'white',
    fontFamily: 'Special Elite',
    fontSize: '1.8rem',
    padding: '0rem .5rem 0.2rem .5rem',
    fontWeight: 100
  },

})

export const BarrinhaDiv = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '0.25rem'
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
        backgroundColor: '#ffb700ed',
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