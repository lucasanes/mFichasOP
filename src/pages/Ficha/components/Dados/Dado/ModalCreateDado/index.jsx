import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../../components/Input'
import { api } from "../../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../../hooks/auth";
import {Toggle} from '../../../../../../components/Toggle'
import {ButtonDeleteComponent} from '../../../../../../components/ButtonDeleteComponent'

export function ModalCreateDado({setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState('')
  const [dado, setdado] = useState('')
  const [dano, setdano] = useState(0)
  const [global, setglobal] = useState(0)

  let pattern = /^([+-]?((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|(\d{0,3}|1000))([+-]((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|([+-]\d{0,3}|1000)?)*$/g;
 
  async function updateFichaAPI(e) {

    e.preventDefault()

    if (!dado.match(pattern)) {
      toast.error('Dado inválido.')
      return
    }

    const response = await api.post('/', {
      query: 'etc_dices_create',
      sessid: token,
      token: id,
      nome,
      dado,
      dano,
      global
    })

    console.log(response.data)

    if (response.data.success) {
      setData(prevState => [...prevState, response.data.dices[0]])
      setModalClose()
      toast.success("Criado com sucesso!")
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Criar Dado</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input name="nome" required maxLength={20} label={'Nome'} valor={nome} setValor={setnome}/>
          <Input name="dado" label={'Dado'} maxLength={50} valor={dado} setValor={setdado}/>
          <div className="div">
            <Toggle classNumber={1} span={"Rolar como dano?"} onClick={() => {if (dano == 0) {setdano(1)} else {setdano(0)}}}/>     
            <Toggle end classNumber={2} span={"Global?"} onClick={() => {if (global == 0) {setglobal(1)} else {setglobal(0)}}}/>     
          </div>

        </Body>

        <hr />

        <Footer>

          <button className="button" type="submit">Salvar</button>

        </Footer>

      </form>
      

    </Container>
  );
}