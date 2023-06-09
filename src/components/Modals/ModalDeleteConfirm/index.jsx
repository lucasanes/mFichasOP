import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Body, Button, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import { Toggle } from "../../Toggle";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { IoClose } from 'react-icons/io5'

export function ModalDeleteConfirm({handleExecute, setModalClose}) {

  return (
    <Container>

      <form onSubmit={handleExecute}>

        <Header>

          <h1>Tem certeza?</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <h2>Ao deletar/desvincular, não será possível reverter.</h2>

        </Body>

        <hr />

        <Footer>

          <Button color={'red'} onClick={setModalClose} type="button">Cancelar</Button>
          <Button type="submit">Confirmar</Button>

        </Footer>

      </form>

    </Container>
  );
}