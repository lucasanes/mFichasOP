import {Body, Container, Header} from './styles'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { Dado } from './Dado';

export function Dados({data, setData}) {

  return (
    <Container>

      <Header>
        <h1>Dados</h1>
      </Header>

      <hr />

      <span className='span'><IoMdInformationCircleOutline color='#00ffff' size={20}/>Segure para editar</span>

      <Body>
        {data.map(dado => <Dado data={dado} lista={data} setData={setData} key={dado.token}/>)}  
      </Body>
    </Container>
  );
}