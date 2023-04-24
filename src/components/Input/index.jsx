import { useEffect, useRef, useState } from "react"
import { Button, Container, ContainerInput, InputB, LabelContainer} from "./styles"
import {AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export function Input({isDado = false, hoverBug = false, isSenha = false, label, setValor, valor, opcional = false, ...rest }) {

  const [hover, sethover] = useState(false)
  const [isSenhaVisible, setIsSenhaVisible] = useState(false)
  const [erro, setErro] = useState(false)

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
    
    if (isDado && !valor.match(pattern)) {
      setErro(true)
    } else if (isDado && valor.match(pattern)) {
      setErro(false)
    }
  }, [valor])

  let pattern = /^([+-]?((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|(\d{0,3}|1000))([+-]((100|\d{1,2}|\/[ADCEFGINOPRTV]{3,4}\/)?((d)(100|[1-9]\d?|\/[ADCEFGINOPRTV]{3,4}\/))?)|([+-]\d{0,3}|1000)?)*$/g;

  return (
    <Container>
      
      <LabelContainer hover={hover}>
        {label}
      </LabelContainer>

      <ContainerInput dadoErro={erro.toString()}>
        <InputB value={valor} type={isSenhaVisible || !isSenha ? 'text' : 'password'} {...rest}
          onChange={(event) => {
            // if (event.target.type == 'number') {
              // if (event.target.value == '') {
              //   setValor(0)
              //   return
              // }
              // if (event.target.min) {
              //   console.log(parseFloat(event.target.min), event.target.value)
              //   if ((parseFloat(event.target.value) <= parseFloat(event.target.max) && parseFloat(event.target.value) >= parseFloat(event.target.min))) {
              //     setValor(parseFloat(event.target.value))
              //   }
              // } else {
              //   if ((parseFloat(event.target.value) <= parseFloat(event.target.max))) {
              //     setValor(parseFloat(event.target.value))
              //   }
              // }
            // } else {
              setValor(event.target.value)
            // }
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
      {(isDado && erro) && <span>Inválido!</span>}
      {/* {(opcional && valor == null || opcional && String(valor).length == 0) && <span>(Opcional)</span>} */}
    </Container>
  )
}