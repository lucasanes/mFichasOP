import { useEffect, useState } from 'react'
import {Button, Container} from './styles'
import { FaDiceD20 } from 'react-icons/fa'
import {Modal} from '../../../../../components/Modals/Modal'
import {ModalDadoRolado} from '../../../../../components/Modals/ModalDadoRolado'
import {ModalEditDado} from './ModalEditDado'

export function Dado({data, lista, setData}) {

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [modalEditDadoIsOpen, setModalEditDadoIsOpen] = useState(false)

  let timeout;

  function iniciador() {
    timeout = setTimeout(doSomething, 500);
  }
  
  function finalizador() {
    clearTimeout(timeout);
  }
  
  function doSomething() {
    setModalEditDadoIsOpen(true)
  }
 
  return (
    <Container onTouchStart={iniciador} onMouseDown={iniciador} onTouchEnd={finalizador} onMouseUp={finalizador} onMouseLeave={finalizador}>

      <Modal isOpen={modalDadoRoladoIsOpen} setClose={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado data={{nome: data.nome, valor: data.dado, isDano: data.dano == 0 ? false : true}} 
        setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)}/>
      </Modal>

      <Modal isOpen={modalEditDadoIsOpen} setClose={() => setModalEditDadoIsOpen(false)}>
        <ModalEditDado data={data} setData={setData} lista={lista} setModalClose={() => setModalEditDadoIsOpen(false)}/>
      </Modal>

      <Button isDano={data.dano == 0 ? 'false' : 'true'} onClick={() => {if (!modalEditDadoIsOpen){setModalDadoRoladoIsOpen(true)}}}><FaDiceD20 size={35} color={data.dano == 0 ? '#00fff2' : '#ff4b4b'}/>{data.nome} <br /> <span>{data.dado}</span></Button>
      
    </Container>
  );
}