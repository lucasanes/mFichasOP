import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../components/Input'
import {InputImg} from '../../../../../components/InputImg'
import {TextArea} from '../../../../../components/TextArea'
import { api } from "../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";
import { Preview } from "../../../../../components/Preview";

export function ModalCreateItem({setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState('')
  const [espaco, setespaco] = useState('')
  const [prestigio, setprestigio] = useState('')
  const [quantidade, setquantidade] = useState('')
  const [descricao, setdescricao] = useState('')
  const [foto, setfoto] = useState( '')

  async function updateFichaAPI(e) {

    e.preventDefault()

    const response = await api.post('/', {
      query: 'fichas_info_create',
      sessid: token,
      token: id,
      dados: {
        itens: [{
          nome,
          espaco,
          prestigio,
          quantidade,
          descricao,
          foto,
        }]
      }
    })

    if (response.data.success) {
      setData(prev => [...prev, response.data.dados.itens[0]])
      setModalClose()
      toast.success("Criado com sucesso!")
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Criar Item</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required maxLength={50} name="nome" label={'Nome'} valor={nome} setValor={setnome}/>
          <Input required min={-10} max={30} type='number' name="categoria" label={'Categoria'} valor={prestigio} setValor={setprestigio}/>
          <Input required min={-10} max={30} step={'0.1'} type='number' name="espaco" label={'Espaços'} valor={espaco} setValor={setespaco}/>
          <Input required min={0} max={30} type='number' name="quantidade" label={'Quantidade'} valor={quantidade} setValor={setquantidade}/>
          <InputImg maxLength={255} label={'Foto'} valor={foto} setValor={setfoto}/>
          
          <TextArea maxLength={300} label={'Descrição'} valor={descricao} setValor={setdescricao}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}