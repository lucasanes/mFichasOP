import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Body, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import { Toggle } from "../../Toggle";
import { api } from "../../../services/api";

export function ModalRecuperarSenha({setModalClose}) {

  const [email, setEmail] = useState('')

  async function handleRecover(e) {

    e.preventDefault()

    const response = await api.post('/', {query: 'account_recovery', email})

    console.log(response)

    if (response.data.success) {
      toast.success(response.data.msg)
    } else {
      toast.error(response.data.msg)
    } 

  }

  return (
    <Container>

      <form onSubmit={handleRecover}>

        <Header>

          <h1>Recuperar Senha</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required minLength={5} maxLength={200} label={'Email'} valor={email} setValor={setEmail}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Recuperar</button>

        </Footer>

      </form>
      

    </Container>
  );
}