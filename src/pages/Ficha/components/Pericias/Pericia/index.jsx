import { useEffect, useState } from 'react'
import {Button, Container} from './styles'
import { FaDiceD20 } from 'react-icons/fa'
import pericias from '../../../../../components/mappers/pericias/pericias'
import {Modal} from '../../../../../components/Modals/Modal'
import {ModalDadoRolado} from '../../../../../components/Modals/ModalDadoRolado'
import { useFicha } from '../../../../../hooks/ficha'

export function Pericia({data}) {

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [dataDado, setDataDado] = useState({})
  const [level, setLevel] = useState('nt')

  const {blockPerm} = useFicha()

  useEffect(() => {

    if (data.valor < 5) {
      setLevel('nt')
    } else if (data.valor >= 5 && data.valor < 10) {
      setLevel('t')
    } else if (data.valor >= 10 && data.valor < 15) {
      setLevel('v')
    } else if (data.valor >= 15){
      setLevel('e')
    }

  }, [])

  let dados = []
  if (data.atributoChave == 0) {
    for (let i = 0; i < 2; i++) {
      dados[i] = <FaDiceD20 key={i} size={20}/>
    }
  } else {

    let b = data.atributoChave
    if (data.atributoChave < 0) {
      b = data.atributoChave * -1
    }

    if (data.atributoChave < -3 || data.atributoChave > 3) {
      dados[0] = <FaDiceD20 key={0} size={20}/>
    } else {
      for (let i = 0; i < b; i++) {
        dados[i] = <FaDiceD20 key={i} size={20}/>
      }
    }

  }

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setClose={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado data={dataDado} setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)}/>
      </Modal>

      <span>{pericias(data.nome)}</span>

      <Button semperm={blockPerm} disabled={blockPerm} onClick={() => {
        setDataDado({
          nome: pericias(data.nome),
          valor: `${data.atributoChave}d20+${data.valor}`,
          isDano: false
        })
        setModalDadoRoladoIsOpen(true)
      }} level={level}>{data.atributoChave <= 0 && data.atributoChave >= -3 && '-'}{(data.atributoChave < -3 || data.atributoChave > 3) && data.atributoChave}{dados} <span className='plus'>+</span>{data.valor}</Button>
    </Container>
  );
}