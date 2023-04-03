import { styled } from '../../stitches.config';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
})

export const ContentWrapper = styled('main', {
  width: '100%',
  marginTop: '6rem',

  variants: {
    auth: {
      true: {
        marginBottom: '8rem'
      },
      trueficha: {
        marginBottom: '6rem'
      },
      false: {
        marginBottom: '0rem'
      },
    }
  }

})