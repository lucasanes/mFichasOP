import { useEffect, useState } from 'react';
import {Body, Card, Container, Footer} from './styles'
import {useFicha} from '../../hooks/ficha'
import {useAuth} from '../../hooks/auth'
import {Input} from '../../components/Input'
import {Toggle} from '../../components/Toggle'
import {AtributoInput} from '../../components/AtributoInput'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

export function CriarFicha() {

  const {setNome} = useFicha()

  const {token} = useAuth()

  const [nome, setnome] = useState('')
  const [idade, setidade] = useState(0)
  const [nex, setnex] = useState(0)
  const [nacionalidade, setnacionalidade] = useState('')
  const [origem, setorigem] = useState('')
  const [classe, setclasse] = useState('')
  const [trilha, settrilha] = useState('')
  
  const [agi, setagi] = useState(1)
  const [vig, setvig] = useState(1)
  const [int, setint] = useState(1)
  const [pre, setpre] = useState(1)
  const [forca, setforca] = useState(1)

  const [pvauto, setpvauto] = useState(false)
  const [psauto, setpsauto] = useState(false)
  const [peauto, setpeauto] = useState(false)

  const [pv, setpv] = useState(1)
  const [ps, setps] = useState(1)
  const [pe, setpe] = useState(1)

  const [bonuspv, setbonuspv] = useState(0)
  const [puladospv, setpuladospv] = useState(0)
  const [somapv, setsomapv] = useState(0)

  const [bonusps, setbonusps] = useState(0)
  const [puladosps, setpuladosps] = useState(0)
  const [somaps, setsomaps] = useState(0)

  const [bonuspe, setbonuspe] = useState(0)
  const [puladospe, setpuladospe] = useState(0)
  const [somape, setsomape] = useState(0)

  const {navigate} = useNavigate()

  useEffect(() => {

    setNome('Criar Ficha')

  }, [])

  async function handleCreate(e) {

    e.preventDefault()

    const response = await api.post('/', {
      query: 'fichas_all_create',
      sessid: token,
      nome,
      origem,
      nex,
      classe,
      trilha,
      local: nacionalidade,
      idade,

      agilidade: agi,
      vigor: vig,
      intelecto: int,
      presenca: pre,
      forca,

      pv,
      san: ps,
      pe,

      bpv: bonuspv,
      skippedpv: puladospv,
      somapv: somapv,

      bsan: bonusps,
      skippedsan: puladosps,
      somasan: somaps,

      bpe: bonuspe,
      skippedpe: puladospe,
      somape: somape,
    })

    console.log(response.data)

    if (response.data.success) {
      navigate('/')
      setTimeout(() => {
        toast.success('Ficha criada com sucesso!')
      }, 1000);
    } else {
      toast.error(response.data.msg)
    }

  }

  const nomeRegex = '[a-zA-Z áéíóúãõàèìòùÁÉÍÓÚÃÕÀÈÌÒÙ]{0,50}$'

  return (
    <Container>
      <form onSubmit={handleCreate}>

        <Body>
          
          <Input required minLength={3} maxLength={50} pattern={nomeRegex} name="nome" label={'Nome'} valor={nome} setValor={setnome}/>
          <Input required label={'Idade'} name="idade" type='number' max={9999} min={0} valor={idade} setValor={setidade}/>
          <Input required label={'NEX'} type='number' name="nex" max={100} min={0} valor={nex} setValor={setnex}/>
          <Input required maxLength={50} name="nacionalidade" label={'Nacionalidade'} valor={nacionalidade} setValor={setnacionalidade}/>
          <datalist id="listaOrigens"><option value="Acadêmico" /><option value="Agente de Saúde" /><option value="Amnésico" /><option value="Artista" /><option value="Atleta" /><option value="Chef" /><option value="Crimisoso" /><option value="Cultusta Arrependido" /><option value="Desgarrado" /><option value="Engenheiro" /><option value="Executivo" /><option value="Investigador" /><option value="Lutador" /><option value="Magnata" /><option value="Mercenário" /><option value="Militar" /><option value="Operário" /><option value="Policial" /><option value="Religioso" /><option value="Sevidor Público" /><option value="Teórico da Conspiração" /><option value="T.I." /><option value="Trabalhador Rural" /><option value="Trambiqueiro" /><option value="Universitário" /><option value="Vítima" />
          </datalist>
          <Input required name="origem" maxLength={50} list={'listaOrigens'} label={'Origem'} valor={origem} setValor={setorigem}/>
          <datalist id="listaClasses"><option value="Mundano">Mundano</option><option value="Combatente">Combatente</option><option value="Especialista">Especialista</option><option value="Ocultista">Ocultista</option>
          </datalist>
          <Input required name="classe" maxLength={50} list={'listaClasses'} label={'Classe'} valor={classe} setValor={setclasse}/>
          <datalist id="listaTrilhas">

            {classe == 'Combatente' &&

              <><option value="Aniquilador" />
                <option value="Comandate de campo" />
                <option value="Guerreiro" />
                <option value="Operaçaões especiais" />
                <option value="Tropa de choque" /></>

            }

            {classe == 'Especialista' &&

              <><option value="Atirador de elite" />
                <option value="Infiltrador" />
                <option value="Médico de Campo" />
                <option value="Negociador" />
                <option value="Técnico" /></>

            }

            {classe == 'Ocultista' &&

              <><option value="Conduíte" />
                <option value="Flagelador" />
                <option value="Graduado" />
                <option value="Intuitivo" />
                <option value="Lâmina Paranormal" /></>

            }
          </datalist>
          <Input maxLength={50} name="trilha" list={'listaTrilhas'} label={'Trilha'} valor={trilha} setValor={settrilha}/>

          <AtributoInput agi={agi} forca={forca} int={int} pre={pre} vig={vig} setAgi={setagi} setFor={setforca} setInt={setint} setPre={setpre} setVig={setvig} />
          
          <Card>
            <h1>Vida</h1>
            <hr />
            <div className='body'>
              <Toggle outro classNumber={1} span={'Calculo automático?'} onClick={() => setpvauto(!pvauto)}/>
              {!pvauto ?
                <Input required labelmenor label={'Total'} valor={pv} setValor={setpv}/>
                : <>
                <Input labelmenor label={'Bônus por Nível'} valor={bonuspv} setValor={setbonuspv}/>
                <Input labelmenor label={'Níveis Pulados'} valor={puladospv} setValor={setpuladospv}/>
                <Input labelmenor label={'Soma no Total'} valor={somapv} setValor={setsomapv}/>
              </>}
            </div>
          </Card>

          <Card>
            <h1>Sanidade</h1>
            <hr />
            <div className='body'>
              <Toggle outro classNumber={2} span={'Calculo automático?'} onClick={() => setpsauto(!psauto)}/>
              {!psauto ?
                <Input required labelmenor label={'Total'} valor={ps} setValor={setps}/>
                :<>
                <Input labelmenor label={'Bônus por Nível'} valor={bonusps} setValor={setbonusps}/>
                <Input labelmenor label={'Níveis Pulados'} valor={puladosps} setValor={setpuladosps}/>
                <Input labelmenor label={'Soma no Total'} valor={somaps} setValor={setsomaps}/>
              </>}
            </div>
          </Card>

          <Card>
            <h1>Esforço</h1>
            <hr />
            <div className='body'>
              <Toggle outro classNumber={3} span={'Calculo automático?'} onClick={() => setpeauto(!peauto)}/>
              {!peauto ?
                <Input required labelmenor label={'Total'} valor={pe} setValor={setpe}/>
                : <>
                <Input labelmenor label={'Bônus por Nível'} valor={bonuspe} setValor={setbonuspe}/>
                <Input labelmenor label={'Níveis Pulados'} valor={puladospe} setValor={setpuladospe}/>
                <Input labelmenor label={'Soma no Total'} valor={somape} setValor={setsomape}/>
              </>}
            </div>
          </Card>

        </Body>

        <hr />

        <Footer>
          <button type="submit">Criar</button>
        </Footer>

      </form>
    </Container>
  );
}