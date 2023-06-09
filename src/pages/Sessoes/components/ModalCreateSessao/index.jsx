import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../components/Input'
import { api } from "../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../hooks/auth";
import { TextArea } from "../../../../components/TextArea";

export function ModalCreateSessao({setSessoes, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState('')
  const [descricao, setdescricao] = useState('')

  async function updateFichaAPI(e) {

    e.preventDefault()

    // const response = await api.post('/', {
    //   query: 'fichas_info_create',
    //   sessid: token,
    //   token: id,
      
    // })
    
    if (response.data.success) {
      setSessoes(prev => [...prev, {token: 1, nome, descricao}])
      setModalClose()
      toast.success("Criado com sucesso!")
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Criar Sessão</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input name="nome" maxLength={50} required label={'Nome'} valor={nome} setValor={setnome}/>
          <TextArea maxLength={5000} required menor label={'Descrição'} valor={descricao} setValor={setdescricao} />

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>
      

    </Container>
  );
}