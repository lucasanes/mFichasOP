import {styled} from '../../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  border: '2px solid #bbbbbbff',
  borderRadius: '.7rem',

});

export const Header = styled('div', {

  borderBottom: '2px solid #bbbbbbff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '.5rem 1.5rem',

  h1: {
    color: '#0050a6',
    fontSize: '2.2rem',
    fontFamily: 'Special Elite',
    textTransform: 'capitalize',
    marginTop: '.7rem'
  }

});

export const HeaderButtons = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  a: {
    background: 'none',
    border: '1px solid transparent',
    padding: '.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    transition: '.3s',
    width: '28px',
    height: '28px'
  },

  button: {
    width: '28px',
    height: '28px',
    background: 'none',
    border: '1px solid transparent',
    paddingRight: '.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    transition: '.3s',
  },

  'button:hover': {
    border: '1px solid #c31437'
  },

  '.padding': {
    padding: '.25rem'
  },

  'a:hover': {
    border: '1px solid cyan'
  }

});

export const MiniHeader = styled('div', {

  padding: '.7rem 1rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  borderBottom: '2px solid #bbbbbbff',

});

export const Button = styled('button', {

  background: 'none',
  border: '2px solid #bbbbbbff',
  color: '#fff',
  width: '20rem',
  padding: '.3rem 0',
  transition: '.3s',

  '&:hover': {
    background: '#bbbbbb50'
  },

  variants: {
    active: {
      true: {
        background: '#bbbbbb40'
      }
    }
  }

});

export const Card = styled('div', {

  width: 'fit-content',
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'center',
  color: 'grey',
  fontFamily: 'El Messiri',
  border: '2px solid #bbbbbbff',
  padding: '0.5rem 1rem 0.2rem 1rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  label: {
    fontWeight: 700
  },

  span: {
    paddingLeft: '.5rem',
    whiteSpace: 'nowrap',
  }


});

export const Body = styled('div', {

  height: 0,
  overflow: 'hidden',
  padding: '0 1.5rem'
});

export const Body1 = styled('div', {

  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  variants: {
    active: {
      false: {
        display: 'none'
      }
    }
  }

});

export const Body2 = styled('div', {

  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '.span': {
    color: '#fff',
    border: '1px solid #bbbbbbff',
    width: 'fit-content',
    padding: '.5rem .7rem .3rem .7rem',
    fontFamily: 'El Messiri',
    borderRadius: '.5rem',
    margin: '0 auto',
    marginTop: '.5rem'
  },

  variants: {
    active: {
      false: {
        display: 'none'
      }
    }
  }

});

export const Body3 = styled('div', {

  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  h1: {
    color: 'white',
    textAlign: 'center'
  },

   h2: {
    marginTop: '1.5rem',
    color: 'white',
    textAlign: 'center'
  },

  span: {
    color: '#fff',
    border: '1px solid #bbbbbbff',
    width: 'fit-content',
    padding: '.5rem .7rem .3rem .7rem',
    fontFamily: 'El Messiri',
    borderRadius: '.5rem'
  },

  variants: {
    active: {
      false: {
        display: 'none'
      }
    }
  }

});

export const Body4 = styled('div', {

  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  h1: {
    color: 'white',
    textAlign: 'center'
  },

   h2: {
    marginTop: '1.5rem',
    color: 'white',
    textAlign: 'center'
  },

  span: {
    color: '#fff',
    border: '1px solid #bbbbbbff',
    width: 'fit-content',
    padding: '.5rem .7rem .3rem .7rem',
    fontFamily: 'El Messiri',
    borderRadius: '.5rem'
  },

  variants: {
    active: {
      false: {
        display: 'none'
      }
    }
  }

});

export const Flex = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  textTransform: 'capitalize'

});