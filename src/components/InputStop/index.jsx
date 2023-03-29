import { Container, ContainerInput, InputB, LabelContainer } from "./styles"

export function InputStop({ label, valor, ...rest }) {

  return (
    <Container>
      
      <LabelContainer>
        {label}
      </LabelContainer>

      <ContainerInput>
        <InputB disabled={true} autoComplete="off" value={valor} type={'text'} {...rest}/>
      </ContainerInput>
    </Container>
  )
}