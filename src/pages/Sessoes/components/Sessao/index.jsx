import {Body, Button, Card, Container, Header, HeaderButtons, Img} from './styles'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { Link, useLocation, useParams } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import { toast } from 'react-toastify';
import {api} from '../../../../services/api'
import {useAuth} from '../../../../hooks/auth'
import noportrait from '../../../../assets/imgs/noportrait.png'
import { useState } from 'react';

export function Sessao({data}) {

  const {token} = useAuth()

  return (
    <Container>

      <Header>
        <h1>{data.nome}</h1>
        
        <HeaderButtons>
          <Link
          to={`/sessao/${data.token}`}
          ><BsBoxArrowUpRight size={16} color={'#00ffff'}/></Link>
        </HeaderButtons>
      </Header>

      <Body>
        
        <Card>
          <label>Descrição:</label>
          <hr />
          <span>{data.descricao}</span>
        </Card>

        <Card>
          <label>Participantes:</label>
          <hr />
          <span>{data.participantes.join(', ')}</span>
        </Card>

      </Body>

    </Container>
  );
}