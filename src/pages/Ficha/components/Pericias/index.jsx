import {Body, Button, Container, DivAtributos, Header} from './styles'
import {ButtonEditHeader} from '../../../../components/ButtonEditHeader'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Pericia } from './Pericia';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Modal } from '../../../../components/Modals/Modal';
import { ModalEditPericias } from './ModalEditPericias';
import {AtributoButton} from '../../../../components/AtributoButton'
import { ModalEditAtributos } from './ModalEditAtributos';
import { ButtonEditComponent } from '../../../../components/ButtonEditComponent';
import { useFicha } from '../../../../hooks/ficha';

export function Pericias({data, setData}) {

  const {blockPerm} = useFicha()

  const [todasPericias, setTodasPericias] = useState(false)

  const [modalEditPericiasIsOpen, setModalEditPericiasIsOpen] = useState(false)
  const [modalEditAtributosIsOpen, setModalEditAtributosIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalEditPericiasIsOpen} setClose={() => setModalEditPericiasIsOpen(false)}>
        <ModalEditPericias data={data} setData={setData} setModalClose={() => setModalEditPericiasIsOpen(false)}/>
      </Modal>

      <Modal isOpen={modalEditAtributosIsOpen} setClose={() => setModalEditAtributosIsOpen(false)}>
        <ModalEditAtributos data={data} setData={setData} setModalClose={() => setModalEditAtributosIsOpen(false)}/>
      </Modal>

      <Header>
        <h1>Perícias</h1>
        <ButtonEditHeader onClick={() => setModalEditPericiasIsOpen(true)}/>
      </Header>

      <hr />

      <Body>

        <DivAtributos>
          <AtributoButton blockPerm={blockPerm} agi={data.atributos.agilidade} forca={data.atributos.forca} int={data.atributos.intelecto} pre={data.atributos.presenca} vig={data.atributos.vigor}/>
          <ButtonEditComponent onClick={() => setModalEditAtributosIsOpen(true)} className='buttonedit'/>
        </DivAtributos>

        <button className='button' onClick={() => setTodasPericias(!todasPericias)}>
          {todasPericias ? <AiOutlineEyeInvisible size={20} color="#00ffff"/> : <AiOutlineEye size={20} color="#00ffff"/>} 
          {!todasPericias ? "Mostrar todas" : 'Ocultar não pontuadas'}
        </button>
        
        {!todasPericias ? data.pericias.map((pericia) => (pericia.valor > 0) && <Pericia key={pericia.id} data={pericia}/>) : data.pericias.map((pericia) => <Pericia key={pericia.id} data={pericia}/>)}
        
      </Body>
    </Container>
  );
}