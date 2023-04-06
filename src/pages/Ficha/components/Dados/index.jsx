import {Body, Container, Header} from './styles'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Dado } from './Dado';

export function Dados({data}) {

  return (
    <Container>

      <Header>
        <h1>Dados</h1>
      </Header>

      <hr />

      <Body>
        {data.map(dado => <Dado data={dado} key={dado.id}/>)}  
      </Body>
    </Container>
  );
}