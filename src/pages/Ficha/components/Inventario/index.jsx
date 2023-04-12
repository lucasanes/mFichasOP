import {Body, Button, Container, Header} from './styles'
import { useEffect, useRef, useState } from 'react';
import { Item } from './Item';
import { Arma } from './Arma';
import { ButtonCreateHeader } from '../../../../components/ButtonCreateHeader';

export function Inventario({data, setData}) {

  const [miniBody, setMiniBody] = useState('armas')

  const [armas, setArmas] = useState(ordenarPor('nome', data.armas))
  const [itens, setItens] = useState(ordenarPor('nome', data.itens))

  const [modalCreateArmaIsOpen, setModalCreateArmaIsOpen] = useState(false)
  const [modalCreateItemIsOpen, setModalCreateItemIsOpen] = useState(false)

  function ordenarPor(item, array) {
    return array.sort(function(a, b) {
      var itemA = a[item].toLowerCase();
      var itemB = b[item].toLowerCase();
      if (itemA < itemB) {
        return -1;
      }
      if (itemA > itemB) {
        return 1;
      }
      return 0;
    });
  }

  useEffect(() => {

    setArmas(ordenarPor('nome', data.armas))
    setItens(ordenarPor('nome', data.itens))

  }, [data.armas, data.itens])

  console.log(data)
 
  return (
    <Container>

      <Header>
        <Button hover={miniBody == 'armas'} onClick={() => setMiniBody('armas')}>Armas</Button>
        <Button hover={miniBody == 'itens'} onClick={() => setMiniBody('itens')}>Itens</Button>
        <ButtonCreateHeader onClick={() => {miniBody == 'armas' ? setModalCreateArmaIsOpen(true) : setModalCreateItemIsOpen(true)}} />
      </Header>

      <hr />

      <Body>

        {armas.map(arma => <Arma lista={armas} setData={setArmas} style={{display: miniBody != 'armas' && 'none'}} key={arma.id} data={arma}/>)}
        {itens.map(item => <Item lista={itens} setData={setItens} style={{display: miniBody != 'itens' && 'none'}} key={item.id} data={item}/>)}
       
      </Body>

    </Container>
  );
}