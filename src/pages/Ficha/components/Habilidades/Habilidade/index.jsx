import { useRef, useState } from 'react';
import { ButtonDeleteComponent } from '../../../../../components/ButtonDeleteComponent';
import { ButtonEditComponent } from '../../../../../components/ButtonEditComponent';
import {Container, Header1, Button, Body} from './styles'
import { IoIosArrowForward } from 'react-icons/io'
import {Modal} from '../../../../../components/Modals/Modal'
import { ModalEditHabilidade } from './ModalEditHabilidade';
import { api } from '../../../../../services/api';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../../hooks/auth';

export function Habilidade({data, lista, setData}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [hover, sethover] = useState(false)
  const contentRef = useRef(null)

  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  async function itemDelete() {

    const response = await api.post('/', {
      query: 'fichas_info_delete',
      sessid: token,
      token: id,
      dados: {
        habilidades: [{
          id: data.id
        }]
      }
    })

    if (response.data.success) {
      const habilidadesAtualizadas = lista.filter(habilidade => habilidade.id != data.id)
      setData(habilidadesAtualizadas)
    }

  }

  function slideToggle(ref) {
    
    const content = ref.current;
  
    if (hover) {
      content.style.transition = "height 0.3s ease-out";
      content.style.height = "0";
      sethover(false);
    } else {
      content.style.transition = "height 0.3s ease-in";
      content.style.height = `${content.scrollHeight}px`;
      sethover(true);
    }
  }

  return (
    <Container>

      <Modal isOpen={modalEditIsOpen} setClose={() => setModalEditIsOpen(false)}>
        <ModalEditHabilidade lista={lista} data={data} setModalClose={() => setModalEditIsOpen(false)} />
      </Modal>

      <Header1>
        <Button hover={hover} onClick={() => {slideToggle(contentRef)}}><IoIosArrowForward color='white' size={20}/>{data.nome}</Button>
        <div>
          <ButtonEditComponent onClick={() => setModalEditIsOpen(true)} segundo size={18}/>
          <ButtonDeleteComponent handleExecute={itemDelete} size={18}/>
        </div>
      </Header1>
      <hr />
      <Body ref={contentRef}>
        <p>{data.descricao}</p>
      </Body>
    </Container>
  );
}