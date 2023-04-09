import { Container, Input } from './styles';

export function InputAtributo({ valor, setValor }) {

  return (
    <Container>
      <Input autoComplete="off" type="number" value={valor} onChange={(e) => {
        if (e.target.value >= -25 && e.target.value <= 25)
          setValor(e.target.value)
      }} />
    </Container>
  );
}