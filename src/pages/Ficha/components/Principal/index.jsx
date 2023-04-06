import {Body, Button, Container, Header} from './styles'
import {InputStop} from '../../../../components/InputStop'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import { ButtonEdit } from '../../../../components/ButtonEdit';

export function Principal({data}) {

  const [miniBody, setMiniBody] = useState('infos')

  const headerRef = useRef(null)
  const bodyRef = useRef(null)

  useEffect(() => {
    const content1 = headerRef.current
    const content2 = bodyRef.current
    
    content2.style = `max-height: calc(100% - ${content1.scrollHeight}px)`;  
  }, [])

  window.addEventListener('resize', () => {
    const content1 = headerRef.current
    const content2 = bodyRef.current

    content2.style = `max-height: calc(100% - ${content1.scrollHeight}px)`;  
  })

  return (
    <Container>

      <Header ref={headerRef}>
        <Button active={miniBody == 'infos'} onClick={() => setMiniBody('infos')}>Informações</Button>
        <Button active={miniBody == 'personagem'} onClick={() => setMiniBody('personagem')}>Personagem</Button>
        <ButtonEdit/>
      </Header>

      <hr />

      
      
      <Body ref={bodyRef}>
        
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