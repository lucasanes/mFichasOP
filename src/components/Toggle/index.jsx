import { Container, SpanContainer, Input } from "./styles"

export function Toggle({ span, classNumber, end = false, ...rest }) {
  return (
    <Container end={end}>
      <SpanContainer>
        {span}
      </SpanContainer>
      <Input className={"toggle" + `${classNumber}`} id={"toggle" + `${classNumber}`} type="checkbox" {...rest}></Input>
      <label className={"toggleLabel" + `${classNumber}`} htmlFor={"toggle" + `${classNumber}`}></label>
    </Container>
  )
}