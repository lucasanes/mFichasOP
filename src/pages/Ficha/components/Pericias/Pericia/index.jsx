import { useEffect, useState } from 'react'
import {Button, Container} from './styles'
import { FaDiceD20 } from 'react-icons/fa'
import pericias from '../../../../../components/mappers/pericias/pericias'
import {Modal} from '../../../../../components/Modals/Modal'
import {ModalDadoRolado} from '../../../../../components/Modals/ModalDadoRolado'

export function Pericia({data}) {

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [dataDado, setDataDado] = useState({})
  const [level, setLevel] = useState('nt')

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
  for (let i = 0; i < data.atributoChave; i++) {
    dados[i] = <FaDiceD20 size={20}/>
  }

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setClose={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado data={dataDado} setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)}/>
      </Modal>

      <span>{pericias(data.nome)}</span>

      <Button onClick={() => {
        setDataDado({
          nome: pericias(data.nome),
          valor: `${data.atributoChave}d20+${data.valor}`,
          isDano: false
        })
        setModalDadoRoladoIsOpen(true)
      }} level={level}>{dados}+{data.valor}</Button>
    </Container>
  );
}