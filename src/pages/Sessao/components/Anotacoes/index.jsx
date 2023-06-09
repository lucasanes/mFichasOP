import {Body, Container, Header} from './styles'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { ButtonCreateHeader } from '../../../../components/ButtonCreateHeader';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalCreateAnotacao } from './ModalCreateAnotacao';
import { Anotacao } from './Anotacao';

export function Anotacoes({data, setData}) {

  const [modalCreateAnotacao, setModalCreateAnotacao] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalCreateAnotacao} setClose={() => setModalCreateAnotacao(false)}>
        <ModalCreateAnotacao setData={setData} setModalClose={() => setModalCreateAnotacao(false)}/>
      </Modal>

      <Header>
        <h1>Anotações</h1>
        <ButtonCreateHeader onClick={() => {

          if (data.length < 5) {
            setModalCreateAnotacao(true)
          } else {
            toast.error('Você já excedeu o limite de anotações')
          }
        }}/>
      </Header>

      <hr />

      <Body>
        {data.map((anotacao) => <Anotacao key={anotacao.token} lista={data} setData={setData} data={anotacao}/>)}
      </Body>
    </Container>
  );
}