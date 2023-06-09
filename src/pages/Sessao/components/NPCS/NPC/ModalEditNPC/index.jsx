import React, { useEffect, useState } from "react";
import { Body, Button, Container, Footer, Header, MiniHeader } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../../components/Input'
import {TextArea} from '../../../../../../components/TextArea'
import { api } from "../../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../../hooks/auth";
import {AtributoInput} from '../../../../../../components/AtributoInput'
import uuid from "react-uuid";

export function ModalEditNPC({data, setPv, setPs, setPe, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [miniBody, setMiniBody] = useState(1)

  const [nome, setnome] = useState(data.nome)
  const [pv, setpv] = useState(data.status.pv)
  const [ps, setps] = useState(data.status.ps)
  const [pe, setpe] = useState(data.status.pe)

  const [int, setint] = useState(data.atributos.int)
  const [vig, setvig] = useState(data.atributos.vig)
  const [forca, setforca] = useState(data.atributos.forca)
  const [pre, setpre] = useState(data.atributos.pre)
  const [agi, setagi] = useState(data.atributos.agi)

  const [acrobacia, setacrobacia] = useState(data.pericias.acrobacia)
  const [adestramento, setadestramento] = useState(data.pericias.adestramento)
  const [arte, setarte] = useState(data.pericias.arte)
  const [atletismo, setatletismo] = useState(data.pericias.atletismo)
  const [atualidade, setatualidade] = useState(data.pericias.atualidade)
  const [ciencia, setciencia] = useState(data.pericias.ciencia)
  const [crime, setcrime] = useState(data.pericias.crime)
  const [diplomacia, setdiplomacia] = useState(data.pericias.diplomacia)
  const [enganacao, setenganacao] = useState(data.pericias.enganacao)
  const [fortitude, setfortitude] = useState(data.pericias.fortitude)
  const [furtividade, setfurtividade] = useState(data.pericias.furtividade)
  const [iniciativa, setiniciativa] = useState(data.pericias.iniciativa)
  const [intimidacao, setintimidacao] = useState(data.pericias.intimidacao)
  const [intuicao, setintuicao] = useState(data.pericias.intuicao)
  const [investigacao, setinvestigacao] = useState(data.pericias.investigacao)
  const [luta, setluta] = useState(data.pericias.luta)
  const [medicina, setmedicina] = useState(data.pericias.medicina)
  const [ocultismo, setocultismo] = useState(data.pericias.ocultismo)
  const [percepcao, setpercepcao] = useState(data.pericias.percepcao)
  const [pilotagem, setpilotagem] = useState(data.pericias.pilotagem)
  const [pontaria, setpontaria] = useState(data.pericias.pontaria)
  const [profissao, setprofissao] = useState(data.pericias.profissao)
  const [reflexo, setreflexo] = useState(data.pericias.reflexo)
  const [religiao, setreligiao] = useState(data.pericias.religiao)
  const [sobrevivencia, setsobrevivencia] = useState(data.pericias.sobrevivencia)
  const [tatica, settatica] = useState(data.pericias.tatica)
  const [tecnologia, settecnologia] = useState(data.pericias.tecnologia)
  const [vontade, setvontade] = useState(data.pericias.vontade)
  
  const [passiva, setpassiva] = useState(data.defesas.passiva)
  const [esquiva, setesquiva] = useState(data.defesas.esquiva)
  const [mental, setmental] = useState(data.defesas.mental)
  const [morte, setmorte] = useState(data.res.morte)
  const [energia, setenergia] = useState(data.res.energia)
  const [fisica, setfisica] = useState(data.res.fisica)
  const [sangue, setsangue] = useState(data.res.sangue)
  const [conhecimento, setconhecimento] = useState(data.res.conhecimento)
  const [balistica, setbalistica] = useState(data.res.balistica)
  
  const [ataques, setataques] = useState(data.outros.ataques)
  const [habilidades, sethabilidades] = useState(data.outros.habilidades)
  const [detalhes, setdetalhes] = useState(data.outros.detalhes)

  async function updateFichaAPI(e) {

    e.preventDefault()

    data.nome = nome 
    data.status.pv = pv 
    data.status.ps = ps 
    data.status.pe = pe 
    data.atributos.int = int 
    data.atributos.vig = vig 
    data.atributos.forca = forca 
    data.atributos.pre = pre 
    data.atributos.agi = agi 
    data.pericias.acrobacia = acrobacia 
    data.pericias.adestramento = adestramento 
    data.pericias.arte = arte 
    data.pericias.atletismo = atletismo 
    data.pericias.atualidade = atualidade 
    data.pericias.ciencia = ciencia 
    data.pericias.crime = crime 
    data.pericias.diplomacia = diplomacia 
    data.pericias.enganacao = enganacao 
    data.pericias.fortitude = fortitude 
    data.pericias.furtividade = furtividade 
    data.pericias.iniciativa = iniciativa 
    data.pericias.intimidacao = intimidacao 
    data.pericias.intuicao = intuicao 
    data.pericias.investigacao = investigacao 
    data.pericias.luta = luta 
    data.pericias.medicina = medicina 
    data.pericias.ocultismo = ocultismo 
    data.pericias.percepcao = percepcao 
    data.pericias.pilotagem = pilotagem 
    data.pericias.pontaria = pontaria 
    data.pericias.profissao = profissao 
    data.pericias.reflexo = reflexo 
    data.pericias.religiao = religiao 
    data.pericias.sobrevivencia = sobrevivencia 
    data.pericias.tatica = tatica 
    data.pericias.tecnologia = tecnologia 
    data.pericias.vontade = vontade 
    data.defesas.passiva = passiva 
    data.defesas.esquiva = esquiva 
    data.defesas.mental = mental 
    data.res.morte = morte 
    data.res.energia = energia 
    data.res.fisica = fisica 
    data.res.sangue = sangue 
    data.res.conhecimento = conhecimento 
    data.res.balistica = balistica 
    data.outros.ataques = ataques 
    data.outros.habilidades = habilidades 
    data.outros.detalhes = detalhes 

    setPv(pv)
    setPs(ps)
    setPe(pe)

    setModalClose()
    toast.success("Criado com sucesso!")

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Editar NPC</h1>
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