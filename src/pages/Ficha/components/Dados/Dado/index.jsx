import { useEffect, useState } from 'react'
import {Button, Container} from './styles'
import { FaDiceD20 } from 'react-icons/fa'
import {Modal} from '../../../../../components/Modals/Modal'
import {ModalDadoRolado} from '../../../../../components/Modals/ModalDadoRolado'

export function Dado({data}) {

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setClose={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado data={{nome: data.nome, valor: data.dado, isDano: data.dano == 0 ? false : true}} setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen}/>
      </Modal>

      <Button isDano={data.dano == 0 ? 'false' : 'true'} onClick={() => setModalDadoRoladoIsOpen(true)}><FaDiceD20 size={35} color={data.dano == 0 ? '#00fff2' : '#ff4b4b'}/>{data.nome} <br /> <span>{data.dado}</span></Button>
      
    </Container>
  );
}