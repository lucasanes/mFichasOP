import {Body, Container, Header} from './styles'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { Dado } from './Dado';
import { useFicha } from '../../../../hooks/ficha';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalCreateDado } from './Dado/ModalCreateDado';
import { ButtonCreateHeader } from '../../../../components/ButtonCreateHeader';

export function Dados({data, setData}) {

  const {blockPerm} = useFicha()
  const [modalCreateDadoIsOpen, setModalCreateDadoIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalCreateDadoIsOpen} setClose={() => setModalCreateDadoIsOpen(false)}>
        <ModalCreateDado data={data} setData={setData} setModalClose={() => setModalCreateDadoIsOpen(false)}/>
      </Modal>

      <Header>
        <h1>Dados</h1>
        <ButtonCreateHeader onClick={() => setModalCreateDadoIsOpen(true)}/>
      </Header>

      <hr />

      {!blockPerm && <span className='span'><IoMdInformationCircleOutline color='#00ffff' size={20}/>Segure para editar</span>}

      <Body>
        {data.map(dado => <Dado data={dado} lista={data} setData={setData} key={dado.token}/>)}  
      </Body>
    </Container>
  );
}