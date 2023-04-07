import {Body, Button, Container, Header} from './styles'
import {ButtonEditHeader} from '../../../../components/ButtonEditHeader'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Pericia } from './Pericia';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Modal } from '../../../../components/Modals/Modal';
import { ModalEditPericias } from './ModalEditPericias';
import {AtributoButton} from '../../../../components/AtributoButton'
import { ModalEditAtributos } from './ModalEditAtributos';

export function Pericias({data, setData}) {

  const [low, setLow] = useState(false)

  const [todasPericias, setTodasPericias] = useState(false)
  const [miniBody, setMiniBody] = useState('atributos')

  const [modalEditPericiasIsOpen, setModalEditPericiasIsOpen] = useState(false)
  const [modalEditAtributosIsOpen, setModalEditAtributosIsOpen] = useState(false)

  console.log(data)

  useEffect(() => {
    if (innerWidth > 422) {
      setLow(false)
    } else {
      setLow(true)
    }
  }, [])

  window.addEventListener('resize', () => {
    if (innerWidth > 422) {
      setLow(false)
    } else {
      setLow(true)
    }
  })

  return (
    <Container>

      <Modal isOpen={modalEditPericiasIsOpen} setClose={() => setModalEditPericiasIsOpen(false)}>
        <ModalEditPericias data={data} setData={setData} setModalClose={() => setModalEditPericiasIsOpen(false)}/>
      </Modal>

      <Modal isOpen={modalEditAtributosIsOpen} setClose={() => setModalEditAtributosIsOpen(false)}>
        <ModalEditAtributos data={data} setData={setData} setModalClose={() => setModalEditAtributosIsOpen(false)}/>
      </Modal>

      <Header>
        <Button hover={miniBody == 'atributos'} onClick={() => setMiniBody('atributos')}>Atributos</Button>
        <Button hover={miniBody == 'pericias'} onClick={() => setMiniBody('pericias')}>Perícias</Button>
        <ButtonEditHeader onClick={() => {if (miniBody == 'atributos') {setModalEditAtributosIsOpen(true)} else {setModalEditPericiasIsOpen(true)}}}/>
      </Header>

      <hr />

      <Body low={low}>

        {miniBody == 'atributos' ?

          <AtributoButton agi={data.atributos.agilidade} forca={data.atributos.forca} int={data.atributos.intelecto} pre={data.atributos.presenca} vig={data.atributos.vigor}/>

        : <>

          <button className='button' onClick={() => setTodasPericias(!todasPericias)}>
            {todasPericias ? <AiOutlineEyeInvisible size={20} color="#00ffff"/> : <AiOutlineEye size={20} color="#00ffff"/>} 
            {!todasPericias ? "Mostrar todas" : 'Ocultar não pontuadas'}
          </button>
          
          {!todasPericias ? data.pericias.map((pericia) => (pericia.valor > 0) && <Pericia key={pericia.id} data={pericia}/>) : data.pericias.map((pericia) => <Pericia key={pericia.id} data={pericia}/>)}
        
        </>}
      </Body>
    </Container>
  );
}