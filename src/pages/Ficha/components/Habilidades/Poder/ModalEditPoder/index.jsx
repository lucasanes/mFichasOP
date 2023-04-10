import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../../components/Input'
import { api } from "../../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../../hooks/auth";
import { TextArea } from "../../../../../../components/TextArea";

export function ModalEditPoder({data, lista, setModalClose}) {

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
        poderes: [{
          id: data.id,
          nome,
          descricao,
        }]
      }
    })

    if (response.data.success) {
      const poderAEditar = lista.filter(poder => poder.id == data.id)[0]
      poderAEditar.nome = nome
      poderAEditar.descricao = descricao
      toast.success("Alterado com sucesso!")
      setModalClose()
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Editar Poder</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input maxLength={50} required label={'Nome'} valor={nome} setValor={setnome}/>
          <TextArea maxLength={5000} menor required label={'Descrição'} valor={descricao} setValor={setdescricao} />

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