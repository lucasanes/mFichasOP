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

          <Input label={'Nome'} valor={nome} setValor={setnome}/>
          <Input label={'Idade'} valor={idade} setValor={setidade}/>
          <Input label={'Nacionalidade'} valor={nacionalidade} setValor={setnacionalidade}/>
          <Input label={'Origem'} valor={origem} setValor={setorigem}/>
          <Input label={'NEX'} valor={nex} setValor={setnex}/>
          <Input label={'Classe'} valor={classe} setValor={setclasse}/>
          <Input label={'Trilha'} valor={trilha} setValor={settrilha}/>
          <Input label={'Patente'} valor={patente} setValor={setpatente}/>
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