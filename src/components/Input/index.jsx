import { useEffect, useState } from "react"
import { Button, Container, ContainerInput, InputB, LabelContainer} from "./styles"
import {AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export function Input({ isSenha = false, label, setValor, valor, onlyNumber = false, opcional = false, valorMax = null, ...rest }) {

  const [hover, sethover] = useState(false)
  const [isSenhaVisible, setIsSenhaVisible] = useState(false)

  useEffect(() => {
    if (valor != null && valor.toString().length > 0) {
      sethover(true)
    } else {
      if (!hover) {
        sethover(false)
      }
    }
  }, [valor])

  function onlyNumbers(v) {
    if (valorMax != null && valorMax >= v || valorMax == null) {
      v = v.replace(/[^0-9-]/g, "")
      setValor(v)
    }
  }

  return (
    <Container>
      
      <LabelContainer hover={hover}>
        {label}
      </LabelContainer>

      <ContainerInput>
        <InputB autoComplete="on" value={valor} type={isSenhaVisible || !isSenha ? 'text' : 'password'} {...rest}
          onChange={(event) => {
            if (onlyNumber) {
              onlyNumbers(event.target.value)
            } else {
              setValor(event.target.value)
            }
          }}
          onFocus={() => {
            sethover(true)
          }}
          onBlur={() => {
            if (valor == null || valor.toString().length == 0) {
              sethover(false)
            }
          }}
        />
      </ContainerInput>
      {isSenha &&
      <Button type='button' onClick={() => setIsSenhaVisible(!isSenhaVisible)}>{isSenhaVisible ? <AiOutlineEyeInvisible color="cyan"/> : <AiOutlineEye color="cyan"/>}</Button>} 
      {(opcional && valor == null || opcional && String(valor).length == 0) && <span>(Opcional)</span>}
    </Container>
  )
}