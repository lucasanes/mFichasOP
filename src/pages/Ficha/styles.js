import {styled} from '../../stitches.config';
import Loading from '../../assets/imgs/Loading2.gif'

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  overflowX: "hidden",
  overflowY: 'auto',
  backgroundColor: 'rgb(20,20,20)',

  variants: {
    isLoading: {
      true: {
        backgroundImage: `url(${Loading})`,
        backgroundSize: '20rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
    }
  }
  
});

export const Body = styled('div', {

  width: '100%',
  height: '100%',

  variants: {
    isLoading: {
      true: {
        opacity: 0
      }
    }
  }

});