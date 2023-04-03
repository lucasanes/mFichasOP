import { Container, InputB, LabelContainer } from "./styles"

export function InputStop({ label, valor, ...rest }) {

  return (
    <Container>
      
      <LabelContainer>
        {label}
      </LabelContainer>

      <InputB disabled={true} autoComplete="off" defaultValue={valor} type={'text'} {...rest}/>
    </Container>
  )
}