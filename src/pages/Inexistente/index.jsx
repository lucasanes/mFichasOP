import {Container} from './styles'
import Error from '../../assets/imgs/404.png'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Inexistente() {

  const navigate = useNavigate()

  useEffect(() => {

    setTimeout(() => {
      
      navigate('/')

    }, 3000);

  }, [])

  return (
    <Container>
      <div>
        <h1>A página que você está procurando não foi encontrada.</h1>
        <h2>Você pode ter digitado incorretamente o endereço ou estar sem acesso no momento.</h2>
        <h3>Em alguns segundos você será redirecionado para a home do site...</h3>
        <img width={'700px'} src={Error}/>
      </div>
    </Container>
  );
}