import {Body, Body2, Button, Container, Header} from './styles'
import {InputStop} from '../../../../components/InputStop'
import { useEffect, useRef, useState } from 'react';
import { ButtonEditHeader } from '../../../../components/ButtonEditHeader';
import { TextAreaStop } from '../../../../components/TextAreaStop';
import {Modal} from '../../../../components/Modals/Modal'
import { ModalEditPrincipal } from './ModalEditPrincipal';
import { ModalEditPersonagem } from './ModalEditPersonagem';
import { useFicha } from '../../../../hooks/ficha';

export function Principal({data, setData}) {

  const [miniBody, setMiniBody] = useState('infos')
  const [low, setLow] = useState(false)

  const {setBody} = useFicha()

  const infos = data.infos
  const personagem = data.personagem

  const [modalEditPrincipalIsOpen, setModalEditPrincipalIsOpen] = useState(false)
  const [modalEditPersonagemIsOpen, setModalEditPersonagemIsOpen] = useState(false)

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

      <Modal isOpen={modalEditPrincipalIsOpen} setClose={() => setModalEditPrincipalIsOpen(false)}>
        <ModalEditPrincipal data={infos} setData={setData}  setModalClose={() => setModalEditPrincipalIsOpen(false)}/>
      </Modal>

      <Modal isOpen={modalEditPersonagemIsOpen} setClose={() => setModalEditPersonagemIsOpen(false)}>
        <ModalEditPersonagem data={personagem} setData={setData}  setModalClose={() => setModalEditPersonagemIsOpen(false)}/>
      </Modal>

      <Header>
        <Button hover={miniBody == 'infos'} onClick={() => setMiniBody('infos')}>Informações</Button>
        <Button hover={miniBody == 'personagem'} onClick={() => setMiniBody('personagem')}>Personagem</Button>
        <ButtonEditHeader onClick={() => {if (miniBody == 'infos') {setModalEditPrincipalIsOpen(true)} else {setModalEditPersonagemIsOpen(true)}}}/>
      </Header>

      <hr />
        
        {miniBody == 'infos' ?
          <Body id='slider' low={low}>
            <InputStop label={'Nome'} valor={infos.nome}/>
            <InputStop label={'Jogador'} valor={infos.usuario}/>
            <InputStop label={'Idade'} valor={infos.idade}/>
            <InputStop label={'Nacionalidade'} valor={infos.nacionalidade}/>
            <InputStop label={'Origem'} valor={infos.origem ? infos.origem : 'Nenhuma'}/>
            <InputStop label={'NEX'} valor={infos.nex}/>
            <InputStop label={'Classe'} valor={infos.classe ? infos.classe : 'Nenhuma'}/>
            <InputStop label={'Trilha'} valor={infos.trilha ? infos.trilha : 'Nenhuma'}/>
            <InputStop label={'Patente'} valor={`${infos.patente ? infos.patente : 'Nenhuma'} - ${infos.prestigio}`}/>
            <InputStop label={'Deslocamento'} valor={infos.deslocamento}/>
            <InputStop label={'PE/Rod'} valor={infos.peprod}/>
            {infos.afinidade && <InputStop label={'Afinidade'} valor={infos.afinidade}/>}
          </Body>
        :
          <Body2 id='slider' low={low}>
            <TextAreaStop disabled={true} label={'História'} valor={personagem.historia}/>
            <TextAreaStop disabled={true} label={'Aparência'} valor={personagem.aparencia}/>
            <TextAreaStop disabled={true} label={'Primeiro Encontro Paranormal'} valor={personagem.pep}/>
            <TextAreaStop disabled={true} label={'Doenças, Fobias e Manias'} valor={personagem.dfm}/>
            <TextAreaStop disabled={true} label={'Favoritos'} valor={personagem.favoritos}/>
            <TextAreaStop disabled={true} label={'Personalidade'} valor={personagem.personalidade}/>
            <TextAreaStop disabled={true} label={'Pior Pesadelo'} valor={personagem.pesadelo}/>
            <TextAreaStop disabled={true} label={'Anotações'} valor={personagem.anotacoes}/>
          </Body2>
        }
      

      
    </Container>
  );
}