import {Body, Container, Header} from './styles'
import {ButtonEdit} from '../../../../components/ButtonEdit'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { Pericia } from './Pericia';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export function Pericias({data}) {

  const [todasPericias, setTodasPericias] = useState(false)

  return (
    <Container>

      <Header>
        <h1>Perícias</h1>
        <ButtonEdit/>
      </Header>

      <hr />

      <Body>
        <button className='button' onClick={() => setTodasPericias(!todasPericias)}>
          {todasPericias ? <AiOutlineEyeInvisible size={20} color="#00ffff"/> : <AiOutlineEye size={20} color="#00ffff"/>} 
        {!todasPericias ? "Mostrar todas" : 'Ocultar não pontuadas'}</button>
        {!todasPericias ? data.map((pericia) => (pericia.valor > 0) && <Pericia key={pericia.nome} data={pericia}/>) :data.map((pericia) => <Pericia key={pericia.nome} data={pericia}/>)}
      </Body>
    </Container>
  );
}