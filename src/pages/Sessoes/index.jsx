import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import {Body, Button, Container} from './styles'
import { Sessao } from './components/Sessao';
import { ModalCreateSessao } from './components/ModalCreateSessao';
import {Modal} from '../../components/Modals/Modal'

export function Sessoes() {

  const [isLoading, setIsLoading] = useState(true)
  const [modalCreateSessaoIsOpen, setModalCreateSessaoIsOpen] = useState(false)

  const {token} = useAuth()

  const [sessoes, setSessoes] = useState([{
    token: '40b4f07fd76f4590b7685ce27ac74089',
    nome: 'O Segredo Na ilha',
    descricao: 'Um RPG de mistério e investigação, com um leve toque suave muito leve e suave de terror.',
    participantes: ['Zin', 'Marques', 'Pato']
  }])

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);

    async function fetchData() {

      try {

        const response = await api.post("/", {query: 'fichas_all_get', sessid: token})
        
        setSessoes(response.data.fichas)

      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000);
      }

    }
    
    //fetchData()
  }, [])

  return (
    <Container isLoading={isLoading}>

      <Modal isOpen={modalCreateSessaoIsOpen} setClose={() => setModalCreateSessaoIsOpen(false)}>
        <ModalCreateSessao setModalClose={() => setModalCreateSessaoIsOpen(false)} setSessoes={setSessoes}/>
      </Modal>

      <Body isLoading={isLoading}>
        <Button onClick={() => setModalCreateSessaoIsOpen(true)}>Criar Sessão</Button>
        {sessoes.map((sessao) => <Sessao key={sessao.token} data={sessao}/>)}
      </Body>

    </Container>
  );
}