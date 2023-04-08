import {Body, Button, Container, Header} from './styles'
import { useEffect, useRef, useState } from 'react';
import { Habilidade } from './Habilidade';
import { Proficiencia } from './Proficiencia';
import { Poder } from './Poder';
import { useFicha } from '../../../../hooks/ficha';

export function Habilidades({data}) {

  const [miniBody, setMiniBody] = useState('habilidades')

  const [habilidades, sethabilidades] = useState(data.habilidades)
  const [poderes, setpoderes] = useState(data.poderes)
  const [proficiencias, setproficiencias] = useState(data.proficiencias ? data.proficiencias : [])

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
        <Button hover={miniBody == 'habilidades'} onClick={() => setMiniBody('habilidades')}>Habilidades</Button>
        <Button hover={miniBody == 'poderes'} onClick={() => setMiniBody('poderes')}>Poderes</Button>
        <Button hover={miniBody == 'proficiencias'} onClick={() => setMiniBody('proficiencias')}>Proficiências</Button>
      </Header>

      <hr />

      <Body low={low}>

        {miniBody == 'habilidades' && habilidades.map(habilidade => <Habilidade key={habilidade.id} lista={habilidades} data={habilidade} setData={sethabilidades}/>)}

        {miniBody == 'poderes' && poderes.map(poder => <Poder key={poder.id} lista={poderes} data={poder} setData={setpoderes}/>)}

        {miniBody == 'proficiencias' && proficiencias.map(proficiencia => <Proficiencia key={proficiencia.id} lista={proficiencias} data={proficiencia} setData={setproficiencias}/>)}

      </Body>

    </Container>
  );
}