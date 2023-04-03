import { styled } from '../../stitches.config';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flex: 1
})

export const ContentWrapper = styled('main', {
  width: '100%',
  marginTop: '6rem',

  variants: {
    auth: {
      true: {
        height: 'calc(100% - 140px)',
        marginBottom: '8rem'
      },
      trueficha: {
        height: 'calc(100% - 120px)',
        marginBottom: '6rem'
      },
      false: {
        height: '100%',
        marginBottom: '0rem'
      },
    }
  }

})