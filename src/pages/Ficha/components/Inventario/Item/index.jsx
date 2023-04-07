import { useRef, useState } from 'react';
import { ButtonDeleteComponent } from '../../../../../components/ButtonDeleteComponent';
import { ButtonEditComponent } from '../../../../../components/ButtonEditComponent';
import {Container, Header1, Button, Body} from './styles'
import { IoIosArrowForward } from 'react-icons/io'
import {InputStop} from './InputStop'
import {Modal} from '../../../../../components/Modals/Modal'
import {ModalDadoRolado} from '../../../../../components/Modals/ModalDadoRolado'

export function Item({data}) {

  console.log(data)

  const [hover, sethover] = useState(false)
  const contentRef = useRef(null)
  const [modalImgIsOpen, setModalImgIsOpen] = useState(false)

  function slideToggle(ref) {
    
    const content = ref.current;
  
    if (hover) {
      content.style.transition = "0.3s ease-out";
      content.style.height = "0";
      sethover(false);
    } else {
      content.style.transition = "0.3s ease-in";
      content.style.height = `${content.scrollHeight}px`;
      sethover(true);
    }
  }

  return (
    <Container>

      <Modal isOpen={modalImgIsOpen} setClose={() => setModalImgIsOpen(false)}>
        <img onClick={() => setModalImgIsOpen(false)} width={'100%'} src='https://cdn.discordapp.com/attachments/1080822648130519110/1093745238629171280/Bilhete_Adrian.png'/>
      </Modal>

      <Header1>
        <Button hover={hover} onClick={() => {slideToggle(contentRef)}}><IoIosArrowForward color='white' size={20}/>{data.nome} -  {data.quantidade}</Button>
        <div>
          <ButtonEditComponent segundo size={18}/>
          <ButtonDeleteComponent size={18}/>
        </div>
      </Header1>

      <hr/>
      
      <Body ishover={hover} ref={contentRef}>

        <div className='infos'>
          <InputStop label={'Categoria:'} valor={data.prestigio}/>
          <InputStop label={'Espaços:'} valor={data.espaco}/>
        </div>

        <p>{data.descricao ? data.descricao : 'Sem descrição...'}</p>

        <img 
        // onClick={() => setModalImgIsOpen(true)}
        width={'100%'} src={'https://cdn.discordapp.com/attachments/1080822648130519110/1093745238629171280/Bilhete_Adrian.png'}/>
      </Body>
    </Container>
  );
}