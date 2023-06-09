import React, { useEffect, useState } from "react";
import { Body, Button, Container, Footer, Header, MiniHeader } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../components/Input'
import {TextArea} from '../../../../../components/TextArea'
import { api } from "../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";
import {AtributoInput} from '../../../../../components/AtributoInput'
import uuid from "react-uuid";

export function ModalCreateNPC({setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [miniBody, setMiniBody] = useState(1)

  const [nome, setnome] = useState('')
  const [pv, setpv] = useState(0)
  const [ps, setps] = useState(0)
  const [pe, setpe] = useState(0)

  const [int, setint] = useState(0)
  const [vig, setvig] = useState(0)
  const [forca, setforca] = useState(0)
  const [pre, setpre] = useState(0)
  const [agi, setagi] = useState(0)

  const [acrobacia, setacrobacia] = useState(0)
  const [adestramento, setadestramento] = useState(0)
  const [arte, setarte] = useState(0)
  const [atletismo, setatletismo] = useState(0)
  const [atualidade, setatualidade] = useState(0)
  const [ciencia, setciencia] = useState(0)
  const [crime, setcrime] = useState(0)
  const [diplomacia, setdiplomacia] = useState(0)
  const [enganacao, setenganacao] = useState(0)
  const [fortitude, setfortitude] = useState(0)
  const [furtividade, setfurtividade] = useState(0)
  const [iniciativa, setiniciativa] = useState(0)
  const [intimidacao, setintimidacao] = useState(0)
  const [intuicao, setintuicao] = useState(0)
  const [investigacao, setinvestigacao] = useState(0)
  const [luta, setluta] = useState(0)
  const [medicina, setmedicina] = useState(0)
  const [ocultismo, setocultismo] = useState(0)
  const [percepcao, setpercepcao] = useState(0)
  const [pilotagem, setpilotagem] = useState(0)
  const [pontaria, setpontaria] = useState(0)
  const [profissao, setprofissao] = useState(0)
  const [reflexo, setreflexo] = useState(0)
  const [religiao, setreligiao] = useState(0)
  const [sobrevivencia, setsobrevivencia] = useState(0)
  const [tatica, settatica] = useState(0)
  const [tecnologia, settecnologia] = useState(0)
  const [vontade, setvontade] = useState(0)
  
  const [passiva, setpassiva] = useState(0)
  const [esquiva, setesquiva] = useState(0)
  const [mental, setmental] = useState(0)
  const [morte, setmorte] = useState(0)
  const [energia, setenergia] = useState(0)
  const [fisica, setfisica] = useState(0)
  const [sangue, setsangue] = useState(0)
  const [conhecimento, setconhecimento] = useState(0)
  const [balistica, setbalistica] = useState(0)
  
  const [ataques, setataques] = useState('')
  const [habilidades, sethabilidades] = useState('')
  const [detalhes, setdetalhes] = useState('')

  async function updateFichaAPI(e) {

    e.preventDefault()

    setData(prev => [...prev,
      {
        token: uuid(),
        nome,
        status: {pvA: pv, pv: pv, psA: ps, ps: ps, peA: pe, pe: pe},
        atributos: {forca, agi, int, vig, pre,},
        pericias: {
          acrobacia, adestramento, arte, atletismo, atualidade, ciencia, crime, diplomacia, enganacao, fortitude, furtividade, iniciativa, intimidacao, 
          intuicao, investigacao, luta, medicina, ocultismo, percepcao, pilotagem, pontaria, profissao, reflexo, religiao, sobrevivencia, tatica, tecnologia, 
          vontade
        },
        defesas: {passiva, esquiva, mental,},
        res: {morte, energia, fisica, sangue, conhecimento, balistica,},
        outros: {ataques, habilidades,  detalhes}
      }
    ])

    setModalClose()
    toast.success("Criado com sucesso!")

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Criar NPC</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <MiniHeader>
          <div>
            <Button hover={miniBody == 1} type="button" onClick={() => setMiniBody(1)}>Principal</Button>
            <Button hover={miniBody == 2} type="button" onClick={() => setMiniBody(2)}>Atributos</Button>
            <Button hover={miniBody == 3} type="button" onClick={() => setMiniBody(3)}>Perícias</Button>
          </div>

          <div>
            <Button hover={miniBody == 4} type="button" onClick={() => setMiniBody(4)}>Defesas</Button>
            <Button hover={miniBody == 5} type="button" onClick={() => setMiniBody(5)}>Outros</Button>
          </div>
        </MiniHeader>

        <hr />

        <Body>

          {miniBody == 1 ? <>
          
            <Input label={'Nome'} valor={nome} setValor={setnome}/>
            <Input label={'Pontos de Vida'} valor={pv} setValor={setpv}/>
            <Input label={'Pontos de Sanidade'} valor={ps} setValor={setps}/>
            <Input label={'Pontos de Esforço'} valor={pe} setValor={setpe}/>
          
          </> : miniBody == 2 ? 
          
            <AtributoInput vig={vig} agi={agi} forca={forca} int={int} pre={pre} setAgi={setagi} 
            setFor={setforca} setInt={setint} setPre={setpre} setVig={setvig}/>
          
          : miniBody == 3 ? <>

            <div className="grid2">
          
              <Input type='number' min={0} max={99} label={'Acrobacia'} valor={acrobacia} setValor={setacrobacia}/>
              <Input type='number' min={0} max={99} label={'Adestramento'} valor={adestramento} setValor={setadestramento}/>
              <Input type='number' min={0} max={99} label={'Artes'} valor={arte} setValor={setarte}/>
              <Input type='number' min={0} max={99} label={'Atletismo'} valor={atletismo} setValor={setatletismo}/>
              <Input type='number' min={0} max={99} label={'Atualidades'} valor={atualidade} setValor={setatualidade}/>
              <Input type='number' min={0} max={99} label={'Ciências'} valor={ciencia} setValor={setciencia}/>
              <Input type='number' min={0} max={99} label={'Crime'} valor={crime} setValor={setcrime}/>
              <Input type='number' min={0} max={99} label={'Diplomacia'} valor={diplomacia} setValor={setdiplomacia}/>
              <Input type='number' min={0} max={99} label={'Enganação'} valor={enganacao} setValor={setenganacao}/>
              <Input type='number' min={0} max={99} label={'Fortitude'} valor={fortitude} setValor={setfortitude}/>
              <Input type='number' min={0} max={99} label={'Furtividade'} valor={furtividade} setValor={setfurtividade}/>
              <Input type='number' min={0} max={99} label={'Iniciativa'} valor={iniciativa} setValor={setiniciativa}/>
              <Input type='number' min={0} max={99} label={'Intimidação'} valor={intimidacao} setValor={setintimidacao}/>
              <Input type='number' min={0} max={99} label={'Intuição'} valor={intuicao} setValor={setintuicao}/>
              <Input type='number' min={0} max={99} label={'Investigação'} valor={investigacao} setValor={setinvestigacao}/>
              <Input type='number' min={0} max={99} label={'Luta'} valor={luta} setValor={setluta}/>
              <Input type='number' min={0} max={99} label={'Medicina'} valor={medicina} setValor={setmedicina}/>
              <Input type='number' min={0} max={99} label={'Ocultismo'} valor={ocultismo} setValor={setocultismo}/>
              <Input type='number' min={0} max={99} label={'Percepção'} valor={percepcao} setValor={setpercepcao}/>
              <Input type='number' min={0} max={99} label={'Pilotagem'} valor={pilotagem} setValor={setpilotagem}/>
              <Input type='number' min={0} max={99} label={'Pontaria'} valor={pontaria} setValor={setpontaria}/>
              <Input type='number' min={0} max={99} label={'Profissão'} valor={profissao} setValor={setprofissao}/>
              <Input type='number' min={0} max={99} label={'Reflexos'} valor={reflexo} setValor={setreflexo}/>
              <Input type='number' min={0} max={99} label={'Religião'} valor={religiao} setValor={setreligiao}/>
              <Input type='number' min={0} max={99} label={'Sobrevivência'} valor={sobrevivencia} setValor={setsobrevivencia}/>
              <Input type='number' min={0} max={99} label={'Tática'} valor={tatica} setValor={settatica}/>
              <Input type='number' min={0} max={99} label={'Tecnologia'} valor={tecnologia} setValor={settecnologia}/>
              <Input type='number' min={0} max={99} label={'Vontade'} valor={vontade} setValor={setvontade}/>

            </div>
          
          </> : miniBody == 4 ? <>
          
            <div className="grid2">
            
              <Input type='number' min={0} max={99} label={'Passiva'} valor={passiva} setValor={setpassiva}/>
              <Input type='number' min={0} max={99} label={'Esquiva'} valor={esquiva} setValor={setesquiva}/>
              <Input type='number' min={0} max={99} label={'Sanidade'} valor={mental} setValor={setmental}/>
            
            </div>

            <hr />

            <div className="grid2">
            
              <Input type='number' min={0} max={99} label={'Física'} valor={fisica} setValor={setfisica}/>
              <Input type='number' min={0} max={99} label={'Balística'} valor={balistica} setValor={setbalistica}/>
              <Input type='number' min={0} max={99} label={'Conhecimento'} valor={conhecimento} setValor={setconhecimento}/>
              <Input type='number' min={0} max={99} label={'Energia'} valor={energia} setValor={setenergia}/>
              <Input type='number' min={0} max={99} label={'Sangue'} valor={sangue} setValor={setsangue}/>
              <Input type='number' min={0} max={99} label={'Morte'} valor={morte} setValor={setmorte}/>

            </div>
          
          
          </> : <>
          
            <TextArea style={{marginBottom: '2rem'}} label={'Ataques'} valor={ataques} setValor={setataques}/>
            <TextArea style={{marginBottom: '2rem'}} label={'Habilidades'} valor={habilidades} setValor={sethabilidades}/>
            <TextArea label={'Detalhes'} valor={detalhes} setValor={setdetalhes}/>
          
          </>}


        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>
      

    </Container>
  );
}