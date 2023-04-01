import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Ficha } from './components/Ficha';
import {Body, Container} from './styles'

// import { io } from 'socket.io-client';
// const socket = io('http://localhost:8080')

export function Fichas() {

  // useEffect(() => {
  
    // function executeUpdateCombate({token, combate}) {
    //   console.log(token, combate)
    // }
    // socket.on(`combate_${token}`, executeUpdateCombate);

  // }, [])

  const [isLoading, setIsLoading] = useState(true)

  const {token, signOut} = useAuth()

  const [fichas, setFichas] = useState([])

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await api.post("/", {query: 'get_fichas', sessid: token})

        console.log(response.data.fichas)
        setFichas(response.data.fichas)

      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000);
      }

    }
    
    fetchData()
  }, [])

  return (
    <Container>

      <Body isLoading={isLoading}>
        {(!isLoading && fichas) && fichas.map((ficha) => <Ficha key={ficha.token} data={ficha}/>)}
      </Body>

    </Container>
  );
}