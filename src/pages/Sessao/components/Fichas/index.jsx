import {Body, Container, Header} from './styles'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { ButtonCreateHeader } from '../../../../components/ButtonCreateHeader';
import { Ficha } from './Ficha';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalInvite } from './ModalInvite';

export function Fichas({data}) {

  const [modalInvitePlayerIsOpen, setModalInvitePlayerIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalInvitePlayerIsOpen} setClose={() => setModalInvitePlayerIsOpen(false)}>
        <ModalInvite setModalClose={() => setModalInvitePlayerIsOpen(false)}/>
      </Modal>

      <Header>
        <h1>Fichas</h1>
        <ButtonCreateHeader onClick={() => setModalInvitePlayerIsOpen(true)}/>
      </Header>

      <hr />

      <Body>
        {data.map((ficha) => <Ficha key={ficha.token} data={ficha}/>)}
      </Body>
    </Container>
  );
}