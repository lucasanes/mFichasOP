import { useRef, useState } from 'react';
import { ButtonDeleteComponent } from '../../../../../components/ButtonDeleteComponent';
import { ButtonEditComponent } from '../../../../../components/ButtonEditComponent';
import {Container, Header1, Button, Body} from './styles'
import { IoIosArrowForward } from 'react-icons/io'
import {InputStop} from './InputStop'
import {Modal} from '../../../../../components/Modals/Modal'
import {ModalDadoRolado} from '../../../../../components/Modals/ModalDadoRolado'
import { useAuth } from '../../../../../hooks/auth';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../services/api';

export function Ritual({data, setData, lista}) {

  const [hover, sethover] = useState(false)
  const contentRef = useRef(null)
  const [modalDadoIsOpen, setModalDadoIsOpen] = useState(false)
  const [dadoData, setDadoData] = useState({})

  const {id} = useParams()
  const {token} = useAuth()

  async function itemDelete() {

    const response = await api.post('/', {
      query: 'fichas_info_delete',
      sessid: token,
      token: id,
      dados: {
        rituais: [{
          id: data.id
        }]
      }
    })

    if (response.data.success) {
      const rituaisAtualizadas = lista.filter(ritual => ritual.id != data.id)
      setData(rituaisAtualizadas)
    }

  }

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
    <Container elemento={data.elemento.toLowerCase()}>

      <Modal isOpen={modalDadoIsOpen} setClose={() => setModalDadoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoIsOpen(false)} data={dadoData} />
      </Modal>

      <Header1>
        <Button elemento={data.elemento.toLowerCase()} hover={hover} onClick={() => {slideToggle(contentRef)}}><IoIosArrowForward color='white' size={20}/>{data.nome}</Button>
        <div>
          <ButtonEditComponent segundo size={18}/>
          <ButtonDeleteComponent onClick={itemDelete} size={18}/>
        </div>
      </Header1>
      <hr/>
      <Body ishover={hover.toString()} ref={contentRef}>
        <img width={100} src={data.foto} />

        <div className='infos'>
          <InputStop label={'Elemento:'} valor={data.elemento + ' - ' + data.circulo}/>
          <InputStop label={'Alcance:'} valor={data.alcance}/>
          <InputStop label={'Execução:'} valor={data.conjuracao}/>
          <InputStop label={'Duração:'} valor={data.duracao}/>
          <InputStop label={'Alvo:'} valor={data.alvo}/>
          <InputStop label={'Resistência:'} valor={data.resistencia}/>
        </div>
       
        <div className='buttons'>
          <button onClick={() => {setDadoData({nome: 'Normal', valor: data.dano, isDano: true}); setModalDadoIsOpen(true)}}>Normal</button>
          <button onClick={() => {setDadoData({nome: 'Discente', valor: data.dano2, isDano: true}); setModalDadoIsOpen(true)}}>Discente</button>
          <button onClick={() => {setDadoData({nome: 'Verdadeiro', valor: data.dano3, isDano: true}); setModalDadoIsOpen(true)}}>Verdadeiro</button>
        </div>
        <p>{data.efeito}</p>
      </Body>
    </Container>
  );
}