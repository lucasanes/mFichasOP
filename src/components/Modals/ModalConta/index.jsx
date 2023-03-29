import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Body, Card, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import { Toggle } from "../../Toggle";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { InputStop } from "../../InputStop";

export function ModalConta({setModalClose}) {

  const {user} = useAuth()

  const [nome, setNome] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [repetirSenha, setRepetirSenha] = useState('')
  const [senhaAtual, setSenhaAtual] = useState('')

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

          <h1>Conta</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Card>
            <h1>Alterar Username</h1>

            <hr />

            <div className='div'>
              <InputStop label={'Nome atual'} valor={user.nome}/>
              <Input label={'Novo nome'} valor={nome} setValor={setNome} />
            </div>
          </Card>

          <Card>
            <h1>Alterar Nome</h1>

            <hr />

            <div className='div'>
              <InputStop label={'Username atual'} valor={user.login}/>
              <Input label={'Novo username'} valor={username} setValor={setUsername} />
            </div>
          </Card>

          <Card>
            <h1>Alterar Email</h1>

            <hr />

            <div className='div'>
              <InputStop label={'Email atual'} valor={user.email}/>
              <Input label={'Novo email'} valor={email} setValor={setEmail} />
            </div>
          </Card>

          <Card>
            <h1>Alterar Senha</h1>

            <hr />

            <div className='div'>
              <Input isSenha={true} label={'Senha nova'} valor={senha} setValor={setSenha}/>
              <Input isSenha={true} label={'Repetir senha'} valor={repetirSenha} setValor={setRepetirSenha}/>
            </div>
          </Card>

          <Card>
            <h1>Senha Atual</h1>

            <hr />

            <div className='div'>
              <Input isSenha={true} label={'Senha atual'} valor={senhaAtual} setValor={setSenhaAtual}/>
            </div>
          </Card>

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