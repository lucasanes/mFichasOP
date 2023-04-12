import { ButtonDeleteComponent } from '../../../../../components/ButtonDeleteComponent';
import { ButtonEditComponent } from '../../../../../components/ButtonEditComponent';
import { Header } from '../styles';
import { ModalEditProficiencia } from './ModalEditProficiencia';
import {Container, Header1} from './styles'
import {Modal} from '../../.././../../components/Modals/Modal'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../../hooks/auth';
import { api } from '../../../../../services/api';

export function Proficiencia({data, lista, setData, ...rest}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  async function itemDelete() {

    const response = await api.post('/', {
      query: 'fichas_info_delete',
      sessid: token,
      token: id,
      dados: {
        proficiencias: [{
          id: data.id
        }]
      }
    })

    if (response.data.success) {
      const proficienciasAtualizadas = lista.filter(proficiencia => proficiencia.id != data.id)
      setData(proficienciasAtualizadas)
    }

  }

  return (
    <Container {...rest}>

      <Modal isOpen={modalEditIsOpen} setClose={() => setModalEditIsOpen(false)}>
        <ModalEditProficiencia data={data} lista={lista} setModalClose={() => setModalEditIsOpen(false)}/>
      </Modal>

      <Header1>
        <span>{data.nome}</span>
        <div>
          <ButtonEditComponent onClick={() => setModalEditIsOpen(true)} size={18}/>
          <ButtonDeleteComponent handleExecute={itemDelete} size={18}/>
        </div>
      </Header1>
    </Container>
  );
}