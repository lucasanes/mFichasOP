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
        <img width={'300px'} src={Error}/>
        <h2>A página que você está procurando não foi encontrada.</h2>
        <h3>Você pode ter digitado incorretamente o endereço ou estar sem acesso no momento.</h3>
        <h4>Em alguns segundos você será redirecionado para a home do site...</h4>
      </div>
    </Container>
  );
}