import { Link } from 'react-router-dom';
import {Container, Header, HeaderButtons, MiniHeader, Button, Card, Body1, Body2, Body3, Flex, Body4, Body} from './styles'
import { BiTrash, BiTrashAlt, BiUnlink, BiUser } from 'react-icons/bi';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import {Modal} from '../../../../../components/Modals/Modal'
import {TextAreaStop} from '../../../../../components/TextAreaStop'
import {ModalDadoRolado} from '../../../../../components/Modals/ModalDadoRolado'
import { BarrinhaNPC } from '../../../../../components/BarrinhaNPC';
import {ButtonDeleteComponent} from '../../../../../components/ButtonDeleteComponent'
import {ButtonEditComponent} from '../../../../../components/ButtonEditComponent'
import atributos from '../../../../../components/mappers/atributos/atributos'
import pericias from '../../../../../components/mappers/pericias/pericias'
import resistencias from '../../../../../components/mappers/resistencias/resistencias'
import { ModalEditMonstro } from './ModalEditMonstro';

export function Monstro({data, lista, setData}) {

  const [dadoData, setDadoData] = useState({})
  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  const [pvA, setPvA] = useState(data.status.pvA)
  const [pv, setPv] = useState(data.status.pv)
  const [psA, setPsA] = useState(data.status.psA)
  const [ps, setPs] = useState(data.status.ps)
  const [peA, setPeA] = useState(data.status.peA)
  const [pe, setPe] = useState(data.status.pe)

  useEffect(() => {

    data.status.pvA = pvA
    data.status.pv = pv
    data.status.psA = psA
    data.status.ps = ps
    data.status.peA = peA
    data.status.pe = pe

  }, [pvA, pv, psA, ps, peA, pe])

  const mapeamento = {
    adestramento: data.atributos.pre,
    arte: data.atributos.pre,
    diplomacia: data.atributos.pre,
    enganacao: data.atributos.pre,
    intimidacao: data.atributos.pre,
    percepcao: data.atributos.pre,
    religiao: data.atributos.pre,
    vontade: data.atributos.pre,
    acrobacia: data.atributos.agi,
    crime: data.atributos.agi,
    furtividade: data.atributos.agi,
    pilotagem: data.atributos.agi,
    pontaria: data.atributos.agi,
    reflexo: data.atributos.agi,
    atletismo: data.atributos.forca,
    luta: data.atributos.forca,
    atualidade: data.atributos.int,
    ciencia: data.atributos.int,
    intuicao: data.atributos.int,
    investigacao: data.atributos.int,
    medicina: data.atributos.int,
    ocultismo: data.atributos.int,
    profissao: data.atributos.int,
    sobrevivencia: data.atributos.int,
    tatica: data.atributos.int,
    tecnologia: data.atributos.int,
    fortitude: data.atributos.vig,
    iniciativa: data.atributos.agi
  }

  const [miniBody, setMiniBody] = useState(0)

  const [hover, sethover] = useState(false)
  const contentRef = useRef(null)

  let timeout2;

  function iniciador2(ref) {
    timeout2 = setTimeout(doSomething2(ref), 300);
  }
  
  function finalizador() {
    clearTimeout(timeout2);
  }

  function doSomething2(ref) {
    const content = ref.current;
    content.style.transition = "0.3s ease-in";
    content.style.height = `${content.scrollHeight + 30}px`;
    content.style.padding = "1.5rem";
  }

  function slideToggle(ref, fechaabre, mini) {
    
    const content = ref.current;

    if (fechaabre) {
      finalizador()
      content.style.transition = "0.3s ease-out";
      content.style.height = "0";
      content.style.padding = "0 1.5rem";
      setTimeout(() => setMiniBody(mini), 290);
      setTimeout(() => {
        iniciador2(ref)
      }, 300);
      sethover(true);
      return
    }

    finalizador()

    if (hover) {
      content.style.transition = "0.3s ease-out";
      content.style.height = "0";
      content.style.padding = "0 1.5rem";
      setTimeout(() => {
        setMiniBody(0)
      }, 290);
      sethover(false);
    } else {
      setMiniBody(mini)
      setTimeout(() => {
        iniciador2(ref)
      }, 100);
      sethover(true);
    }
  }

  window.addEventListener('resize', () => {

    const content = contentRef.current;
    
    if (content) {
      if (content.style.height != '0px' && content.style.height != '') {
        content.style.transition = "height 0.3s ease-in";
        content.style.height = `${content.scrollHeight}px`;
      }
    }

  })

  async function handleDelete() {

    const novaLista = lista.filter(monstro => monstro.token != data.token)
    setData(novaLista)

  }

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setClose={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)} data={dadoData} />
      </Modal>

      <Modal isOpen={modalEditIsOpen} setClose={() => setModalEditIsOpen(false)}>
        <ModalEditMonstro data={data} setPv={setPv} setPs={setPs} setPe={setPe} setModalClose={() => setModalEditIsOpen(false)}/>
      </Modal>

      <Header>
        <h1>{data.nome}</h1>
        
        <HeaderButtons>
          <ButtonEditComponent size={18} onClick={() => setModalEditIsOpen(true)}/>
          <ButtonDeleteComponent size={18} handleExecute={handleDelete}/>
        </HeaderButtons>
      </Header>

      <MiniHeader>
        <Button active={miniBody == 1} onClick={() => slideToggle(contentRef, hover && miniBody != 1, 1)}>Principal</Button>
        <Button active={miniBody == 2} onClick={() => slideToggle(contentRef, hover && miniBody != 2, 2)}>Perícias</Button>
        <Button active={miniBody == 3} onClick={() => slideToggle(contentRef, hover && miniBody != 3, 3)}>Defesas</Button>
        <Button active={miniBody == 4} onClick={() => slideToggle(contentRef, hover && miniBody != 4, 4)}>Outros</Button>
      </MiniHeader>

      <Body ref={contentRef} hover={hover.toString()}>

        <Body1 active={miniBody == 1}>

          <h1>Atributos</h1>

          <Flex>
            {Object.entries(data.atributos).map(([key, value]) => <button 
              onClick={() => {
                setDadoData({nome: atributos(key), valor: `${value}d20`, isDano: false})
                setModalDadoRoladoIsOpen(true)
              }
            } className='button' key={key}>{`${atributos(key)}: ${value}`}</button>)}
          </Flex>

          <br />
          
          <h2>Vida</h2>
          <BarrinhaNPC nome={'PV'} number={`${data.token}-1`} valorA={pvA} setValorA={setPvA} valorMax={pv} setValorMax={setPv} color={'red'}/>
          <h2>Sanidade</h2>
          <BarrinhaNPC nome={'SAN'} number={`${data.token}-2`} valorA={psA} setValorA={setPsA} valorMax={ps} setValorMax={setPs} color={'aqua'}/>
          <h2>Esforço</h2>
          <BarrinhaNPC nome={'PE'} number={`${data.token}-3`} valorA={peA} setValorA={setPeA} valorMax={pe} setValorMax={setPe} color={'yellow'}/>
  
        </Body1>

        <Body2 active={miniBody == 2}>

          <Flex>
            {Object.entries(data.pericias).map(([key, value]) => value > 0 && <button 
              onClick={() => {
                setDadoData({nome: pericias(key), valor: `${mapeamento[key]}d20+${value}`, isDano: false})
                setModalDadoRoladoIsOpen(true)
              }
            } className='button' key={key}>{`${pericias(key)}: ${value}`}</button>)}
          </Flex>

        </Body2>

        <Body3 active={miniBody == 3}>

          <h1>Defesas</h1>

          <Flex>
            {Object.entries(data.defesas).map(([key, value]) => value > 0 && <span key={key}>{`${key}: ${value}`}</span>)}
          </Flex>

          <h2>Resistências</h2>

          <Flex>
            {Object.entries(data.res).map(([key, value]) => value > 0 && <span key={key}>{`${resistencias(key)}: ${value}`}</span>)}
          </Flex>

        </Body3>

        <Body4 active={miniBody == 4}>

          <h1>Ataques</h1>
          <TextAreaStop style={{marginBottom: '1rem', fontSize: '1.6rem'}} valor={data.outros.ataques}/>
          <h1>Habilidades</h1>
          <TextAreaStop style={{marginBottom: '1rem', fontSize: '1.6rem'}} valor={data.outros.habilidades}/>
          <h1>Detalhes</h1>
          <TextAreaStop style={{marginBottom: '1rem', fontSize: '1.6rem'}} valor={data.outros.detalhes}/>

        </Body4>

      </Body>
      
    </Container>
  );
}