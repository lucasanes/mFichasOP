import {Body, Button, Container, Header} from './styles'
import { useEffect, useRef, useState } from 'react';
import { Ritual } from './Ritual';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalCreateRitual } from './Ritual/ModalCreateRitual';
import { ButtonCreateHeader } from '../../../../components/ButtonCreateHeader'

export function Rituais({data, setData}) {

  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false)
 
  return (
    <Container>

      <Modal isOpen={modalCreateIsOpen} setClose={() => setModalCreateIsOpen(false)}>
        <ModalCreateRitual setData={setData} setModalClose={() => setModalCreateIsOpen(false)}/>
      </Modal>

      <Header>
        <h1>Rituais</h1>
        <ButtonCreateHeader onClick={() => setModalCreateIsOpen(true)}/>
      </Header>

      <hr />

      <Body>

        {data.map(ritual => <Ritual key={ritual.id} data={ritual} setData={setData} lista={data}/>)}
       
      </Body>

    </Container>
  );
}