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
    marginRight: '.7rem',
})

export const Mid = styled('div', {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: '30%',
    gap: '12.8rem',
    marginRight: '.7rem'
})

export const Bot = styled('div', {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: '68%',
    gap: '7.4rem',
    marginRight: '.7rem'
})

export const Img = styled('img', {
    width: '30rem'
})