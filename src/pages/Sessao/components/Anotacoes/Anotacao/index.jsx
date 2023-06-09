import { useEffect, useRef, useState } from 'react';
import { ButtonDeleteComponent } from '../../../../../components/ButtonDeleteComponent';
import { ButtonEditComponent } from '../../../../../components/ButtonEditComponent';
import {Container, Header1, Button, Body} from './styles'
import { IoIosArrowForward } from 'react-icons/io'
import {Modal} from '../../../../../components/Modals/Modal'
import { api } from '../../../../../services/api';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../../hooks/auth';
import { ModalEditAnotacao } from './ModalEditAnotacao';

export function Anotacao({data, lista, setData, ...rest}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [hover, sethover] = useState(false)
  const contentRef = useRef(null)

  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  async function itemDelete() {

    const habilidadesAtualizadas = lista.filter(habilidade => habilidade.id != data.id)
    setData(habilidadesAtualizadas)

  }

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
    
    finalizador(ref)
  
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
        <ModalEditAnotacao lista={lista} data={data} setModalClose={() => setModalEditIsOpen(false)} />
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