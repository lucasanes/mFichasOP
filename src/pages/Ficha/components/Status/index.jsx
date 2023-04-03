import {BodyDefesas, BodyStatus, Button, ButtonEdit, Container, Header, Img, PortraitButton} from './styles'
import {InputStop} from '../../../../components/InputStop'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import {Barrinha} from '../../../../components/Barrinha'

export function Status({data}) {

  const [miniBody, setMiniBody] = useState('status')
  const status = data.status
  const defesas = data.defesas

  const [fotoAtual, setFotoAtual] = useState('')

  const [combate, setCombate] = useState(status.combate == 1)
  const [morto, setMorto] = useState(status.morto == 1)
  const [opv, setOpv] = useState(status.opv == 1)
  const [ops, setOps] = useState(status.ops == 1)
  const [ope, setOpe] = useState(status.ope == 1)

  const [pvA, setPvA] = useState(status.pvA)
  const [pvMax, setPvMax] = useState(status.pvMax)
  const [psA, setPsA] = useState(status.psA)
  const [psMax, setPsMax] = useState(status.psMax)
  const [peA, setPeA] = useState(status.peA)
  const [peMax, setPeMax] = useState(status.peMax)

  useEffect(() => {

    if (status.foto_morrendo != null && (pvA == 0)) {
      console.log('morrendo')
      setFotoAtual(status.foto_morrendo);
    } else if (status.foto_insanoeferido != null && (psA == 0 && pvA < (pvMax / 2))) {
      console.log('insano e ferido')
      setFotoAtual(status.foto_insanoeferido);
    } else if (status.foto_ferido != null && (pvA < (status.pvMax / 2))) {
      console.log('ferido')
      setFotoAtual(status.foto_ferido);
    } else if (status.foto_insano != null && psA == 0) {
      console.log('insano')
      setFotoAtual(status.foto_insano);
    } else {
      console.log('normal')
      setFotoAtual(status.foto);
    }

  }, [pvA, pvMax, psA, psMax, peA, peMax])

  return (
    <Container>

      <Header>
        <Button active={miniBody == 'status'} onClick={() => setMiniBody('status')}>Status</Button>
        <Button active={miniBody == 'defesas'} onClick={() => setMiniBody('defesas')}>Defesas</Button>
        <ButtonEdit><MdOutlineModeEditOutline color='yellow' size={22}/></ButtonEdit>
      </Header>

      <hr />

      {miniBody == 'status' ? <>

        <BodyStatus>
          <div className='header'>
            <Img>
              <img src={fotoAtual} style={{filter: `brightness(${morto ? 0 : 1})`}}/>
            </Img>

            <div className='portrait'>
              <h1>Portrait</h1>
              <hr />
              <div className='portrait-body'>
                <div className='portrait-status'>
                  <h2>Status</h2>
                  <PortraitButton onClick={() => setCombate(!combate)} active={combate + 'yellow'} color={'yellow'}>Combate</PortraitButton>
                  <PortraitButton onClick={() => setMorto(!morto)}  active={morto + 'red'} color={'red'}>Morto</PortraitButton>
                </div>

                <div className='portrait-ocultar'>
                  <h2>Ocultar</h2>
                  <PortraitButton onClick={() => setOpv(!opv)} active={opv + 'red'} color={'red'}>Vida</PortraitButton>
                  <PortraitButton onClick={() => setOps(!ops)} active={ops + 'blue'} color={'blue'}>Sanidade</PortraitButton>
                  <PortraitButton onClick={() => setOpe(!ope)} active={ope + 'yellow'} color={'yellow'}>Esforço</PortraitButton>
                </div>
              </div>
            </div>
          </div> 

          <h3>Vida</h3>
          <Barrinha color={'red'} number={1} valorA={pvA} setValorA={setPvA} valorMax={pvMax} setValorMax={setPvMax} />
          <h3>Sanidade</h3>
          <Barrinha color={'aqua'} number={2} valorA={psA} setValorA={setPsA} valorMax={psMax} setValorMax={setPsMax} />
          <h3>Esforço</h3>
          <Barrinha color={'yellow'} number={3} valorA={peA} setValorA={setPeA} valorMax={peMax} setValorMax={setPeMax} />

        </BodyStatus>

      </> : <>

        <BodyDefesas>
        
          <div className='grid2'>
            <InputStop label={'passiva'} valor={defesas.passiva} />
            <InputStop label={'esquiva'} valor={defesas.esquiva} />
          </div>

          <div className='grid2'>
            <InputStop label={'bloqueio'} valor={defesas.bloqueio} />
            <InputStop label={'sanidade'} valor={defesas.sanidade} />
          </div>

          <hr />

          <div className='grid2'>
            <InputStop label={'morte'} valor={defesas.morte} />
            <InputStop label={'sangue'} valor={defesas.sangue} />
          </div>

          <div className='grid2'>
            <InputStop label={'energia'} valor={defesas.energia} />
            <InputStop label={'conhecimento'} valor={defesas.conhecimento} />
          </div>

          <hr />

          <div className='grid3'>
            <InputStop label={'balística'} valor={defesas.balistica} />
            <InputStop label={'corte'} valor={defesas.corte} />
            <InputStop label={'eletricidade'} valor={defesas.eletricidade} />

            <InputStop label={'físico'} valor={defesas.fisico} />
            <InputStop label={'fogo'} valor={defesas.fogo} />
            <InputStop label={'frio'} valor={defesas.frio} />

            <InputStop label={'impacto'} valor={defesas.impacto} />
            <InputStop label={'perfuração'} valor={defesas.perfuracao} />
            <InputStop label={'químico'} valor={defesas.quimico} />
          </div>

        </BodyDefesas>

      </>}

      
    </Container>
  );
}