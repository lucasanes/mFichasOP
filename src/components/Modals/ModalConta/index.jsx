import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Body, Card, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import {InputImg} from '../../InputImg'
import { Toggle } from "../../Toggle";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { InputStop } from "../../InputStop";

export function ModalConta({setModalClose}) {

  const {user, token, signIn} = useAuth()

  const [isLoading, setIsLoading] = useState(true)

  const [nome, setNome] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [repetirSenha, setRepetirSenha] = useState('')
  const [marca, setMarca] = useState('')
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

    const response = await api.post('/', {query: 'account_user_update', sessid: token, nome, login: username, email, senha, csenha: repetirSenha, asenha: senhaAtual})

    if (response.data.success) {
      signIn({username: username ? username : user.login, senha: senha ? senha : senhaAtual, manterAtivo: true})
      setModalClose()
      toast.success('Conta editada com sucesso!')
    } else {
      toast.error(response.data.msg)
    }

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
              <Input minLength={2} maxLength={50} name="nome" label={'Novo nome'} valor={nome} setValor={setNome} />
            </div>
          </Card>

          <Card>
            <h1>Alterar Nome</h1>

            <hr />

            <div className='div'>
              <InputStop label={'Username atual'} valor={user.login}/>
              <Input minLength={2} maxLength={16} name="username" hoverBug label={'Novo username'} valor={username} setValor={setUsername} />
            </div>
          </Card>

          <Card>
            <h1>Alterar Email</h1>

            <hr />

            <div className='div'>
              <InputStop label={'Email atual'} valor={user.email}/>
              <Input minLength={5} maxLength={200} hoverBug name="email" label={'Novo email'} valor={email} setValor={setEmail} />
            </div>
          </Card>

          <Card>
            <h1>Alterar Senha</h1>

            <hr />

            <div className='div'>
              <Input minLength={8} maxLength={50} name="senha" hoverBug isSenha={true} label={'Nova Senha'} valor={senha} setValor={setSenha}/>
              <Input minLength={8} maxLength={50} name="senha" isSenha={true} label={'Repetir senha'} valor={repetirSenha} setValor={setRepetirSenha}/>
            </div>
          </Card>

          <Card>
            <h1>Alterar Marca</h1>

            <hr />

            <div className='div'>
              <InputImg maxLength={255} label={'Nova marca'} valor={marca} setValor={setMarca}/>
            </div>
          </Card>

          <Card>
            <h1>Senha Atual</h1>

            <hr />

            <div className='div'>
              <Input required minLength={8} maxLength={50} name="senha" isSenha={true} label={'Senha atual'} valor={senhaAtual} setValor={setSenhaAtual}/>
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