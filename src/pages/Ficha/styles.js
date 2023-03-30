import {styled} from '../../stitches.config';
import Loading from '../../assets/imgs/Loading2.gif'

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  overflowX: "hidden",
  overflowY: 'auto',
  backgroundColor: 'rgb(25,25,25)',
  
});

export const Body = styled('div', {

  width: '100%',
  height: '100%',
  padding: '2rem',

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