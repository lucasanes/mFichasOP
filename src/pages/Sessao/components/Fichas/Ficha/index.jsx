import { Link } from 'react-router-dom';
import {Container, Header, HeaderButtons, MiniHeader, Button, Card, Body1, Body2, Body3, Flex, Body4, Body} from './styles'
import { BiUnlink, BiUser } from 'react-icons/bi';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { useRef, useState } from 'react';
import { BarrinhaV } from '../../../../../components/BarrinhaV';
import atributos from '../../../../../components/mappers/atributos/atributos'
import pericias from '../../../../../components/mappers/pericias/pericias'
import resistencias from '../../../../../components/mappers/resistencias/resistencias'

export function Ficha({data}) {

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

  return (
    <Container>

      <Header>
        <h1>{data.infos.nome}</h1>
        
        <HeaderButtons>
          <button>
            <BiUnlink size={20} color={'#c31437'}/> 
          </button>
          <Link className='padding' target='_blank'
          to={`https://fichasop.com/sessao/personagem/portrait/?token=${data.token}`}
          ><BiUser size={20} color={'#00ffff'}/></Link>
          <Link
          to={`/ficha/${data.token}`}
          ><BsBoxArrowUpRight size={16} color={'#00ffff'}/></Link>
        </HeaderButtons>
      </Header>

      <MiniHeader>
        <Button active={miniBody == 1} onClick={() => slideToggle(contentRef, hover && miniBody != 1, 1)}>Infos</Button>
        <Button active={miniBody == 2} onClick={() => slideToggle(contentRef, hover && miniBody != 2, 2)}>Status</Button>
        <Button active={miniBody == 3} onClick={() => slideToggle(contentRef, hover && miniBody != 3, 3)}>Dados</Button>
        <Button active={miniBody == 4} onClick={() => slideToggle(contentRef, hover && miniBody != 4, 4)}>Defesas</Button>
      </MiniHeader>

      <Body ref={contentRef} hover={hover.toString()}>

        <Body1 active={miniBody == 1}>

          <Flex>
            
            <Card>  
              <label>NEX:</label>
              <span>{`${data.infos.nex}%`}</span>
            </Card>
          
            <Card>
              <label>Idade:</label>
              <span>{data.infos.idade}</span>
            </Card>

            <Card>
              <label>Local:</label>
              <span>{data.infos.local}</span>
            </Card>

            <Card>
              <label>Origem:</label>
              <span>{data.infos.origem}</span>
            </Card>

            <Card>
              <label>Classe:</label>
              <span>{data.infos.classe}</span>
            </Card>

            {(data.infos.trilha && data.infos.trilha != 'Nenhuma') &&
              <Card>
                <label>Trilha:</label>
                <span>{data.infos.trilha}</span>
              </Card>
            }

          </Flex>
        
        </Body1>

        <Body2 active={miniBody == 2}>
          <BarrinhaV nome={'PV'} number={`${data.token}-1`} valorA={data.status.pvA} valorMax={data.status.pv} color={'red'}/>
          <BarrinhaV nome={'SAN'} number={`${data.token}-2`} valorA={data.status.psA} valorMax={data.status.ps} color={'aqua'}/>
          <BarrinhaV nome={'PE'} number={`${data.token}-3`} valorA={data.status.peA} valorMax={data.status.pe} color={'yellow'}/>
          <BarrinhaV nome={'MUN'} number={`${data.token}-4`} valorA={data.status.munA} valorMax={data.status.mun} color={'orange'}/>
          <span className='span'>Peso: {data.status.pesoA}/{data.status.peso}</span>
        </Body2>

        <Body3 active={miniBody == 3}>

          <h1>Atributos</h1>

          <Flex>
            {Object.entries(data.atributos).map(([key, value]) => <span key={key}>{`${atributos(key)}: ${value}`}</span>)}
          </Flex>

          <h2>Perícias</h2>

          <Flex>
            {Object.entries(data.pericias).map(([key, value]) => value > 0 && <span key={key}>{`${pericias(key)}: ${value}`}</span>)}
          </Flex>

        </Body3>

        <Body4 active={miniBody == 4}>

          <h1>Defesas</h1>

          <Flex>
            {Object.entries(data.defesas).map(([key, value]) => value > 0 && <span key={key}>{`${key}: ${value}`}</span>)}
          </Flex>

          <h2>Resistências</h2>

          <Flex>
            {Object.entries(data.res).map(([key, value]) => value > 0 && <span key={key}>{`${resistencias(key)}: ${value}`}</span>)}
          </Flex>

        </Body4>

      </Body>
      
    </Container>
  );
}