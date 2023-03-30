import { Container, Header} from './styles';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import {IoIosArrowBack} from 'react-icons/io'
import {useFicha} from '../../hooks/ficha'

export function MenuFicha() {

  const {nome} = useFicha()

  return (
    <Container>

      <Header>

        <Link to={'/fichas'}> <IoIosArrowBack size={35} color='white'/> </Link>

        <h1>{nome}</h1>

      </Header>

    </Container >
  );
}