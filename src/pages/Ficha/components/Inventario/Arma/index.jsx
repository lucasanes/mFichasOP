import { useRef, useState } from 'react';
import { ButtonDeleteComponent } from '../../../../../components/ButtonDeleteComponent';
import { ButtonEditComponent } from '../../../../../components/ButtonEditComponent';
import {Container, Header1, Button, Body, ButtonInfo, ButtonDados} from './styles'
import { IoIosArrowForward, IoMdInformationCircleOutline } from 'react-icons/io'
import {InputStop} from './InputStop'
import {Modal} from '../../../../../components/Modals/Modal'
import {ModalDadoRolado} from '../../../../../components/Modals/ModalDadoRolado'

export function Arma({data}) {

  const [hover, sethover] = useState(false)
  const contentRef = useRef(null)
  const [modalDadoRolado, setModalDadoRolado] = useState(false)
  const [dadoData, setDadoData] = useState(false)
  const [mostrarComoItem, setMostrarComoItem] = useState(false)

  function slideToggle(ref, fechaabre) {
    
    const content = ref.current;

    if (fechaabre) {
      content.style.transition = "0.3s ease-out";
      content.style.height = "0";
      setTimeout(() => {
        setMostrarComoItem(!mostrarComoItem);
      }, 290);
      setTimeout(() => {
        content.style.transition = "0.3s ease-in";
        content.style.height = `${content.scrollHeight}px`;
      }, 300);
      sethover(true);
      return
    }

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

      <Modal isOpen={modalDadoRolado} setClose={() => setModalDadoRolado(false)}>
        <ModalDadoRolado data={dadoData} setModalEditIsOpenFalse={() => setModalDadoRolado(false)}/>
      </Modal>

      <Header1>
        <Button hover={hover} onClick={() => {slideToggle(contentRef)}}><IoIosArrowForward color='white' size={20}/>{data.arma} -  {data.quantidade}</Button>
        <div>
          <ButtonInfo 
          onClick={() => {
            if (hover) {
              slideToggle(contentRef, true)
            } else {
              setMostrarComoItem(!mostrarComoItem)
              setTimeout(() => {
                slideToggle(contentRef)
              }, 100);
            }
          }} 
          className='info'><IoMdInformationCircleOutline color='#00ffff' size={20}/></ButtonInfo>
          <ButtonEditComponent segundo size={18}/>
          <ButtonDeleteComponent size={18}/>
        </div>
      </Header1>
      <hr/>
      <Body ref={contentRef}>

        {!mostrarComoItem ? <>

          <div className='infos'>
            <InputStop label={'Tipo:'} valor={data.tipo}/>
            <InputStop label={'Alcance:'} valor={data.alcance}/>
            <InputStop label={'Recarga:'} valor={data.recarga ? data.recarga : '- - -'}/>
            <InputStop label={'Especial:'} valor={data.especial ? data.especial : '- - -'}/>
          </div>

          <div className='buttons'>
            {data.ataque && <ButtonDados onClick={() => {
              setModalDadoRolado(true)
              setDadoData({nome: 'Teste', valor: data.ataque, isDano: false})
            }} isDano={'false'}><strong>Teste:</strong> {data.ataque}</ButtonDados>}
            {data.dano && <ButtonDados onClick={() => {
              setModalDadoRolado(true)
              setDadoData({nome:'Dano', valor: data.dano, isDano: true})
            }} isDano={'true'}><strong>Dano:</strong> {data.dano}</ButtonDados>}
            {data.critico && <ButtonDados onClick={() => {
              setModalDadoRolado(true)
              setDadoData({nome:'Crítico', valor: data.critico, isDano: true})
            }} isDano={'true'}><strong>Crítico:</strong> {data.margem} / {data.critico}</ButtonDados>}
          </div>
        
        </>:<>

          <div className='infos'>
            <InputStop label={'Categoria:'} valor={data.prestigio}/>
            <InputStop label={'Espaços:'} valor={data.espaco}/>
          </div>

          <p>{data.descricao ? data.descricao : 'Sem descrição...'}</p>

          <img 
          // onClick={() => setModalImgIsOpen(true)}
          width={'100%'} src={'https://cdn.discordapp.com/attachments/1080822648130519110/1093745238629171280/Bilhete_Adrian.png'}/>

        </>}

      </Body>
    </Container>
  );
}