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

export function Ficha() {

  const {setNome, body, setBody} = useFicha()
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

    setBody('principal')

    async function fetchData() {

      try {

        const response = await api.post("/", {query: 'fichas_info_get', sessid: token, token: id})

        const ficha = response.data.ficha

        console.log(ficha)

        const primeiroNome = ficha.nome.split(' ')[0]

        setNome(primeiroNome)
        document.title = `mFichasOP - ${ficha.nome}`

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

        setPericias([
          {nome: 'acrobacia', valor: ficha.acrobacias, atributoChave: ficha.agilidade},
          {nome: 'adestramento', valor: ficha.adestramento, atributoChave: ficha.presenca},
          {nome: 'arte', valor: ficha.artes, atributoChave: ficha.presenca},
          {nome: 'atletismo', valor: ficha.atletismo, atributoChave: ficha.forca},
          {nome: 'atualidade', valor: ficha.atualidades, atributoChave: ficha.inteligencia},
          {nome: 'ciencia', valor: ficha.ciencia, atributoChave: ficha.inteligencia},
          {nome: 'crime', valor: ficha.crime, atributoChave: ficha.agilidade},
          {nome: 'diplomacia', valor: ficha.diplomacia, atributoChave: ficha.presenca},
          {nome: 'enganacao', valor: ficha.enganacao, atributoChave: ficha.presenca},
          {nome: 'fortitude', valor: ficha.fortitude, atributoChave: ficha.vigor},
          {nome: 'furtividade', valor: ficha.furtividade, atributoChave: ficha.agilidade},
          {nome: 'iniciativa', valor: ficha.iniciativa, atributoChave: ficha.agilidade},
          {nome: 'intimidacao', valor: ficha.intimidacao, atributoChave: ficha.presenca},
          {nome: 'intuicao', valor: ficha.intuicao, atributoChave: ficha.inteligencia},
          {nome: 'investigacao', valor: ficha.investigacao, atributoChave: ficha.inteligencia},
          {nome: 'luta', valor: ficha.luta, atributoChave: ficha.forca},
          {nome: 'medicina', valor: ficha.medicina, atributoChave: ficha.inteligencia},
          {nome: 'ocultismo', valor: ficha.ocultismo, atributoChave: ficha.inteligencia},
          {nome: 'percepcao', valor: ficha.percepcao, atributoChave: ficha.presenca},
          {nome: 'pilotagem', valor: ficha.pilotagem, atributoChave: ficha.agilidade},
          {nome: 'pontaria', valor: ficha.pontaria, atributoChave: ficha.agilidade},
          {nome: 'profissao', valor: ficha.profissao, atributoChave: ficha.inteligencia},
          {nome: 'reflexo', valor: ficha.reflexos, atributoChave: ficha.agilidade},
          {nome: 'religiao', valor: ficha.religiao, atributoChave: ficha.presenca},
          {nome: 'sobrevivencia', valor: ficha.sobrevivencia, atributoChave: ficha.inteligencia},
          {nome: 'tatica', valor: ficha.tatica, atributoChave: ficha.inteligencia},
          {nome: 'tecnologia', valor: ficha.tecnologia, atributoChave: ficha.inteligencia},
          {nome: 'vontade', valor: ficha.vontade, atributoChave: ficha.presenca}
        ])

        setDados(ficha.dices)

        setHpe({habilidades: ficha.habilidades, poderes: ficha.poderes, proficiencias: ficha.proficiencias})

        setRituais(ficha.rituais)

      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000);
      }

    }
    
    fetchData()

  }, [])

  return (
    <Container isLoading={isLoading}>
      <Body isLoading={isLoading}>
        {(!isLoading && body == 'principal') && <Principal data={principal}/>}
        {(!isLoading && body == 'status') && <Status data={status} setData={setStatus}/>}
        {(!isLoading && body == 'pericias') && <Pericias data={pericias} setData={setPericias}/>}
        {(!isLoading && body == 'hpe') && <Habilidades data={hpe} setData={setHpe}/>}
        {(!isLoading && body == 'rituais') && <Rituais data={rituais} setData={setRituais}/>}
        {(!isLoading && body == 'dados') && <Dados data={dados} setData={setDados}/>}
      </Body>
      <ToastContainer/>
    </Container>
  );
}