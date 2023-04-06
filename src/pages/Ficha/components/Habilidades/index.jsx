import {Body, Button, Container, Header} from './styles'
import { ButtonEdit } from '../../../../components/ButtonEdit';
import { useEffect, useRef, useState } from 'react';
import { Habilidade } from './Habilidade';
import { Proficiencia } from './Proficiencia';

export function Habilidades({data, setData}) {

  const [miniBody, setMiniBody] = useState('habilidades')

  const habilidades = data.habilidades
  const poderes = data.poderes
  const proficiencias = data.proficiencias

  const headerRef = useRef(null)
  const bodyRef = useRef(null)

  useEffect(() => {
    const content1 = headerRef.current
    const content2 = bodyRef.current
    
    content2.style.height = `calc(100% - ${content1.scrollHeight}px)`;  
  }, [])

  window.addEventListener('resize', () => {
    const content1 = headerRef.current
    const content2 = bodyRef.current
    
    content2.style.height = `calc(100% - ${content1.scrollHeight}px)`;  
  })
 
  return (
    <Container>

      <Header ref={headerRef}>
        <Button active={miniBody == 'habilidades'} onClick={() => setMiniBody('habilidades')}>Habilidades</Button>
        <Button active={miniBody == 'poderes'} onClick={() => setMiniBody('poderes')}>Poderes</Button>
        <Button active={miniBody == 'proficiencias'} onClick={() => setMiniBody('proficiencias')}>Proficiências</Button>
      </Header>

      <hr />

      <Body ref={bodyRef}>

        {miniBody == 'habilidades' && habilidades.map(habilidade => <Habilidade data={habilidade}/>)}

        {miniBody == 'poderes' && poderes.map(habilidade => <Habilidade data={habilidade}/>)}

        {miniBody == 'proficiencias' && proficiencias.map(proficiencia => <Proficiencia data={proficiencia}/>)}

      </Body>

    </Container>
  );
}