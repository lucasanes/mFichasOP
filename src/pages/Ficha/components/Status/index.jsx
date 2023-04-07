import {BodyDefesas, BodyStatus, Button, Container, Header, Img, PortraitButton} from './styles'
import {InputStop} from '../../../../components/InputStop'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import {Barrinha} from '../../../../components/Barrinha'
import { api } from '../../../../services/api';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../hooks/auth';
import { ButtonEditHeader } from '../../../../components/ButtonEditHeader';

export function Status({data, setData}) {

  const isFirstRender = useRef(true)

  const [changinTimer, setChanginTimer] = useState(null)

  const {id} = useParams()
  const {token} = useAuth()

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
  const [municaoA, setMunicaoA] = useState(status.municaoA)
  const [municaoMax, setMunicaoMax] = useState(status.municaoMax)

  const foto = new Image();
  foto.src = status.foto;
  const foto_ferido = new Image();
  foto_ferido.src = status.foto_ferido;
  const foto_insano = new Image();
  foto_insano.src = status.foto_insano;
  const foto_insanoeferido = new Image();
  foto_insanoeferido.src = status.foto_insanoeferido;
  const foto_morrendo = new Image();
  foto_morrendo.src = status.foto_morrendo;

  useEffect(() => {

    if (status.foto_morrendo != null && (pvA == 0)) {
      setFotoAtual(foto_morrendo.src);
    } else if (status.foto_insanoeferido != null && (psA == 0 && pvA < (pvMax / 2))) {
      setFotoAtual(foto_insanoeferido.src);
    } else if (status.foto_insano != null && psA == 0) {
      setFotoAtual(foto_insano.src);
    } else if (status.foto_ferido != null && (pvA < (status.pvMax / 2))) {
      setFotoAtual(foto_ferido.src);
    }  else {
      setFotoAtual(foto.src);
    }

  }, [pvA, pvMax, psA, psMax, peA, peMax])

  async function updateFichaAPI() {

    const response = await api.post('/', {
      query: 'fichas_info_update',
      sessid: token,
      token: id,
      dados: {
        pva: pvA,
        pv: pvMax,
        sana: psA,
        san: psMax,
        pea: peA,
        pe: peMax,
        balasusadas: municaoA,
        balas: municaoMax,
        combate: combate,
        morrendo: morto,
        opv: opv,
        osan: ops,
        ope: ope,
      }
    })

    console.log(response)

  }

  function subtimer() {
    clearTimeout(changinTimer);
    setChanginTimer(setTimeout(updateFichaAPI, 2000))
  }

  useEffect(() => {

    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    setData(prevState => ({
      ...prevState,
      status: {
        foto: status.foto,
        foto_insano: status.foto_insano,
        foto_ferido: status.foto_ferido,
        foto_morrendo: status.foto_morrendo,
        foto_insanoeferido: status.foto_insanoeferido,
        pvA,
        pvMax,
        psA,
        psMax,
        peA,
        peMax,
        municaoA,
        municaoMax,
        combate,
        morto,
        opv,
        ops,
        ope,
      }
    }))

    subtimer()

  }, [pvA, pvMax, psA, psMax, peA, peMax, municaoA, municaoMax, combate, morto, opv, ops, ope])

  return (
    <Container>

      <Header>
        <Button hover={miniBody == 'status'} onClick={() => setMiniBody('status')}>Status</Button>
        <Button hover={miniBody == 'defesas'} onClick={() => setMiniBody('defesas')}>Defesas</Button>
        <ButtonEditHeader/>
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
                  <PortraitButton onClick={() => setCombate(!combate)} hover={combate + 'yellow'} color={'yellow'}>Combate</PortraitButton>
                  {/* <PortraitButton onClick={() => setMorto(!morto)}  hover={morto + 'aqua'} color={'aqua'}>Insano</PortraitButton>
                  <PortraitButton onClick={() => setMorto(!morto)}  hover={morto + 'red'} color={'darkred'}>Morrendo</PortraitButton> */}
                  <PortraitButton onClick={(e) => setMorto(!morto)}  hover={morto + 'red'} color={'red'}>Morto</PortraitButton>
                </div>

                <div className='portrait-ocultar'>
                  <h2>Ocultar</h2>
                  <PortraitButton onClick={() => setOpv(!opv)} hover={opv + 'red'} color={'red'}>Vida</PortraitButton>
                  <PortraitButton onClick={() => setOps(!ops)} hover={ops + 'blue'} color={'blue'}>Sanidade</PortraitButton>
                  <PortraitButton onClick={() => setOpe(!ope)} hover={ope + 'yellow'} color={'yellow'}>Esforço</PortraitButton>
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
          <h3>Munição</h3>
          <Barrinha color={'orange'} number={4} valorA={municaoA} setValorA={setMunicaoA} valorMax={municaoMax} setValorMax={setMunicaoMax} />
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