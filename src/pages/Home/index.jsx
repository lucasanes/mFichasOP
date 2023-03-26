import { useEffect, useState } from 'react';
import { AtributoButton } from '../../components/AtributoButton';
import { Toggle } from '../../components/Toggle';
import { useAuth } from '../../hooks/auth';
import {BgTitle, Container, DivTitle, SubTitles, Title} from './styles'

// import { io } from 'socket.io-client';
// const socket = io('http://localhost:8080')

export function Home() {

  // const {token} = useAuth()

  // function newCombate() {
  //   socket.emit("combate", {token, combate: true})
  // }

  return (
    <Container>

      <DivTitle>

        <Title>
          FichasOP
        </Title>

        <BgTitle>
          EasterEgg
        </BgTitle>

      </DivTitle>

      <SubTitles>O SITE DE FICHAS PARA ORDEM PARANORMAL RPG</SubTitles>
      <SubTitles>O que está esperando? Entre já no mundo de Ordem Paranormal e divirta-se.</SubTitles>

      <AtributoButton agi={3} forca={2} int={2} pre={1} vig={1}/>

      {/* <button onClick={newCombate}>Enviar Socket</button> */}

    </Container>
  );
}