import { useRef, useState } from 'react';
import { ButtonDeleteComponent } from '../../../../../components/ButtonDeleteComponent';
import { ButtonEditComponent } from '../../../../../components/ButtonEditComponent';
import {Container, Header1, Button, Body} from './styles'
import { IoIosArrowForward } from 'react-icons/io'
import {InputStop} from './InputStop'
import {Modal} from '../../../../../components/Modals/Modal'
import {ModalDadoRolado} from '../../../../../components/Modals/ModalDadoRolado'
import { api } from '../../../../../services/api';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../../hooks/auth';
import { ModalEditItem } from './ModalEditItem';

export function Item({lista, data, setData, ...rest}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  const [hover, sethover] = useState(false)
  const contentRef = useRef(null)

  const foto = new Image();
  foto.src = data.foto;

  let timeout;

  function iniciador(ref) {
    timeout = setTimeout(doSomething(ref), 300);
  }
  
  function finalizador() {
    clearTimeout(timeout);
  }
  
  function doSomething(ref) {
    const content = ref.current;
    content.style.height = `${content.scrollHeight}px`;
  }

  function slideToggle(ref) {
    
    const content = ref.current;
    
    finalizador()
  
    if (hover) {
      content.style.transition = "0.3s ease-out";
      content.style.height = "0";
      sethover(false);
    } else {
      content.style.transition = "0.3s ease-in";
      content.style.height = `${content.scrollHeight}px`;
      iniciador(ref)
      sethover(true);
    }
  }

  async function itemDelete() {

    const response = await api.post('/', {
      query: 'fichas_info_delete',
      sessid: token,
      token: id,
      dados: {
        itens: [{
          id: data.id
        }]
      }
    })

    if (response.data.success) {
      const itensAtualizados = lista.filter(item => item.id != data.id)
      setData(itensAtualizados)
    }

  }

  window.addEventListener('resize', () => {

    const content = contentRef.current;
    
    if (content) {
      if (content.style.height != '0px' && content.style.height != '') {
        content.style.transition = "height 0.3s ease-in";
        content.style.height = `${content.scrollHeight}px`;
      }
    }

  })

  return (
    <Container {...rest}>

      <Modal isOpen={modalEditIsOpen} setClose={() => setModalEditIsOpen(false)}>
        <ModalEditItem data={data} lista={lista} setModalClose={() => setModalEditIsOpen(false)}/>
      </Modal>

      <Header1>
        <Button hover={hover.toString()} onClick={() => {slideToggle(contentRef)}}><IoIosArrowForward color='white' size={20}/>{data.nome} -  {data.quantidade}x</Button>
        <div>
          <ButtonEditComponent onClick={() => setModalEditIsOpen(true)} segundo size={18}/>
          <ButtonDeleteComponent handleExecute={itemDelete} size={18}/>
        </div>
      </Header1>

      <hr/>
      
      <Body ishover={hover.toString()} ref={contentRef}>

        <div className='infos'>
          <InputStop label={'Categoria:'} valor={data.prestigio}/>
          <InputStop label={'Espaços:'} valor={data.espaco}/>
        </div>

        <p>{data.descricao ? data.descricao : 'Sem descrição...'}</p>

        <img 
        width={'75%'} src={foto.src}/>
      </Body>
    </Container>
  );
}