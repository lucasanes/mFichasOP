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
      toast.success("Alterado com sucesso!")
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

          <TextArea menor maxLength={5000} label={'História'} valor={historia} setValor={sethistoria}/>
          <TextArea menor maxLength={5000} label={'Aparência'} valor={aparencia} setValor={setaparencia}/>
          <TextArea menor maxLength={5000} label={'Primeiro Encontro Paranormal'} valor={pep} setValor={setpep}/>
          <TextArea menor maxLength={5000} label={'Doenças, Fobias e Manias'} valor={dfm} setValor={setdfm}/>
          <TextArea menor maxLength={5000} label={'Favoritos'} valor={favoritos} setValor={setfavoritos}/>
          <TextArea menor maxLength={5000} label={'Personalidade'} valor={personalidade} setValor={setpersonalidade}/>
          <TextArea menor maxLength={5000} label={'Pior Pesadelo'} valor={pesadelo} setValor={setpesadelo}/>
          <TextArea menor maxLength={5000} label={'Anotações'} valor={anotacoes} setValor={setanotacoes}/> 

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>
      

    </Container>
  );
}