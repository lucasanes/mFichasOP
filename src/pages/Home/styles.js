import {styled} from '../../stitches.config';
import bg from '../../assets/imgs/bg.webp'

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflowX: "hidden",
  overflowY: 'auto',

});