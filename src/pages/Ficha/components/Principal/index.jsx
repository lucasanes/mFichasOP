import {Body, Button, Container, Header} from './styles'
import {InputStop} from '../../../../components/InputStop'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import { ButtonEditHeader } from '../../../../components/ButtonEditHeader';
import {useFicha} from '../../../../hooks/ficha'

export function Principal({data}) {

  const [miniBody, setMiniBody] = useState('infos')
  const [low, setLow] = useState(false)

  useEffect(() => {
    if (innerWidth > 485) {
      setLow(false)
    } else {
      setLow(true)
    }
  }, [])

  window.addEventListener('resize', () => {
    if (innerWidth > 485) {
      setLow(false)
    } else {
      setLow(true)
    }
  })

  return (
    <Container>

      <Header>
        <Button focus={miniBody == 'infos'} onClick={() => setMiniBody('infos')}>Informações</Button>
        <Button focus={miniBody == 'personagem'} onClick={() => setMiniBody('personagem')}>Personagem</Button>
        <ButtonEditHeader/>
      </Header>

      <hr />
      
      <Body low={low}>
        
        {miniBody == 'infos' ? <>
          <InputStop label={'Nome'} valor={data.nome}/>
          <InputStop label={'Jogador'} valor={data.usuario}/>
          <InputStop label={'Idade'} valor={data.idade}/>
          <InputStop label={'Nacionalidade'} valor={data.nacionalidade}/>
          <InputStop label={'Origem'} valor={data.origem}/>
          <InputStop label={'NEX'} valor={data.nex}/>
          <InputStop label={'Classe'} valor={data.classe}/>
          <InputStop label={'Trilha'} valor={data.trilha}/>
          <InputStop label={'Patente'} valor={`${data.patente} - ${data.prestigio}`}/>
          <InputStop label={'Deslocamento'} valor={data.deslocamento}/>
          <InputStop label={'PE/Rod'} valor={data.peprod}/>
          {data.afinidade && <InputStop label={'Afinidade'} valor={data.afinidade}/>}

        </>:<>

        

        </>}
      </Body>

      
    </Container>
  );
}