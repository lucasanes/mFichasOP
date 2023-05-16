import { useEffect, useRef, useState } from "react"
import { Container, ContainerInput, InputB, Select} from "./styles"
import {AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export function InputSelect({setValor, valor, setGrau, grau, ...rest }) {

  return (
    <Container>

      <ContainerInput>
        <Select defaultValue={grau} onChange={(e) => setGrau(e.target.value)}>
          <option value={0}>Destreinado</option>
          <option value={1}>Treinado</option>
          <option value={2}>Veterano</option>
          <option value={3}>Expert</option>
        </Select>
        <InputB min={0} max={99} value={valor} type='number' {...rest}
          onChange={(event) => {
            setValor(event.target.value)
          }}
        />
      </ContainerInput>
    </Container>
  )
}