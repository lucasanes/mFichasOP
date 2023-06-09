import {Body, Container, Header} from './styles'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { ButtonCreateHeader } from '../../../../components/ButtonCreateHeader';
import { Modal } from '../../../../components/Modals/Modal';
import { Monstro } from './Monstro';
import { ModalCreateMonstros } from './ModalCreateMonstros';

export function Monstros({data, setData}) {

  const [modalCreateMonstroIsOpen, setModalCreateMonstroIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalCreateMonstroIsOpen} setClose={() => setModalCreateMonstroIsOpen(false)}>
        <ModalCreateMonstros setData={setData} setModalClose={() => setModalCreateMonstroIsOpen(false)} />
      </Modal>

      <Header>
        <h1>Monstros</h1>
        <ButtonCreateHeader onClick={() => setModalCreateMonstroIsOpen(true)}/>
      </Header>

      <hr />

      <Body>
        {data.map((monstro) => <Monstro key={monstro.token} data={monstro} lista={data} setData={setData}/>)}
      </Body>
    </Container>
  );
}