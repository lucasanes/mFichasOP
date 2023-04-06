import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Body, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import { Toggle } from "../../Toggle";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { IoClose } from 'react-icons/io5'

export function ModalCadastrar({setModalClose}) {

  const {signIn} = useAuth()

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

    const response = await api.post('/', {query: 'account_user_create', nome, login: username, email, senha, csenha: repetirSenha})

    if (response.data.success) {
      setModalClose()
      signIn({username, senha, manterAtivo: true})
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

          <Input label={'Nome'} valor={nome} setValor={setNome} minLength={2} maxLength={50}/>
          <Input label={'Username'} valor={username} setValor={setUsername} minLength={2} maxLength={16}/>
          <Input label={'Email'} valor={email} setValor={setEmail} minLength={5} maxLength={200}/>
          <Input isSenha={true} label={'Senha'} valor={senha} setValor={setSenha} minLength={8} maxLength={50}/>
          <Input isSenha={true} label={'Repetir Senha'} valor={repetirSenha} setValor={setRepetirSenha} minLength={8} maxLength={50}/>

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