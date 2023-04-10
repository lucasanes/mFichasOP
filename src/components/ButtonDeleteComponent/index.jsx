import { useFicha } from '../../hooks/ficha';
import {Container} from './styles'
import {FiTrash} from 'react-icons/fi'
import {Modal} from '../../components/Modals/Modal'
import {ModalDeleteConfirm} from '../../components/Modals/ModalDeleteConfirm'
import { useState } from 'react';

export function ButtonDeleteComponent({handleExecute, text = false, size = 22, ...rest}) {

  const {blockPerm} = useFicha()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <Container semperm={blockPerm.toString()}>

      <Modal isOpen={modalIsOpen} setClose={() => setModalIsOpen(false)}>
        <ModalDeleteConfirm setModalClose={() => setModalIsOpen(false)} handleExecute={handleExecute} />
      </Modal>

      <button onClick={() => setModalIsOpen(true)} disabled={blockPerm} {...rest}>{text && 'Deletar'} <FiTrash color='red' size={size}/></button>
    </Container>
  );
}