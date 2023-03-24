import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { Body, Container, Footer, Header } from "./styles";
import {Input} from '../../Input'
import { Toggle } from "../../Toggle";
import { useAuth } from "../../../hooks/auth";

export function ModalEntrar({setModalClose, modalRecuperarSenha}) {

  const [user, setUser] = useState('')
  const [senha, setSenha] = useState('')
  const [manterAtivo, setManterAtivo] = useState(true)

  const { signIn } = useAuth()

  async function handleLogin(e) {

    e.preventDefault()
    const response = await signIn({username: user, senha, manterAtivo})

    if (response) {
      setModalClose()
    }

  }

  function switchManterAtivo() {
    if (manterAtivo) {
      setManterAtivo(false)
    } else {
      setManterAtivo(true)
    }
  }

  return (
    <Container>

      <form onSubmit={handleLogin}>

        <Header>

          <h1>Entrar</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <Input label={'User/Email'} valor={user} setValor={setUser}/>
          <Input isSenha={true} label={'Senha'} valor={senha} setValor={setSenha}/>

          <div className="div">
            <Toggle defaultChecked={true} classNumber={1} span={'Manter Ativo'} onChange={switchManterAtivo}/>
            <button type="button" onClick={() => {setModalClose(); modalRecuperarSenha()}}>Recuperar Senha</button>
          </div>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Entrar</button>

        </Footer>

      </form>
      <ToastContainer/>

    </Container>
  );
}