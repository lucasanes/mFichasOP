import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Body, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import { Toggle } from "../../Toggle";

export function ModalRecuperarSenha({setModalClose}) {

  const [email, setEmail] = useState(null)

  return (
    <Container>

      <Header>

        <h1>Recuperar Senha</h1>
        <button onClick={setModalClose}>x</button>

      </Header>

      <hr />

      <Body>

        <Input label={'Email'} valor={email} setValor={setEmail}/>

      </Body>

      <hr />

      <Footer>

        <button>Recuperar</button>

      </Footer>

    </Container>
  );
}