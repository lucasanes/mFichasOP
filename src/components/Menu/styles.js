import { Link } from "react-router-dom";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
    position: 'absolute',
    height: "60px",
    width: '100%',
    textAlign: "center",
    overflow: "hidden",

    a: {
        margin: '0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
    },

    img: {
        width: '40px'
    },

    variants: {
        hover: {
            aberto: {
                height: "282px",
                zIndex: 10,
            },
            fechando: {
                height: '282px',
                zIndex: 10,
            },
            fechado: {
                height: '60px',
            }
        }
    }
});

export const Header = styled("div", {

    width: '100%',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    background: 'rgb(15,15,15)',
    borderBottom: '2px solid white',

    a: {
        margin: '0 2rem'
    },

    button: {
        color: "white",
        background: 'none',
        margin: '0 3rem',
        border: "none",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '.7rem',
        transition: '.3s'
    },

});

export const Body = styled("div", {

    height: "0px",
    background: 'rgb(15,15,15)',
    width: '100%',
    transition: '.5s',
    overflow: 'hidden',

    ul: {
        display: 'flex',
        gap: '1.5rem',
        padding: '1.8rem 3rem',
        flexDirection: "column",
        marginLeft: '-1rem',
    },

    "button:hover": {
        opacity: "0.5",
        transition: '.3s'
    },

    "a:hover": {
        opacity: "0.5",
        transition: '.3s'
    },

    variants: {
        hover: {
            aberto: {
                height: "210px",
                transition: '.5s',
            }
        },
    },

});

export const Button = styled('button', {
    background: "none",
    color: "white",
    border: "none",

    display: "flex",
    alignItems: "flex-end",
    color: 'grey',
    justifyContent: "center",
    fontSize: "1.8rem",
    gap: "1rem",
    fontFamily: 'Nerko One',
    letterSpacing: '1px',

    transition: '.3s',

});

export const ButtonLink = styled(Link, {
    background: "none",
    color: "grey",
    border: "none",
    textDecoration: 'none',
    alignItems: 'center',

    transition: '.3s',

    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "1.8rem",
    letterSpacing: '1px',
    gap: "1rem",
    fontFamily: 'Nerko One',
});

export const Line1 = styled('div', {
    width: '3rem',
    height: '2px',
    background: 'white',
    transition: '.3s',

    variants: {
        hover: {
            aberto: {
                transform: 'rotate(45deg) translate(7px, 7px)',
            }
        }
    }
})

export const Line2 = styled('div', {
    width: '3rem',
    height: '2px',
    background: 'white',
    transition: '.2s',

    variants: {
        hover: {
            aberto: {
                opacity: 0
            }
        }
    }
})

export const Line3 = styled('div', {
    width: '3rem',
    height: '2px',
    background: 'white',
    transition: '.3s',

    variants: {
        hover: {
            aberto: {
                transform: 'rotate(-45deg) translate(5px, -7px)',
            }
        }
    }
})

export const Li = styled('li', {

    display: 'flex',

    variants: {
        acerto: {
            true: {
                marginLeft: '-0.2rem'
            },
            true2: {
                marginLeft: '0.3rem'
            }
        }
    }
    

})