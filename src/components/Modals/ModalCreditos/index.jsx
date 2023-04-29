import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Body, Container, Header, Title } from "./styles";

export function ModalCreditos({setModalClose}) {

  return (
    <Container>

      <Header>

        <h1>Créditos</h1>
        <button onClick={setModalClose}>x</button>

      </Header>

      <hr />

      <Body>

        <Title>Equipe FichasOP</Title>
 
        <ul>
          <li><strong>Lucas</strong> — Fundador/Desenvolvedor</li>
          <li><strong>Lightz</strong> — Desenvolvedor App</li>
          <li><strong>Pedro</strong> — Responsável pelo Discord e Design</li>
          <li><strong>Bag</strong> — Staff Discord</li>
          <li><strong>May</strong> — Staff Discord</li>
          <li><strong>Jotavi</strong> — Staff Discord</li>
          <li><strong>Botanic</strong> — Staff Discord</li>
          <li><strong>Gold</strong> — Staff Discord</li>
          <li><strong>Leo</strong> — Ex Staff Discord</li>
          <li><strong>Zin</strong> — Ex Staff Discord</li>
        </ul>

      </Body>

    </Container>
  );
}