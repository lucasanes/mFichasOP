import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../components/Input'
import { api } from "../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";

export function ModalInvite({setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState('')

  async function invitePlayer(e) {

    e.preventDefault()

    if (response.data.success) {
      setModalClose()
      toast.success("Convite enviado com sucesso!")
    }

  }

  return (
    <Container>

      <form onSubmit={invitePlayer}>

        <Header>

          <h1>Convidar Jogador</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input name="invite" required maxLength={200} label={'User/Email'} valor={nome} setValor={setnome}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Enviar</button>

        </Footer>

      </form>

    </Container>
  );
}