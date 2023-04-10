import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../components/Input'
import { api } from "../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";
import { InputImg } from "../../../../../components/InputImg";

export function ModalEditFoto({data, setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [foto, setfoto] = useState(data.foto)
  const [fotoFile, setfotoFile] = useState(undefined)

  const [foto_ferido, setfoto_ferido] = useState(data.foto_ferido)
  const [foto_feridoFile, setfoto_feridoFile] = useState(undefined)

  const [foto_insano, setfoto_insano] = useState(data.foto_insano)
  const [foto_insanoFile, setfoto_insanoFile] = useState(undefined)

  const [foto_insanoeferido, setfoto_insanoeferido] = useState(data.foto_insanoeferido)
  const [foto_insanoeferidoFile, setfoto_insanoeferidoFile] = useState(undefined)

  const [foto_morrendo, setfoto_morrendo] = useState(data.foto_morrendo)
  const [foto_morrendoFile, setfoto_morrendoFile] = useState(undefined)

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
      toast.success("Alterado com sucesso!")
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

          <InputImg id={1} maxLength={255} label={'Normal'} valor={foto} setValor={setfoto}/>
          <div className="preview">
            <span>Preview:</span>
            <img src={foto} width={'50px'}/>
          </div>
          <InputImg id={2} maxLength={255} label={'Ferido'} valor={foto_ferido} setValor={setfoto_ferido}/>
          <div className="preview">
            <span>Preview:</span>
            <img src={foto_ferido} width={'50px'}/>
          </div>
          <InputImg id={3} maxLength={255} label={'Insano'} valor={foto_insano} setValor={setfoto_insano}/>
          <div className="preview">
            <span>Preview:</span>
            <img src={foto_insano} width={'50px'}/>
          </div>
          <InputImg id={4} maxLength={255} label={'Insano e Ferido'} valor={foto_insanoeferido} setValor={setfoto_insanoeferido}/>
          <div className="preview">
            <span>Preview:</span>
            <img src={foto_insanoeferido} width={'50px'}/>
          </div>
          <InputImg id={5} maxLength={255} label={'Morrendo'} valor={foto_morrendo} setValor={setfoto_morrendo}/>
          <div className="preview">
            <span>Preview:</span>
            <img src={foto_morrendo} width={'50px'}/>
          </div>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}