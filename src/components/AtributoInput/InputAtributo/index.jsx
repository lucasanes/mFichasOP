import { Container, Input } from './styles';

export function InputAtributo({ valor, setValor }) {

  return (
    <Container>
      <Input autoComplete="off" type="number" value={valor} defaultValue={1} onChange={(e) => {
        if (e.target.value.toString().length < 2) {
          setValor(e.target.value)
        }
      }} />
    </Container>
  );
}