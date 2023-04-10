import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../../components/Input'
import { api } from "../../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../../hooks/auth";
import { TextArea } from "../../../../../../components/TextArea";

export function ModalEditHabilidade({lista, data, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState(data.nome)
  const [descricao, setdescricao] = useState(data.descricao)

  async function updateFichaAPI(e) {

    e.preventDefault()

    const response = await api.post('/', {
      query: 'fichas_info_update',
      sessid: token,
      token: id,
      dados: {
        habilidades: [{
          id: data.id,
          nome,
          descricao
        }]
      }
    })

    if (response.data.success) {
      const habilidadaAEditar = lista.filter(habilidade => habilidade.id == data.id)[0]
      habilidadaAEditar.nome = nome
      habilidadaAEditar.descricao = descricao
      setModalClose()
      toast.success("Alterado com sucesso!")
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Editar Habilidade</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input maxLength={50} required label={'Nome'} valor={nome} setValor={setnome}/>
          <TextArea maxLength={5000} required menor label={'Descrição'} valor={descricao} setValor={setdescricao} />

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