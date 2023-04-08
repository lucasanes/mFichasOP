import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer } from "react-toastify";
import {Input} from '../../../../../components/Input'
import { api } from "../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";

export function ModalEditPrincipal({data, setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState(data.nome)
  const [idade, setidade] = useState(data.idade)
  const [nacionalidade, setnacionalidade] = useState(data.nacionalidade)
  const [origem, setorigem] = useState(data.origem)
  const [nex, setnex] = useState(data.nex)
  const [classe, setclasse] = useState(data.classe)
  const [trilha, settrilha] = useState(data.trilha)
  const [patente, setpatente] = useState(data.patente)
  const [prestigio, setprestigio] = useState(data.prestigio)
  const [deslocamento, setdeslocamento] = useState(data.deslocamento)
  const [peprod, setpeprod] = useState(data.peprod)
  const [afinidade, setafinidade] = useState(data.afinidade)

  async function updateFichaAPI(e) {

    e.preventDefault()

    const response = await api.post('/', {
      query: 'fichas_info_update',
      sessid: token,
      token: id,
      dados: {
        nome: nome,
        classe: classe,
        idade: idade,
        local: nacionalidade,
        patente: patente,
        nex: nex,
        origem: origem,
        pe_rodada: peprod,
        trilha: trilha,
        pp: prestigio,
        deslocamento: deslocamento,
        afinidade: afinidade,
      }
    })

    if (response.data.success) {
      setData(prevState => ({
        ...prevState,
        infos: {
          nome,
          usuario: data.usuario,
          classe,
          idade,
          nacionalidade,
          patente,
          nex,
          origem,
          peprod,
          trilha,
          prestigio,
          deslocamento,
          afinidade
        }
      }))
      setModalClose()
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Informações</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required label={'Nome'} valor={nome} setValor={setnome}/>
          <Input label={'Idade'} valor={idade} setValor={setidade}/>
          <Input required label={'Nacionalidade'} valor={nacionalidade} setValor={setnacionalidade}/>
          <datalist id="listaOrigens"><option value="Acadêmico" /><option value="Agente de Saúde" /><option value="Amnésico" /><option value="Artista" /><option value="Atleta" /><option value="Chef" /><option value="Crimisoso" /><option value="Cultusta Arrependido" /><option value="Desgarrado" /><option value="Engenheiro" /><option value="Executivo" /><option value="Investigador" /><option value="Lutador" /><option value="Magnata" /><option value="Mercenário" /><option value="Militar" /><option value="Operário" /><option value="Policial" /><option value="Religioso" /><option value="Sevidor Público" /><option value="Teórico da Conspiração" /><option value="T.I." /><option value="Trabalhador Rural" /><option value="Trambiqueiro" /><option value="Universitário" /><option value="Vítima" />
          </datalist>
          <Input required list={'listaOrigens'} label={'Origem'} valor={origem} setValor={setorigem}/>
          <Input label={'NEX'} valor={nex} setValor={setnex}/>
          <datalist id="listaClasses"><option value="Mundano">Mundano</option><option value="Combatente">Combatente</option><option value="Especialista">Especialista</option><option value="Ocultista">Ocultista</option>
          </datalist>
          <Input required list={'listaClasses'} label={'Classe'} valor={classe} setValor={setclasse}/>
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
          <Input required list={'listaTrilhas'} label={'Trilha'} valor={trilha} setValor={settrilha}/>
          <datalist id="listaPatentes"><option value="Recruta">Recruta</option><option value="Operador" >Operador</option><option value="Agente Especial" >Agente Especial</option><option value="Oficial de Operações" >Oficial de Operações</option><option value="Agente de Elite" >Agente de Elite</option></datalist>
          <Input list={'listaPatentes'} label={'Patente'} valor={patente} setValor={setpatente}/>
          <Input label={'Pontos de Prestígio'} valor={prestigio} setValor={setprestigio}/>
          <Input label={'Deslocamento'} valor={deslocamento} setValor={setdeslocamento}/>
          <Input label={'PE/Rod'} valor={peprod} setValor={setpeprod}/>
          <Input opcional label={'Afinidade'} valor={afinidade} setValor={setafinidade}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>
      <ToastContainer/>

    </Container>
  );
}