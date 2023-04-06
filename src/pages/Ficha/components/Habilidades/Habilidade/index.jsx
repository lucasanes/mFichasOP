import { useRef, useState } from 'react';
import { ButtonDelete } from '../../../../../components/ButtonDelete';
import { ButtonEdit } from '../../../../../components/ButtonEdit';
import {Container, Header1, Button, Body} from './styles'
import { IoIosArrowForward } from 'react-icons/io'

export function Habilidade({data}) {

  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  function slideToggle(ref) {
    
    const content = ref.current;
  
    if (active) {
      content.style.transition = "height 0.3s ease-out";
      content.style.height = "0";
      setActive(false);
    } else {
      content.style.transition = "height 0.3s ease-in";
      content.style.height = `${content.scrollHeight}px`;
      setActive(true);
    }
  }

  return (
    <Container>
      <Header1>
        <Button active={active} onClick={() => {slideToggle(contentRef)}}><IoIosArrowForward color='white' size={20}/>{data.nome}</Button>
        <ButtonEdit segundo size={18}/>
        <ButtonDelete size={18}/>
      </Header1>
      <hr />
      <Body ref={contentRef}>
        <p>{data.descricao}</p>
      </Body>
    </Container>
  );
}