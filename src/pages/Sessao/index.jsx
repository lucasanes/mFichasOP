import { useEffect, useState } from 'react';
import {Container} from './styles'
import { SwiperSlide } from 'swiper/react';
import {Fichas} from './components/Fichas'
import {UTContainer} from './components/UTContainer'
import {Dados} from './components/Dados'
import { MenuBottomSessao } from '../../components/MenuBottomSessao';
import {useSessao} from '../../hooks/sessao'
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useParams } from 'react-router-dom';
import { Anotacoes } from './components/Anotacoes';
import { Iniciativas } from './components/Iniciativas';
import { NPCS } from './components/NPCS';
import { Monstros } from './components/Monstros';
import uuid from 'react-uuid';

export function Sessao() {

  const {token} = useAuth()
  const {id} = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const {setNome} = useSessao()

  const [fichas, setFichas] = useState([])
  const [UT, setUT] = useState([])
  const [iniciativas, setIniciativas] = useState([])
  const [dados, setDados] = useState([])
  const [anotacoes, setAnotacoes] = useState([])
  const [npcs, setNPCS] = useState([])
  const [monstros, setMonstros] = useState([])

  useEffect(() => {

    setNome('...')

    async function fetchData() {

      const response2 = await api.post('/', {query: 'etc_dices_get', sessid: token, token: id})

      setTimeout(() => {
        
        setNome('OSNI')
        setIsLoading(false)

        setFichas([
          {
            token: '66971195-caac-11ed-a255-7d5e5ebfa2ed',
            infos: {nome: 'Theo', idade: 19,  local: 'SC', origem: 'Acadêmico', classe: 'Mundano', nex: 11},
            status: {pvA: 4, pv: 11, psA: 5, ps: 8, peA: 2, pe: 6, pesoA: 2, peso: 5, munA: 2, mun: 6},
            atributos: {forca: 3, agi: 5, int: 2, vig: 1, pre: 4,},
            pericias: {luta: 5, fortitude: 7, reflexo: 10, investigacao: 0},
            defesas: {passiva: 12, bloqueio: 0},
            res: {corte: 5, frio: 0}
          }
        ])

        setUT([
          {
            fotoP: 'https://fichasop.com/assets/img/desconhecido.webp', nomeP: 'Mestre', hora: '11:22:33',
            nomeDado: 'Dano Machado', print: "20+4+10+3+5", resultado: 42, dano: true,
            rolagens: [{dado: 'd20', resultados: [20, 4, 10]}, {dado: 'd6', resultados: [3, 5]}]
          }
        ])

        setIniciativas([{token: uuid(), posicao: 1, nome: 'Theo', iniciativa: 20, dano: 6}, {token: uuid(), posicao: 2, nome: 'Luis', iniciativa: 18, dano: 12}])

        setDados(response2.data.dados.dices)

        setAnotacoes([{token: uuid(), nome: 'Sanidade', descricao: 'Ver alguem morrendo: 2d6'}])

        setNPCS([
          {
            token: uuid(),
            nome: 'Angela',
            status: {pvA: 9, pv: 11, psA: 7, ps: 8, peA: 6, pe: 6},
            atributos: {forca: 3, agi: 5, int: 2, vig: 1, pre: 4,},
            pericias: {luta: 5, fortitude: 7, reflexo: 10, investigacao: 0},
            defesas: {passiva: 12, bloqueio: 0},
            res: {corte: 5, frio: 0},
            outros: {ataques: 'Espada - 1d12 - 3d12', habilidades: 'Decadência: 1d6+2',  detalhes: 'Idade: 12 \na'}
          }
        ])

        setMonstros([
          {
            token: uuid(),
            nome: 'Lobo',
            status: {pvA: 9, pv: 11, psA: 7, ps: 8, peA: 6, pe: 6},
            atributos: {forca: 4, agi: 5, int: 1, vig: 3, pre: 4,},
            pericias: {luta: 10, fortitude: 7, reflexo: 15, investigacao: 0},
            defesas: {passiva: 15, bloqueio: 5},
            res: {corte: 9, frio: 0},
            outros: {ataques: 'Mordida - 1d12 - 3d12', habilidades: 'Dash: 12m',  detalhes: 'Aparência: Lobo branco. \na'}
          }
        ])
        
      }, 1000);

    }

    fetchData()


    return () => {
      setNome('...')
    }

  }, [])

  return (
    <Container isLoading={isLoading} grabCursor threshold={10}>

      {!isLoading && <>

        <SwiperSlide>
          <Fichas data={fichas} setData={setFichas}/>
        </SwiperSlide>

        <SwiperSlide>
          <UTContainer data={UT} setData={setUT}/>
        </SwiperSlide>

        <SwiperSlide>
          <Iniciativas data={iniciativas} setData={setIniciativas}/>
        </SwiperSlide>

        <SwiperSlide>
          <Dados data={dados} setData={setDados}/>
        </SwiperSlide>

        <SwiperSlide>
          <Anotacoes data={anotacoes} setData={setAnotacoes}/>
        </SwiperSlide>

        <SwiperSlide>
          <NPCS data={npcs} setData={setNPCS}/>
        </SwiperSlide>

        <SwiperSlide>
          <Monstros data={monstros} setData={setMonstros}/>
        </SwiperSlide>

      </>}

      <MenuBottomSessao/>

    </Container>
  );
}