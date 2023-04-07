import { useRef, useState } from 'react';
import { ButtonDeleteComponent } from '../../../../../components/ButtonDeleteComponent';
import { ButtonEditComponent } from '../../../../../components/ButtonEditComponent';
import {Container, Header1, Button, Body} from './styles'
import { IoIosArrowForward } from 'react-icons/io'

export function Habilidade({data}) {

  const [focus, setfocus] = useState(false)
  const contentRef = useRef(null)

  function slideToggle(ref) {
    
    const content = ref.current;
  
    if (focus) {
      content.style.transition = "height 0.3s ease-out";
      content.style.height = "0";
      setfocus(false);
    } else {
      content.style.transition = "height 0.3s ease-in";
      content.style.height = `${content.scrollHeight}px`;
      setfocus(true);
    }
  }

  return (
    <Container>
      <Header1>
        <Button focus={focus} onClick={() => {slideToggle(contentRef)}}><IoIosArrowForward color='white' size={20}/>{data.nome}</Button>
        <div>
          <ButtonEditComponent segundo size={18}/>
          <ButtonDeleteComponent size={18}/>
        </div>
      </Header1>
      <hr />
      <Body ref={contentRef}>
        <p>{data.descricao}</p>
      </Body>
    </Container>
  );
}