import { useState } from 'react';
import { InputBarrinha } from './components/InputBarrinha';
import { Container, BarrinhaDiv, Botoes, Progress, ProgressBar, Esquerda, Direita } from './styles';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import {useFicha} from '../../hooks/ficha'

export function BarrinhaNPC({ max, valorA, setValorA, setValorMax, valorMax, color, number, ...rest }) {

  const [big, setBig] = useState(false)

  useEffect(() => {

    if (window.innerWidth > 499) {
      setBig(true)
    } else {
      setBig(false)
    }

  }, [])

  window.addEventListener('resize', () => {
    if (window.innerWidth > 499) {
      setBig(true)
    } else {
      setBig(false)
    }
  })

  useEffect(() => {

    const multiply = 100 / valorMax

    const porcent = ((valorA * multiply) / (valorMax * multiply)) * 100

    const progress = document.getElementById(`progress${number}`)

    progress.style = `width: ${porcent}%`

  }, [valorA, valorMax])

  return (
    <Container>
      <Botoes>
        <Esquerda>
          {big && <button onClick={() => { setValorA(0) }}><SlArrowLeft size={14} /> 0</button>}
          <button onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 5) { setValorA(valorA - 5) } else { setValorA(0) } }}><SlArrowLeft size={14} />- 5</button>
          <button onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 1) { setValorA(valorA - 1) } else { setValorA(0) } }}><SlArrowLeft size={14} />- 1</button>
        </Esquerda>
        <InputBarrinha max={max} right setValor={setValorA} valor={valorA} valorMax={valorMax} />
        <span>/</span>
        <InputBarrinha max={max} setValor={setValorMax} valor={valorMax} {...rest} onBlur={() => {
          if (valorMax < valorA) {
            setValorA(valorMax)
          }
        }
        } />
        <Direita>
          <button onClick={() => { if (valorA != valorMax && valorA < valorMax) { setValorA(valorA + 1) } else { setValorA(valorMax) } }}>+ 1<SlArrowRight size={14} /> </button>
          <button onClick={() => { if (valorA != valorMax && valorA < valorMax - 5) { setValorA(valorA + 5) } else { setValorA(valorMax) } }}>+ 5<SlArrowRight size={14} /></button>
          {big && <button onClick={() => { setValorA(valorMax) }}> {valorMax}<SlArrowRight size={14} /></button>}
        </Direita>

      </Botoes>

      <BarrinhaDiv>

        <ProgressBar>
          <Progress id={`progress${number}`} color={color} />
        </ProgressBar>

      </BarrinhaDiv>

    </Container>
  );
}