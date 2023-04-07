import { styled } from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

})

export const Top = styled('div', {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    top: '10%',
    marginRight: '.2rem',
})

export const Mid = styled('div', {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: '30%',
    gap: '16.2rem',
    marginRight: '.1rem'
})

export const Bot = styled('div', {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: '67.5%',
    gap: '10.6rem',
    marginRight: '.4rem'
})

export const Img = styled('img', {
    width: '30rem'
})