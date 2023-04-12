import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Body, Card, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import { Toggle } from "../../Toggle";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { InputStop } from "../../InputStop";

export function ModalConta({setModalClose}) {

  const {user} = useAuth()

  const [isLoading, setIsLoading] = useState(true)

  const [nome, setNome] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [repetirSenha, setRepetirSenha] = useState('')
  const [senhaAtual, setSenhaAtual] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setNome('')
      setUsername('')
      setEmail('')
      setSenha('')
      setRepetirSenha('')
      setSenhaAtual('')
    }, 1000);

    setTimeout(() => {
      setIsLoading(false)
    }, 1300);
  }, [])

  async function handleLogin(e) {

    e.preventDefault()

    toast.error("Recurso em desenvolvimento!")
    setModalClose()

    // const response = await api.post('/', {query: 'account_user_update', nome, login: username, email, senha, csenha: repetirSenha})

    // console.log(response.data)

    // if (response.data.success) {
    //   setModalClose()
    //   toast.success('Conta editada com sucesso!')
    // } else {
    //   toast.error(response.data.msg)
    // }

  }

  return (
    <Container isLoading={isLoading}>

      <form onSubmit={handleLogin}>

        <Header>

          <h1>Conta</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body isLoading={isLoading}>

          <Card>
            <h1>Alterar Username</h1>

            <hr />

            <div className='div'>
              <InputStop label={'Nome atual'} valor={user.nome}/>
              <Input name="nome" label={'Novo nome'} valor={nome} setValor={setNome} />
            </div>
          </Card>

          <Card>
            <h1>Alterar Nome</h1>

            <hr />

            <div className='div'>
              <InputStop label={'Username atual'} valor={user.login}/>
              <Input name="username" hoverBug label={'Novo username'} valor={username} setValor={setUsername} />
            </div>
          </Card>

          <Card>
            <h1>Alterar Email</h1>

            <hr />

            <div className='div'>
              <InputStop label={'Email atual'} valor={user.email}/>
              <Input hoverBug name="email" label={'Novo email'} valor={email} setValor={setEmail} />
            </div>
          </Card>

          <Card>
            <h1>Alterar Senha</h1>

            <hr />

            <div className='div'>
              <Input name="senha" hoverBug isSenha={true} label={'Senha nova'} valor={senha} setValor={setSenha}/>
              <Input name="senha" isSenha={true} label={'Repetir senha'} valor={repetirSenha} setValor={setRepetirSenha}/>
            </div>
          </Card>

          <Card>
            <h1>Senha Atual</h1>

            <hr />

            <div className='div'>
              <Input name="senha" isSenha={true} label={'Senha atual'} valor={senhaAtual} setValor={setSenhaAtual}/>
            </div>
          </Card>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Atualizar</button>

        </Footer>

      </form>

    </Container>
  );
}