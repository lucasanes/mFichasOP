import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Modal } from "../Modals/Modal"
import { ModalDadoRolado } from "../Modals/ModalDadoRolado"
import { Container, Img } from "./styles"
import AtributosImg from '../../assets/imgs/AtributosImg-Pequeno.png'

export function AtributoButton({ blockPerm = false, agi, int, vig, pre, forca, ...rest }) {

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)

  const [data, setData] = useState({
    nome: '',
    valor: '',
    isDano: false
  })

  return (
    <Container semperm={blockPerm}>

      <Modal isOpen={modalDadoRoladoIsOpen} setClose={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)} data={data} />
      </Modal>

      <div className="b1">  
        <button disabled={blockPerm} onClick={() => {
          setModalDadoRoladoIsOpen(true);

          setData({
            nome: "Agilidade",
            valor: `${agi}d20`,
            isDano: false
          })
        }}>{agi}</button>
      </div>

      <div className="b2">
        <button disabled={blockPerm} onClick={() => {
          setModalDadoRoladoIsOpen(true)

          setData({
            nome: 'Força',
            valor: `${forca}d20`,
            isDano: false
          })
        }}>{forca}</button>
      </div>

      <div className="b3">
        <button disabled={blockPerm} onClick={() => {
          setModalDadoRoladoIsOpen(true)

          setData({
            nome: 'Intelecto',
            valor: `${int}d20`,
            isDano: false
          })
        }}>{int}</button>
      </div>

      <div className="b4">
        <button disabled={blockPerm} onClick={() => {
          setModalDadoRoladoIsOpen(true)

          setData({
            nome: 'Presença',
            valor: `${pre}d20`,
            isDano: false
          })
        }}>{pre}</button>
      </div>

      <div className="b5">
        <button disabled={blockPerm} onClick={() => {
          setModalDadoRoladoIsOpen(true)

          setData({
            nome: 'Vigor',
            valor: `${vig}d20`,
            isDano: false
          })
        }}>{vig}</button>
      </div>
      
      <Img {...rest} src={AtributosImg} />

    </Container>
  )
}