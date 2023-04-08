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
 
  return (
    <Container>

      <Header>
        <Button hover={miniBody == 'habilidades'} onClick={() => setMiniBody('habilidades')}>Habs.</Button>
        <Button hover={miniBody == 'proficiencias'} onClick={() => setMiniBody('proficiencias')}>Profs.</Button>
      </Header>

      <hr />

      <Body>

        {miniBody == 'habilidades' && habilidades.map(habilidade => <Habilidade key={habilidade.id} lista={habilidades} data={habilidade} setData={sethabilidades}/>)}

        {miniBody == 'habilidades' && poderes.map(poder => <Poder key={poder.id} lista={poderes} data={poder} setData={setpoderes}/>)}

        {miniBody == 'proficiencias' && proficiencias.map(proficiencia => <Proficiencia key={proficiencia.id} lista={proficiencias} data={proficiencia} setData={setproficiencias}/>)}

      </Body>

    </Container>
  );
}