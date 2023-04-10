import { useEffect, useState } from 'react';
import { AtributoButton } from '../../components/AtributoButton';
import { Toggle } from '../../components/Toggle';
import { useAuth } from '../../hooks/auth';
import {Body, Container, DivTitle, SubTitles, Title} from './styles'
import { ToastContainer } from 'react-toastify';

// import { io } from 'socket.io-client';
// const socket = io('http://localhost:8080')

export function Home() {

  // const {token} = useAuth()

  // function newCombate() {
  //   socket.emit("combate", {token, combate: true})
  // }

  document.title = 'mFichasOP'

  return (
    <Container>

      <Body>

        <DivTitle>

          <Title>
            FichasOP
          </Title>

        </DivTitle>

        <SubTitles>O SITE DE FICHAS PARA ORDEM PARANORMAL RPG</SubTitles>
        <SubTitles>O que está esperando? Entre já no mundo de Ordem Paranormal e divirta-se.</SubTitles>

        <AtributoButton agi={5} forca={3} int={3} pre={2} vig={0}/>

      </Body>

      {/* <button onClick={newCombate}>Enviar Socket</button> */}

    </Container>
  );
}