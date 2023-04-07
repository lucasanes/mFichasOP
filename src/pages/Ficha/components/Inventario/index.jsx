import {Body, Button, Container, Header} from './styles'
import { useEffect, useRef, useState } from 'react';
import { Item } from './Item';
import { Arma } from './Arma';

export function Inventario({data, setData}) {
 
  return (
    <Container>

      <Header>
        <h1>Inventário</h1>
      </Header>

      <hr />

      <Body>

        {data.itens.map(item => <Item key={item.id} data={item}/>)}
        {data.armas.map(arma => <Arma key={arma.id} data={arma}/>)}
       
      </Body>

    </Container>
  );
}