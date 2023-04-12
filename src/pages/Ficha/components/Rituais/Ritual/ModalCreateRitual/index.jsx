import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../../components/Input'
import {InputImg} from '../../../../../../components/InputImg'
import {TextArea} from '../../../../../../components/TextArea'
import { api } from "../../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../../hooks/auth";

export function ModalCreateRitual({setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState('')
  const [elemento, setelemento] = useState('')
  const [circulo, setcirculo] = useState('')
  const [alcance, setalcance] = useState('')
  const [conjuracao, setconjuracao] = useState('')
  const [duracao, setduracao] = useState('')
  const [alvo, setalvo] = useState('')
  const [resistencia, setresistencia] = useState('')
  const [dano, setdano] = useState('')
  const [dano2, setdano2] = useState('')
  const [dano3, setdano3] = useState('')
  const [foto, setfoto] = useState('')
  const [efeito, setefeito] = useState('')

  let pattern = /^([+-]?((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|(\d{0,3}|1000))([+-]((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|([+-]\d{0,3}|1000)?)*$/g;

  async function updateFichaAPI(e) {

    e.preventDefault()

    if (!dano.match(pattern)) {
      toast.error('Dano "Normal" inválido.')
      return
    }

    if (!dano.match(pattern)) {
      toast.error('Dano "Discente" inválido.')
      return
    }

    if (!dano.match(pattern)) {
      toast.error('Dano "Verdadeiro" inválido.')
      return
    }

    const response = await api.post('/', {
      query: 'fichas_info_create',
      sessid: token,
      token: id,
      dados: {
        rituais: [{
          nome,
          elemento,
          circulo,
          alcance,
          conjuracao,
          duracao,
          alvo,
          resistencia,
          dano,
          dano2,
          dano3,
          foto,
          efeito,
        }]
      }
    })

    if (response.data.success) {
      setData(prev => [...prev, response.data.ritual])
      setModalClose()
      toast.success("Criado com sucesso!")
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Criar Ritual</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input required maxLength={50} name="nome" label={'Nome'} valor={nome} setValor={setnome}/>
          <Input required maxLength={50} name="elemento" label={'Elemento'} valor={elemento} setValor={setelemento}/>
          <Input maxLength={15} name="circulo" label={'Círculo'} valor={circulo} setValor={setcirculo}/>
          <Input maxLength={30} name="alcance" label={'Alcance'} valor={alcance} setValor={setalcance}/>
          <Input maxLength={30} name="execucao" label={'Execução'} valor={conjuracao} setValor={setconjuracao}/>
          <Input maxLength={30} name="duracao" label={'Duração'} valor={duracao} setValor={setduracao}/>
          <Input maxLength={30} name="alvo" label={'Alvo'} valor={alvo} setValor={setalvo}/>
          <Input maxLength={50} name="resistencia" label={'Resistência'} valor={resistencia} setValor={setresistencia}/>
          <Input maxLength={50} name="dado" label={'Normal'} valor={dano} setValor={setdano}/>
          <Input maxLength={50} name="dado" label={'Discente'} valor={dano2} setValor={setdano2}/>
          <Input maxLength={50} name="dado" label={'Verdadeiro'} valor={dano3} setValor={setdano3}/>
          <InputImg maxLength={255} label={'Foto'} valor={foto} setValor={setfoto}/>
          <div className="preview">
            <span>Preview:</span>
            <img src={foto} width={'50px'}/>
          </div>
          <TextArea label={'Descrição'} valor={efeito} setValor={setefeito}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>

    </Container>
  );
}