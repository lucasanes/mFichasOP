import { useEffect, useState } from 'react'
import {Button, Container} from './styles'
import {BiTrash} from 'react-icons/bi'
import { HiBarsArrowDown, HiBarsArrowUp } from 'react-icons/hi2'

export function Iniciativa({lista, setLista, data, setPrecisaSalvar}) {

  const [nome, setnome] = useState(data.nome)
  const [ini, setini] = useState(data.iniciativa)
  const [dano, setdano] = useState(data.dano)

  async function handleDelete() {

    const novaLista = lista.filter(iniciativa => iniciativa.token != data.token)
    setLista(novaLista)

    for (let i = data.posicao; i < lista.length; i++) {
      lista[i].posicao -= 1
    }

    setPrecisaSalvar(true)

  }

  async function handleUp() {

    if (data.posicao != 1) {

      function changePosition(arr, from, to) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
        return arr;
      };

      lista[data.posicao - 2].posicao = data.posicao
      lista[data.posicao - 1].posicao = data.posicao - 1
      const iniciativasAtualizadas = changePosition(lista, data.posicao, data.posicao - 1)

      const iniciativasA = iniciativasAtualizadas.map(iniciativa => iniciativa)

      setLista(iniciativasA)

      setPrecisaSalvar(true)

    }

  }

  async function handleDown() {

    if (data.posicao != lista.length) {

      function changePosition(arr, from, to) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
        return arr;
      };

      lista[data.posicao].posicao = data.posicao
      lista[data.posicao - 1].posicao = data.posicao + 1
      const iniciativasAtualizadas = changePosition(lista, data.posicao - 2, data.posicao - 1)

      const iniciativasA = iniciativasAtualizadas.map(iniciativa => iniciativa)

      setLista(iniciativasA)

      setPrecisaSalvar(true)

    }

  }

  return (
    <Container>
      <Button onClick={handleUp} color={'aqua'}><HiBarsArrowUp color='#00f7ff' size={20}/></Button>
      <span>{data.posicao}</span>
      <input className='no' value={nome} onChange={(e) => {
        e.target.value.length < 30 && setnome(e.target.value);
        setPrecisaSalvar(true)
      }}/>
      <input className='in' type='number' value={ini} onChange={(e) => {
        e.target.value < 100 && setini(e.target.value);
        setPrecisaSalvar(true)
      }}/>
      <input className='da' type='number' value={dano} onChange={(e) => {
        e.target.value < 10000 && setdano(e.target.value);
        setPrecisaSalvar(true)
      }}/>
      <Button onClick={handleDown} color={'aqua'}><HiBarsArrowDown color='#00f7ff' size={20}/></Button>
      <Button onClick={handleDelete} color={'red'}><BiTrash size={17} color='#ff0000'/></Button>
    </Container>
  );
}