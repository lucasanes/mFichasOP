import { Container, BarrinhaDiv, Botoes, Progress, ProgressBar } from './styles';
import { useEffect } from 'react';

export function BarrinhaV({ nome, valorA, valorMax, color, number, ...rest }) {

  useEffect(() => {

    const multiply = 100 / valorMax

    const porcent = ((valorA * multiply) / (valorMax * multiply)) * 100

    const progress = document.getElementById(`progress-${number}`)

    progress.style = `width: ${porcent}%`

  }, [valorA, valorMax])

  return (
    <Container>
      <Botoes>
        <span>{nome}:</span>
        <span>{valorA} / {valorMax}</span>
      </Botoes>

      <BarrinhaDiv>

        <ProgressBar>
          <Progress id={`progress-${number}`} color={color} />
        </ProgressBar>

      </BarrinhaDiv>

    </Container>
  );
}