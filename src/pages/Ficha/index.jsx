import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFicha } from '../../hooks/ficha';
import {Body, Container} from './styles'
import {api} from '../../services/api'
import {useAuth} from '../../hooks/auth'
import { Principal } from './components/Principal';
import { Status } from './components/Status';
import { ToastContainer } from 'react-toastify';
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

  const {setNome, body, setBody, setDc} = useFicha()
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

        const ficha = response.data.ficha

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

        setPericias({
          atributos: {
            agilidade: ficha.agilidade,
            presenca: ficha.presenca,
            vigor: ficha.vigor,
            forca: ficha.forca,
            intelecto: ficha.inteligencia
          },
          pericias: [
          {id: 1, nome: 'acrobacia', valor: ficha.acrobacias, atributoChave: ficha.agilidade},
          {id: 2, nome: 'adestramento', valor: ficha.adestramento, atributoChave: ficha.presenca},
          {id: 3, nome: 'arte', valor: ficha.artes, atributoChave: ficha.presenca},
          {id: 4, nome: 'atletismo', valor: ficha.atletismo, atributoChave: ficha.forca},
          {id: 5, nome: 'atualidade', valor: ficha.atualidades, atributoChave: ficha.inteligencia},
          {id: 6, nome: 'ciencia', valor: ficha.ciencia, atributoChave: ficha.inteligencia},
          {id: 7, nome: 'crime', valor: ficha.crime, atributoChave: ficha.agilidade},
          {id: 8, nome: 'diplomacia', valor: ficha.diplomacia, atributoChave: ficha.presenca},
          {id: 9, nome: 'enganacao', valor: ficha.enganacao, atributoChave: ficha.presenca},
          {id: 10, nome: 'fortitude', valor: ficha.fortitude, atributoChave: ficha.vigor},
          {id: 11, nome: 'furtividade', valor: ficha.furtividade, atributoChave: ficha.agilidade},
          {id: 12, nome: 'iniciativa', valor: ficha.iniciativa, atributoChave: ficha.agilidade},
          {id: 13, nome: 'intimidacao', valor: ficha.intimidacao, atributoChave: ficha.presenca},
          {id: 14, nome: 'intuicao', valor: ficha.intuicao, atributoChave: ficha.inteligencia},
          {id: 15, nome: 'investigacao', valor: ficha.investigacao, atributoChave: ficha.inteligencia},
          {id: 16, nome: 'luta', valor: ficha.luta, atributoChave: ficha.forca},
          {id: 17, nome: 'medicina', valor: ficha.medicina, atributoChave: ficha.inteligencia},
          {id: 18, nome: 'ocultismo', valor: ficha.ocultismo, atributoChave: ficha.inteligencia},
          {id: 19, nome: 'percepcao', valor: ficha.percepcao, atributoChave: ficha.presenca},
          {id: 20, nome: 'pilotagem', valor: ficha.pilotagem, atributoChave: ficha.agilidade},
          {id: 21, nome: 'pontaria', valor: ficha.pontaria, atributoChave: ficha.agilidade},
          {id: 22, nome: 'profissao', valor: ficha.profissao, atributoChave: ficha.inteligencia},
          {id: 23, nome: 'reflexo', valor: ficha.reflexos, atributoChave: ficha.agilidade},
          {id: 24, nome: 'religiao', valor: ficha.religiao, atributoChave: ficha.presenca},
          {id: 25, nome: 'sobrevivencia', valor: ficha.sobrevivencia, atributoChave: ficha.inteligencia},
          {id: 26, nome: 'tatica', valor: ficha.tatica, atributoChave: ficha.inteligencia},
          {id: 27, nome: 'tecnologia', valor: ficha.tecnologia, atributoChave: ficha.inteligencia},
          {id: 28, nome: 'vontade', valor: ficha.vontade, atributoChave: ficha.presenca}
        ]})

        setInventario({itens: ficha.itens, armas: ficha.armas})

        setDados(ficha.dices)

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
    
    fetchData()

    return () => {
      setNome('...')
    }

  }, [])

  return (
    <Container isLoading={isLoading} cssMode>
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
    // <Container isLoading={isLoading}>
    //     <Body isLoading={isLoading}>
    //       {(!isLoading && body == 'principal') && <Principal data={principal} setData={setPrincipal}/>}
    //       {(!isLoading && body == 'status') && <Status data={status} setData={setStatus}/>}
    //       {(!isLoading && body == 'pericias') && <Pericias data={pericias} setData={setPericias}/>}
    //       {(!isLoading && body == 'hpe') && <Habilidades data={hpe} setData={setHpe}/>}
    //       {(!isLoading && body == 'inventario') && <Inventario data={inventario} setData={setInventario}/>}
    //       {(!isLoading && body == 'rituais') && <Rituais data={rituais} setData={setRituais}/>}
    //       {(!isLoading && body == 'dados') && <Dados data={dados} setData={setDados}/>}
    //     </Body>
    //   <ToastContainer/>
    // </Container>
  );
}