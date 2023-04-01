import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFicha } from '../../hooks/ficha';
import {Body, Container} from './styles'
import {api} from '../../services/api'
import {useAuth} from '../../hooks/auth'
import { Principal } from './components/Principal';
import { Status } from './components/Status';
import { ToastContainer } from 'react-toastify';

export function Ficha() {

  const {setNome, body} = useFicha()
  const {token, signOut} = useAuth()
  const {id} = useParams()

  const [isLoading, setIsLoading] = useState(true)

  const [principal, setPrincipal] = useState({})
  const [status, setStatus] = useState({})
  const [pericias, setPericias] = useState({})
  const [hpe, setHpe] = useState({})
  const [inventario, setInventario] = useState({})
  const [rituais, setRituais] = useState({})
  const [dados, setDados] = useState({})

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await api.post("/", {query: 'get_ficha', sessid: token, token: id})

        const ficha = response.data.ficha

        console.log(response.data)

        setNome(ficha.nome)

        setPrincipal({
          nome: ficha.nome,
          usuario: ficha.usuario,
          classe: ficha.classe,
          idade: ficha.idade,
          nacionalidade: ficha.local,
          patente: ficha.patente,
          nex: ficha.nex,
          origem: ficha.origem,
          peprod: ficha.pe_rodada,
          trilha: ficha.trilha,
          prestigio: ficha.pp,
          deslocamento: ficha.deslocamento,
          afinidade: ficha.afinidade
        })

        setStatus({
          foto: ficha.foto,
          
        })

      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000);
      }

    }
    
    fetchData()

  }, [])

  return (
    <Container>
      <Body isLoading={isLoading}>
        {(!isLoading && body == 'principal') && <Principal data={principal}/>}
        {(!isLoading && body == 'status') && <Status data={status}/>}
      </Body>
      <ToastContainer/>
    </Container>
  );
}