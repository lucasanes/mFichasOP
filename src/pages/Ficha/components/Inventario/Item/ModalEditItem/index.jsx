import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../../components/Input'
import {InputImg} from '../../../../../../components/InputImg'
import {TextArea} from '../../../../../../components/TextArea'
import { api } from "../../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../../hooks/auth";
import { Preview } from "../../../../../../components/Preview";

export function ModalEditItem({data, lista, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState(data.nome)
  const [espaco, setespaco] = useState(data.espaco)
  const [prestigio, setprestigio] = useState(data.prestigio)
  const [quantidade, setquantidade] = useState(data.quantidade)
  const [descricao, setdescricao] = useState(data.descricao)
  const [foto, setfoto] = useState(data.foto ? data.foto : '')

  async function updateFichaAPI(e) {

    e.preventDefault()

    const response = await api.post('/', {
      query: 'fichas_info_update',
      sessid: token,
      token: id,
      dados: {
        itens: [{
          id: data.id,
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
      
      const itemAEditar = lista.filter(item => item.id == data.id)[0]

      itemAEditar.nome = nome
      itemAEditar.espaco = espaco
      itemAEditar.prestigio = prestigio
      itemAEditar.quantidade = quantidade
      itemAEditar.descricao = descricao
      itemAEditar.foto = foto

      setModalClose()
      toast.success("Alterado com sucesso!")
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Editar Item</h1>
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