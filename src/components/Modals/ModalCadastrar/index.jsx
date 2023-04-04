import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Body, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import { Toggle } from "../../Toggle";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { IoClose } from 'react-icons/io5'

export function ModalCadastrar({setModalClose}) {

  const [isLoading, setIsLoading] = useState(true)

  const [nome, setNome] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [repetirSenha, setRepetirSenha] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setNome('')
      setUsername('')
      setEmail('')
      setSenha('')
      setRepetirSenha('')
    }, 1000);

    setTimeout(() => {
      setIsLoading(false)
    }, 1300);
  }, [])

  async function handleLogin(e) {

    e.preventDefault()

    const response = await api.post('/', {query: 'account_create', nome, login: username, email, senha, csenha: repetirSenha})

    if (response.data.success) {
      setModalClose()
      toast.success('Conta criada com sucesso!')
    } else {
      toast.error(response.data.msg)
    }

  }

  return (
    <Container>

      <form onSubmit={handleLogin}>

        <Header>

          <h1>Cadastro</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        {isLoading && <h2>Seja bem-vindo ao FichasOP!</h2>}

        <Body isLoading={isLoading}>

          <Input label={'Nome'} valor={nome} setValor={setNome}/>
          <Input label={'Username'} valor={username} setValor={setUsername}/>
          <Input label={'Email'} valor={email} setValor={setEmail}/>
          <Input isSenha={true} label={'Senha'} valor={senha} setValor={setSenha}/>
          <Input isSenha={true} label={'Repetir Senha'} valor={repetirSenha} setValor={setRepetirSenha}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Cadastrar</button>

        </Footer>

      </form>
      <ToastContainer/>

    </Container>
  );
}