import {Container} from './styles'

export function Preview({foto}) {
  return (
    <Container>
      <span>Preview:</span>
      <img src={foto}/>
    </Container>
  );
}