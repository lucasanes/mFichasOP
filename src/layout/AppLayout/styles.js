import { styled } from '../../stitches.config';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
})

export const ContentWrapper = styled('main', {
  width: '100%',
  marginTop: '6rem',
  position: 'relative',

  variants: {
    auth: {
      true: {
        marginBottom: '8rem'
      },
      trueficha: {
        height: 'calc(100% - 120px)',
      },
      false: {
        height: 'calc(100% - 60px)',
      },
    }
  }

})