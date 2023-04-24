import { useRef, useState } from 'react';
import { ButtonDeleteComponent } from '../../../../../components/ButtonDeleteComponent';
import { ButtonEditComponent } from '../../../../../components/ButtonEditComponent';
import {Container, Header1, Button, Body, ButtonInfo, ButtonDados} from './styles'
import { IoIosArrowForward, IoMdInformationCircleOutline } from 'react-icons/io'
import {InputStop} from './InputStop'
import {Modal} from '../../../../../components/Modals/Modal'
import {ModalDadoRolado} from '../../../../../components/Modals/ModalDadoRolado'
import { useFicha } from '../../../../../hooks/ficha';
import { api } from '../../../../../services/api';
import { useAuth } from '../../../../../hooks/auth';
import { useParams } from 'react-router-dom';
import { ModalEditArma } from './ModalEditArma';

export function Arma({lista, data, setData, ...rest}) {

  const {blockPerm} = useFicha()

  const {token} = useAuth()
  const {id} = useParams()

  const [hover, sethover] = useState(false)
  const contentRef = useRef(null)
  const [modalDadoRolado, setModalDadoRolado] = useState(false)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
  const [dadoData, setDadoData] = useState(false)
  const [mostrarComoItem, setMostrarComoItem] = useState(false)

  const foto = new Image();
  foto.src = data.foto;

  let timeout1;
  let timeout2;

  function iniciador1(ref) {
    timeout1 = setTimeout(doSomething1(), 290);
  }

  function iniciador2(ref) {
    timeout2 = setTimeout(doSomething2(ref), 300);
  }
  
  function finalizador() {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
  }
  
  function doSomething1() {
    setMostrarComoItem(!mostrarComoItem);
  }

  function doSomething2(ref) {
    const content = ref.current;
    content.style.transition = "0.3s ease-in";
    content.style.height = `${content.scrollHeight}px`;
  }

  function slideToggle(ref, fechaabre) {
    
    const content = ref.current;

    if (fechaabre) {
      finalizador()
      content.style.transition = "0.3s ease-out";
      content.style.height = "0";
      setTimeout(() => setMostrarComoItem(!mostrarComoItem), 290);
      setTimeout(() => {
        const content = ref.current;
        content.style.transition = "0.3s ease-in";
        content.style.height = `${content.scrollHeight}px`;
        iniciador2(ref)
      }, 300);
      sethover(true);
      return
    }

    finalizador()

    if (hover) {
      content.style.transition = "0.3s ease-out";
      content.style.height = "0";
      sethover(false);
    } else {
      content.style.transition = "0.3s ease-in";
      content.style.height = `${content.scrollHeight}px`;
      iniciador2(ref)
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

  async function itemDelete() {

    const response = await api.post('/', {
      query: 'fichas_info_delete',
      sessid: token,
      token: id,
      dados: {
        armas: [{
          id: data.id
        }]
      }
    })

    if (response.data.success) {
      const itensAtualizados = lista.filter(item => item.id != data.id)
      setData(itensAtualizados)
    }

  }
  
  return (
    <Container {...rest}>

      <Modal isOpen={modalEditIsOpen} setClose={() => setModalEditIsOpen(false)}>
        <ModalEditArma data={data} lista={lista} setModalClose={() => setModalEditIsOpen(false)}/>
      </Modal>

      <Modal isOpen={modalDadoRolado} setClose={() => setModalDadoRolado(false)}>
        <ModalDadoRolado data={dadoData} setModalEditIsOpenFalse={() => setModalDadoRolado(false)}/>
      </Modal>

      <Header1>
        <Button hover={hover} onClick={() => {slideToggle(contentRef)}}><IoIosArrowForward color='white' size={20}/>{data.nome}</Button>
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
          <ButtonEditComponent onClick={() => setModalEditIsOpen(true)} segundo size={18}/>
          <ButtonDeleteComponent handleExecute={itemDelete} size={18}/>
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
            {data.ataque && <ButtonDados semperm={blockPerm} disabled={blockPerm} onClick={() => {
              setModalDadoRolado(true)
              setDadoData({nome: 'Teste', valor: data.ataque, isDano: false})
            }} isDano={'false'}><strong>Teste:</strong> {data.ataque}</ButtonDados>}
            {data.dano && <ButtonDados semperm={blockPerm} disabled={blockPerm} onClick={() => {
              setModalDadoRolado(true)
              setDadoData({nome:'Dano', valor: data.dano, isDano: true})
            }} isDano={'true'}><strong>Dano:</strong> {data.dano}</ButtonDados>}
            {data.critico && <ButtonDados semperm={blockPerm} disabled={blockPerm} onClick={() => {
              setModalDadoRolado(true)
              setDadoData({nome:'Crítico', valor: data.critico, isDano: true})
            }} isDano={'true2'}><strong>Crítico:</strong> {data.margem} / {data.critico}</ButtonDados>}
          </div>
        
        </>:<>

          <div className='infos'>
            <InputStop label={'Categoria:'} key={data.prestigio + 'a'} valor={data.prestigio}/>
            <InputStop label={'Espaços:'} key={data.espaco + 'b'} valor={data.espaco}/>
          </div>

          <p>{data.descricao ? data.descricao : 'Sem descrição...'}</p>

          <img 
          width={'75%'} src={foto.src}/>

        </>}

      </Body>
    </Container>
  );
}