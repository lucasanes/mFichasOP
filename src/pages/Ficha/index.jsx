import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFicha } from '../../hooks/ficha';
import {Body, Container} from './styles'
import {api} from '../../services/api'
import {useAuth} from '../../hooks/auth'
import { Principal } from './components/Principal';
import { Status } from './components/Status';
import { ToastContainer, toast } from 'react-toastify';
import { Pericias } from './components/Pericias';
import { Habilidades } from './components/Habilidades';
import { Dados } from './components/Dados';
import { Rituais } from './components/Rituais';
import { Inventario } from './components/Inventario';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MenuBottomFicha } from '../../components/MenuBottomFicha';

export function Ficha() {

  const navigate = useNavigate()

  const {setNome, setBlockPerm, setDc} = useFicha()
  const {token} = useAuth()
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
    
    setNome('...')

    async function fetchData() {

      try {

        const response = await api.post("/", {query: 'fichas_info_get', sessid: token, token: id})

        if (!response.data.success && response.data.msg != 'Sua sessão encerrou.') {
          navigate('/')
          return
        }

        const response2 = await api.post('/', {query: 'etc_dices_get', sessid: token, token: id})

        const ficha = response.data.ficha

        setBlockPerm(ficha.blockperm)

        const primeiroNome = ficha.nome.split(' ')[0]

        setNome(primeiroNome)
        document.title = `mFichasOP - ${ficha.nome}`

        setPrincipal({
          infos: {
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
            afinidade: ficha.afinidade,
          },
          personagem: {
            historia: ficha.historia,
            aparencia: ficha.aparencia,
            pep: ficha.encontro,
            dfm: ficha.medos,
            favoritos: ficha.favoritos,
            personalidade: ficha.frases,
            pesadelo: ficha.pior_pesadelo,
            anotacoes: ficha.anotacoes
          }
        })

        setStatus({
          fotos: {
            foto: ficha.foto,
            foto_insano: ficha.foto_enlouquecendo,
            foto_ferido: ficha.foto_ferido,
            foto_morrendo: ficha.foto_morrendo,
            foto_insanoeferido: ficha.foto_ferenl,
          },
          status: {
            pvA: ficha.pva,
            pvMax: ficha.pv,
            psA: ficha.sana,
            psMax: ficha.san,
            peA: ficha.pea,
            peMax: ficha.pe,
            municaoA: ficha.balasusadas,
            municaoMax: ficha.balas,
            combate: ficha.combate,
            morto: ficha.morrendo,
            opv: ficha.opv,
            ops: ficha.osan,
            ope: ficha.ope,
            sessao: ficha.missao
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

        setPericias({
          atributos: {
            agilidade: ficha.agilidade,
            presenca: ficha.presenca,
            vigor: ficha.vigor,
            forca: ficha.forca,
            intelecto: ficha.inteligencia
          },
          pericias: ficha.pericias
      })

        setInventario({peso: ficha.peso_inv, itens: ficha.itens, armas: ficha.armas})

        setDados(response2.data.dados.dices.filter(dado => dado.token_pai == id || dado.token_pai == ''))

        setHpe({habilidades: ficha.habilidades, poderes: ficha.poderes, proficiencias: ficha.proficiencias})

        setRituais(ficha.rituais)

        setDc({
          "FOR": ficha.forca,
          "AGI": ficha.agilidade,
          "INT": ficha.inteligencia,
          "PRE": ficha.presenca,
          "VIG": ficha.vigor,
          "ACRO": ficha.acrobacias,
          "ADES": ficha.adestramento,
          "ARTE": ficha.artes,
          "ATLE": ficha.atletismo,
          "ATUA": ficha.atualidades,
          "CIEN": ficha.ciencia,
          "CRIM": ficha.crime,
          "DIPL": ficha.diplomacia,
          "ENGA": ficha.enganacao,
          "FORT": ficha.fortitude,
          "FURT": ficha.furtividade,
          "INIT": ficha.iniciativa,
          "INTI": ficha.intimidacao,
          "INTU": ficha.intuicao,
          "INVE": ficha.investigacao,
          "LUTA": ficha.luta,
          "MEDI": ficha.medicina,
          "OCUL": ficha.ocultismo,
          "PERC": ficha.percepcao,
          "PILO": ficha.pilotagem,
          "PONT": ficha.pontaria,
          "PROF": ficha.profissao,
          "REFL": ficha.reflexos,
          "SOBR": ficha.sobrevivencia,
          "TATi": ficha.tatica,
          "TECN": ficha.tecnologia,
          "VONT": ficha.vontade
        })

      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000);
      }

    }

    if (localStorage.getItem('@fichasop:token')) {
      if (token) {
        fetchData()
      }
    } else {
      fetchData()
    }

    return () => {
      setNome('...')
    }

  }, [])

  return (
    <Container isLoading={isLoading} grabCursor threshold={10}>
      {!isLoading && <>
        <SwiperSlide>
          <Principal data={principal} setData={setPrincipal}/>
        </SwiperSlide>
        <SwiperSlide>
          <Status data={status} setData={setStatus}/>
        </SwiperSlide>
        <SwiperSlide>
          <Pericias data={pericias} setData={setPericias}/>
        </SwiperSlide>
        <SwiperSlide>
          <Habilidades data={hpe} setData={setHpe}/>
        </SwiperSlide>
        <SwiperSlide>
          <Inventario data={inventario} setData={setInventario}/>
        </SwiperSlide>
        <SwiperSlide>
          <Rituais data={rituais} setData={setRituais}/>
        </SwiperSlide>
        <SwiperSlide>
          <Dados data={dados} setData={setDados}/>
        </SwiperSlide>
      </>}
      
      <MenuBottomFicha/>
    </Container>
  );
}