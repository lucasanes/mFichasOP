import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../components/Input'
import { api } from "../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";
import { TextArea } from "../../../../../components/TextArea";
import { Toggle } from "../../../../../components/Toggle";

export function ModalCreateHabilidade({setDataHabilidade, setDataPoder, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState('')
  const [descricao, setdescricao] = useState('')
  const [isPoder, setIsPoder] = useState(false)

  async function updateFichaAPI(e) {

    e.preventDefault()

    if (!isPoder) {

      const response = await api.post('/', {
        query: 'fichas_info_create',
        sessid: token,
        token: id,
        dados: {
          habilidades: [{
            nome,
            descricao
          }]
        }
      })

      if (response.data.success) {
        setDataHabilidade(prev => [...prev, response.data.habilidade])
        setModalClose()
        toast.success("Criado com sucesso!")
      }

    } else {

      const response = await api.post('/', {
        query: 'fichas_info_create',
        sessid: token,
        token: id,
        dados: {
          poderes: [{
            nome,
            descricao
          }]
        }
      })

      if (response.data.success) {
        setDataPoder(prev => [...prev, response.data.habilidade])
        setModalClose()
        toast.success("Criado com sucesso!")
      }

    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>{!isPoder ? 'Criar Habilidade' : 'Criar Poder'}</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input name="nome" maxLength={50} required label={'Nome'} valor={nome} setValor={setnome}/>
          <TextArea maxLength={5000} required menor label={'Descrição'} valor={descricao} setValor={setdescricao} />
          <Toggle onClick={() => setIsPoder(!isPoder)} span={'Poder paranormal?'} classNumber={1}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>
      

    </Container>
  );
}