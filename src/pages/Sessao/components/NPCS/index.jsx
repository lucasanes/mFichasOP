import {Body, Container, Header} from './styles'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { ButtonCreateHeader } from '../../../../components/ButtonCreateHeader';
import { Modal } from '../../../../components/Modals/Modal';
import { NPC } from './NPC';
import { ModalCreateNPC } from './ModalCreateNPCS';

export function NPCS({data, setData}) {

  const [modalCreateNPCIsOpen, setModalCreateNPCIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalCreateNPCIsOpen} setClose={() => setModalCreateNPCIsOpen(false)}>
        <ModalCreateNPC setModalClose={() => setModalCreateNPCIsOpen(false)} setData={setData}/>
      </Modal>

      <Header>
        <h1>NPCS</h1>
        <ButtonCreateHeader onClick={() => setModalCreateNPCIsOpen(true)}/>
      </Header>

      <hr />

      <Body>
        {data.map((npc) => <NPC key={npc.token} lista={data} setData={setData} data={npc}/>)}
      </Body>
    </Container>
  );
}