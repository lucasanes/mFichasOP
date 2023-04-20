import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../../components/Input'
import {InputImg} from '../../../../../../components/InputImg'
import {Preview} from '../../../../../../components/Preview'
import {TextArea} from '../../../../../../components/TextArea'
import { api } from "../../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../../hooks/auth";

export function ModalEditRitual({data, lista, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [nome, setnome] = useState(data.nome)
  const [elemento, setelemento] = useState(data.elemento)
  const [circulo, setcirculo] = useState(data.circulo)
  const [alcance, setalcance] = useState(data.alcance)
  const [conjuracao, setconjuracao] = useState(data.conjuracao)
  const [duracao, setduracao] = useState(data.duracao)
  const [alvo, setalvo] = useState(data.alvo)
  const [resistencia, setresistencia] = useState(data.resistencia)
  const [dano, setdano] = useState(data.dano)
  const [dano2, setdano2] = useState(data.dano2)
  const [dano3, setdano3] = useState(data.dano3)
  const [foto, setfoto] = useState(data.foto)
  const [efeito, setefeito] = useState(data.efeito)

  let pattern = /^([+-]?((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|(\d{0,3}|1000))([+-]((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|([+-]\d{0,3}|1000)?)*$/g;

  async function updateFichaAPI(e) {

    e.preventDefault()

    if (!dano.match(pattern)) {
      toast.error('Dado "Normal" inválido.')
      return
    }

    if (!dano.match(pattern)) {
      toast.error('Dado "Discente" inválido.')
      return
    }

    if (!dano.match(pattern)) {
      toast.error('Dado "Verdadeiro" inválido.')
      return
    }

    const response = await api.post('/', {
      query: 'fichas_info_update',
      sessid: token,
      token: id,
      dados: {
        rituais: [{
          id: data.id,
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
      
      const ritualAEditar = lista.filter(ritual => ritual.id == data.id)[0]

      ritualAEditar.nome = nome
      ritualAEditar.elemento = elemento
      ritualAEditar.circulo = circulo
      ritualAEditar.alcance = alcance
      ritualAEditar.conjuracao = conjuracao
      ritualAEditar.duracao = duracao
      ritualAEditar.alvo = alvo
      ritualAEditar.resistencia = resistencia
      ritualAEditar.dano = dano
      ritualAEditar.dano2 = dano2
      ritualAEditar.dano3 = dano3
      ritualAEditar.foto = foto
      ritualAEditar.efeito = efeito

      setModalClose()
      toast.success("Alterado com sucesso!")
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Editar Ritual</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <datalist id="listaElementos"><option value="Conhecimento" /><option value="Sangue" /><option value="Energia" /><option value="Medo" /><option value="Morte" />
          </datalist>

          <Input required maxLength={50} name="nome" label={'Nome'} valor={nome} setValor={setnome}/>
          <Input list={'listaElementos'} required maxLength={50} name="elemento" label={'Elemento'} valor={elemento} setValor={setelemento}/>
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