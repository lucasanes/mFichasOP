import { styled } from '../../stitches.config';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  position: 'fixed'
})

export const ContentWrapper = styled('main', {
  width: '100%',
  marginTop: '6rem',

  variants: {
    auth: {
      true: {
        height: 'calc(100% - 140px)',
      },
      false: {
        height: '100%'
      }
    }
  }

})