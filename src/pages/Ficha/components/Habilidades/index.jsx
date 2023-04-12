import {Body, Button, Container, Header} from './styles'
import { useEffect, useRef, useState } from 'react';
import { Habilidade } from './Habilidade';
import { Proficiencia } from './Proficiencia';
import { Poder } from './Poder';
import { ButtonCreateHeader } from '../../../../components/ButtonCreateHeader'
import { Modal } from '../../../../components/Modals/Modal';
import {ModalCreateHabilidade } from './ModalCreateHabilidade';
import { ModalCreateProficiencia } from './ModalCreateProficiencia';

export function Habilidades({data}) {

  const [miniBody, setMiniBody] = useState('habilidades')

  const [modalCreateHabilidadeIsOpen, setModalCreateHabilidadeIsOpen] = useState(false)
  const [modalCreateProficienciaIsOpen, setModalCreateProficienciaIsOpen] = useState(false)

  const [habilidades, sethabilidades] = useState(data.habilidades ? data.habilidades : [])
  const [poderes, setpoderes] = useState(data.poderes ? data.poderes : [])
  const [proficiencias, setproficiencias] = useState(data.proficiencias ? data.proficiencias : [])
 
  return (
    <Container>

      <Modal isOpen={modalCreateHabilidadeIsOpen} setClose={() => setModalCreateHabilidadeIsOpen(false)}>
        <ModalCreateHabilidade setDataHabilidade={sethabilidades} setDataPoder={setpoderes} setModalClose={() => setModalCreateHabilidadeIsOpen(false)}/>
      </Modal>

      <Modal isOpen={modalCreateProficienciaIsOpen} setClose={() => setModalCreateHabilidadeIsOpen(false)}>
        <ModalCreateProficiencia setData={setproficiencias} setModalClose={() => setModalCreateProficienciaIsOpen(false)}/>
      </Modal>

      <Header>
        <Button hover={miniBody == 'habilidades'} onClick={() => setMiniBody('habilidades')}>Habs.</Button>
        <Button hover={miniBody == 'proficiencias'} onClick={() => setMiniBody('proficiencias')}>Profs.</Button>
        <ButtonCreateHeader onClick={() => {miniBody == 'habilidades' ? setModalCreateHabilidadeIsOpen(true) : setModalCreateProficienciaIsOpen(true)}} />
      </Header>

      <hr />

      <Body>

        {habilidades.map(habilidade => <Habilidade style={{display: miniBody != 'habilidades' && 'none'}} key={habilidade.id} lista={habilidades} data={habilidade} setData={sethabilidades}/>)}

        {poderes.map(poder => <Poder style={{display: miniBody != 'habilidades' && 'none'}} key={poder.id} lista={poderes} data={poder} setData={setpoderes}/>)}

        {proficiencias.map(proficiencia => <Proficiencia style={{display: miniBody != 'proficiencias' && 'none'}} key={proficiencia.id} lista={proficiencias} data={proficiencia} setData={setproficiencias}/>)}

      </Body>

    </Container>
  );
}