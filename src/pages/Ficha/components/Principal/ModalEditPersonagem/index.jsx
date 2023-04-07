import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Body, Container, Footer, Header } from "./styles";
import { TextArea } from "../../../../../components/TextArea";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";
import { api } from "../../../../../services/api";

export function ModalEditPersonagem({data, setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [historia, sethistoria] = useState(data.historia)
  const [aparencia, setaparencia] = useState(data.aparencia)
  const [pep, setpep] = useState(data.pep)
  const [dfm, setdfm] = useState(data.dfm)
  const [favoritos, setfavoritos] = useState(data.favoritos)
  const [personalidade, setpersonalidade] = useState(data.personalidade)
  const [pesadelo, setpesadelo] = useState(data.pesadelo)
  const [anotacoes, setanotacoes] = useState(data.anotacoes)

  async function handleLogin(e) {

    e.preventDefault()

    const response = await api.post('/', {
      query: 'fichas_info_update',
      sessid: token,
      token: id,
      dados: {
        historia: historia,
        aparencia: aparencia,
        encontro: pep,
        medos: dfm,
        favoritos: favoritos,
        frases: personalidade,
        pior_pesadelo: pesadelo,
        anotacoes: anotacoes,
      }
    })

    if (response.data.success) {
      setData(prevState => ({
        ...prevState,
        personagem: {
          historia,
          aparencia,
          pep,
          dfm,
          favoritos,
          personalidade,
          pesadelo,
          anotacoes
        }
      }))
      setModalClose()
    }

  }

  return (
    <Container>

      <form onSubmit={handleLogin}>

        <Header>

          <h1>Personagem</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <TextArea label={'História'} valor={historia} setValor={sethistoria}/>
          <TextArea label={'Aparência'} valor={aparencia} setValor={setaparencia}/>
          <TextArea label={'Primeiro Encontro Paranormal'} valor={pep} setValor={setpep}/>
          <TextArea label={'Doenças, Fobias e Manias'} valor={dfm} setValor={setdfm}/>
          <TextArea label={'Favoritos'} valor={favoritos} setValor={setfavoritos}/>
          <TextArea label={'Personalidade'} valor={personalidade} setValor={setpersonalidade}/>
          <TextArea label={'Pior Pesadelo'} valor={pesadelo} setValor={setpesadelo}/>
          <TextArea label={'Anotações'} valor={anotacoes} setValor={setanotacoes}/> 

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>
      <ToastContainer/>

    </Container>
  );
}