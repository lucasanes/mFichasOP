import {Body, Button, Container, Header} from './styles'
import { useEffect, useRef, useState } from 'react';
import { Habilidade } from './Habilidade';
import { Proficiencia } from './Proficiencia';
import { useFicha } from '../../../../hooks/ficha';

export function Habilidades({data, setData}) {

  const [miniBody, setMiniBody] = useState('habilidades')

  const habilidades = data.habilidades
  const poderes = data.poderes
  const proficiencias = data.proficiencias

  const [low, setLow] = useState(false)

  useEffect(() => {
    if (innerWidth > 562) {
      setLow(false)
    } else {
      setLow(true)
    }
  }, [])

  window.addEventListener('resize', () => {
    if (innerWidth > 562) {
      setLow(false)
    } else {
      setLow(true)
    }
  })
 
  return (
    <Container>

      <Header>
        <Button active={miniBody == 'habilidades'} onClick={() => setMiniBody('habilidades')}>Habilidades</Button>
        <Button active={miniBody == 'poderes'} onClick={() => setMiniBody('poderes')}>Poderes</Button>
        <Button active={miniBody == 'proficiencias'} onClick={() => setMiniBody('proficiencias')}>Proficiências</Button>
      </Header>

      <hr />

      <Body low={low}>

        {miniBody == 'habilidades' && habilidades.map(habilidade => <Habilidade data={habilidade}/>)}

        {miniBody == 'poderes' && poderes.map(habilidade => <Habilidade data={habilidade}/>)}

        {miniBody == 'proficiencias' && proficiencias.map(proficiencia => <Proficiencia data={proficiencia}/>)}

      </Body>

    </Container>
  );
}