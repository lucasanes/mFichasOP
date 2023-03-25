import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Toggle } from "../../Toggle";
import { Body, Container, Header } from "./styles";

export function ModalDoar({setModalClose}) {

  return (
    <Container>

      <Header>

        <h1>Doação</h1>
        <button onClick={setModalClose}>x</button>

      </Header>

      <hr />

      <Body>

        <p><strong>Pix</strong>  <br /> <br />
        Lucas Daniel de Freitas Pinheiro <br />
        <u>d14f80f4-1567-4268-80d6-0abf7e572454</u>  <br /> <br />
        <strong>APOIA.se</strong>  <br /> <br />
        Caso queira ajudar o projeto a evoluir, <a href="https://apoia.se/fichasop">clique aqui.</a> </p> 

      </Body>

    </Container>
  );
}