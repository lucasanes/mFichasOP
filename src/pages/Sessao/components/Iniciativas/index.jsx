import {Body, Button, Container, Header} from './styles'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { ButtonCreateHeader } from '../../../../components/ButtonCreateHeader';
import { Modal } from '../../../../components/Modals/Modal';
import { Iniciativa } from './Iniciativa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export function Iniciativas({data, setData}) {

  const [precisaSalvar, setPrecisaSalvar] = useState(false)

  async function handleCreate() {
    setData(prev => [...prev, {token: `a${data.length + 1}`, posicao: data.length + 1, nome: 'Jogador', iniciativa: 0, dano: 0}])
    setPrecisaSalvar(true)
  }

  async function handleSave() {
    setPrecisaSalvar(false)
  }

  return (
    <Container>

      <Header>
        <h1>Iniciativas</h1>
        <ButtonCreateHeader onClick={handleCreate}/>
      </Header>

      <hr />

      <Body>
        {data.map(iniciativa => <Iniciativa key={iniciativa.token} lista={data} setLista={setData} data={iniciativa} setPrecisaSalvar={setPrecisaSalvar}/>)}
        {(data.length > 0 || precisaSalvar) && <Button style={{margin: '1rem auto'}} disabled={!precisaSalvar} precisaSalvar={precisaSalvar} onClick={handleSave}>{precisaSalvar ? 'Salvar' : 'Salvo!'}</Button>}
      </Body>
    </Container>
  );
}