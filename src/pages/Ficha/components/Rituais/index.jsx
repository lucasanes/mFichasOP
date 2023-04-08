import {Body, Button, Container, Header} from './styles'
import { useEffect, useRef, useState } from 'react';
import { Ritual } from './Ritual';

export function Rituais({data, setData}) {
 
  return (
    <Container>

      <Header>
        <h1>Rituais</h1>
      </Header>

      <hr />

      <Body>

        {data.map(ritual => <Ritual key={ritual.id} data={ritual} setData={setData} lista={data}/>)}
       
      </Body>

    </Container>
  );
}