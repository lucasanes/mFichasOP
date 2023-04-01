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
          status: {
            foto: ficha.foto,
            foto_insano: ficha.foto_enlouquecendo,
            foto_ferido: ficha.foto_ferido,
            foto_morrendo: ficha.foto_morrendo,
            foto_insanoeferido: ficha.foto_ferenl,
            pvA: ficha.pva,
            pvMax: ficha.pv,
            psA: ficha.sana,
            psMax: ficha.san,
            peA: ficha.pea,
            peMax: ficha.pe,
            combate: ficha.combate,
            morto: ficha.morrendo,
            opv: ficha.opv,
            ops: ficha.osan,
            ope: ficha.ope
          },
          defesas: {
            passiva: ficha.passiva,
            esquiva: ficha.esquiva,
            bloqueio: ficha.bloqueio,
            sanidade: ficha.mental,
            morte: ficha.morte,
            sangue: ficha.sangue,
            energia: ficha.energia,
            conhecimento: ficha.conhecimento,
            balistica: ficha.balistica,
            corte: ficha.corte,
            eletricidade: ficha.eletricidade,
            fisico: ficha.fisica,
            fogo: ficha.fogo,
            frio: ficha.frio,
            impacto: ficha.impacto,
            perfuracao: ficha.perfuracao,
            quimico: ficha.quimico,
          }
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