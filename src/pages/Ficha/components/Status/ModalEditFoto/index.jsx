import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer } from "react-toastify";
import {Input} from '../../../../../components/Input'
import { api } from "../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";

export function ModalEditFoto({data, setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [foto, setfoto] = useState(data.foto)
  const [foto_ferido, setfoto_ferido] = useState(data.foto_ferido)
  const [foto_insano, setfoto_insano] = useState(data.foto_insano)
  const [foto_insanoeferido, setfoto_insanoeferido] = useState(data.foto_insanoeferido)
  const [foto_morrendo, setfoto_morrendo] = useState(data.foto_morrendo)

  async function updateFichaAPI(e) {

    e.preventDefault()

    const response = await api.post('/', {
      query: 'fichas_info_update',
      sessid: token,
      token: id,
      dados: {
        foto: foto, 
        foto_enlouquecendo: foto_insano, 
        foto_ferido: foto_ferido, 
        foto_morrendo: foto_morrendo, 
        foto_ferenl: foto_insanoeferido, 
      }
    })

    if (response.data.success) {
      setData(prevState => ({
        ...prevState,
        fotos: {
          foto,
          foto_ferido,
          foto_insano,
          foto_insanoeferido,
          foto_morrendo,
        }
      }))
      setModalClose()
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Fotos</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input label={'Normal'} valor={foto} setValor={setfoto}/>
          <Input label={'Ferido'} valor={foto_ferido} setValor={setfoto_ferido}/>
          <Input label={'Insano'} valor={foto_insano} setValor={setfoto_insano}/>
          <Input label={'Insano e Ferido'} valor={foto_insanoeferido} setValor={setfoto_insanoeferido}/>
          <Input label={'Morrendo'} valor={foto_morrendo} setValor={setfoto_morrendo}/>

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