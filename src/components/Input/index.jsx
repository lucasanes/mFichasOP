import { useEffect, useRef, useState } from "react"
import { Button, Container, ContainerInput, InputB, LabelContainer} from "./styles"
import {AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export function Input({hoverBug = false, isSenha = false, label, setValor, valor, opcional = false, ...rest }) {

  const [hover, sethover] = useState(false)
  const [isSenhaVisible, setIsSenhaVisible] = useState(false)

  useEffect(() => {
    if (valor != null && valor.toString().length > 0) {
      sethover(true)
    } else {
      if (!hover) {
        sethover(false)
      }  
      
      if (hoverBug){
        setTimeout(() => {
          sethover(false)
        }, 1000);
      }
    }
  }, [valor])

  return (
    <Container>
      
      <LabelContainer hover={hover}>
        {label}
      </LabelContainer>

      <ContainerInput>
        <InputB value={valor} type={isSenhaVisible || !isSenha ? 'text' : 'password'} {...rest}
          onChange={(event) => {
            if (event.target.type == 'number') {
              if (event.target.value == '') {
                setValor(0)
                return
              }
              if ((parseInt(event.target.value) <= parseInt(event.target.max) && parseInt(event.target.value) >= parseInt(event.target.min))) {
                setValor(parseInt(event.target.value))
              }
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