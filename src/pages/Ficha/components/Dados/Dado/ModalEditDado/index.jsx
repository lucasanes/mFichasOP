import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../../components/Input'
import { api } from "../../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../../hooks/auth";
import {Toggle} from '../../../../../../components/Toggle'
import {ButtonDeleteComponent} from '../../../../../../components/ButtonDeleteComponent'

export function ModalEditDado({lista, data, setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState(data.nome)
  const [dado, setdado] = useState(data.dado)
  const [dano, setdano] = useState(data.dano)

  let pattern = /^([+-]?((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|(\d{0,3}|1000))([+-]((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|([+-]\d{0,3}|1000)?)*$/g;
 
  async function updateFichaAPI(e) {

    e.preventDefault()

    if (dado.match(pattern)) {

      const response = await api.post('/', {
        query: 'fichas_info_update',
        sessid: token,
        token: id,
        dados: {
          dices: [{
            token: data.token,
            nome,
            dado,
            dano
          }]
        }
      })

      if (response.data.success) {
        const dadoAEditar = lista.filter(dado => dado.token == data.token)[0]
        dadoAEditar.nome = nome
        dadoAEditar.dado = dado
        dadoAEditar.dano = dano
        setModalClose()
      }

    } else {
      toast.error('Dado inválido.')
    }

  }

  async function itemDelete() {

    const response = await api.post('/', {
      query: 'fichas_info_delete',
      sessid: token,
      token: id,
      dados: {
        dices: [{
          token: data.token,
        }]
      }
    })

    if (response.data.success) {
      const dadosAtualizados = lista.filter(dado => dado.token != data.token)
      setData(dadosAtualizados)
      toast.success("Alterado com sucesso!")
      setModalClose()
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Editar Dado</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input autoFocus required maxLength={20} label={'Nome'} valor={nome} setValor={setnome}/>
          <Input label={'Dado'} maxLength={50} valor={dado} setValor={setdado}/>
          <Toggle classNumber={1} span={"Rolar como dano?"} defaultChecked={data.dano == 1} onClick={() => {if (dano == 0) {setdano(1)} else {setdano(0)}}}/>     

        </Body>

        <hr />

        <Footer>

          <button className="button" type="submit">Salvar</button>
          <ButtonDeleteComponent onClick={itemDelete} size={25}/>

        </Footer>

      </form>
      <ToastContainer/>

    </Container>
  );
}