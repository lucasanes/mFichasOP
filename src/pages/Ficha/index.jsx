import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFicha } from '../../hooks/ficha';
import {Body, Container} from './styles'
import {api} from '../../services/api'
import {useAuth} from '../../hooks/auth'

export function Ficha() {

  const {setNome} = useFicha()
  const {token} = useAuth()
  const {id} = useParams()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    setNome('Theo')

    async function fetchData() {

      try {

        const response = await api.post("/", {query: 'get_ficha', sessid: token, token: id})

        console.log(response.data)

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

      </Body>
    </Container>
  );
}