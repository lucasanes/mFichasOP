import { styled } from '../../stitches.config';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
})

export const ContentWrapper = styled('main', {
  width: '100%',

  variants: {
    auth: {
      true: {
        paddingBottom: '8rem'
      },
      trueficha: {
        paddingBottom: '6rem'
      },
      false: {
        paddingBottom: '0 rem'
      },
    }
  }

})