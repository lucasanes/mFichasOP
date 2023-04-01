import {Body, Container, Header} from './styles'
import {InputStop} from '../../../../components/InputStop'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';

export function Status({data}) {
  return (
    <Container>

      <Header>
        <h1>Principal</h1>
        <button><MdOutlineModeEditOutline color='yellow' size={22}/></button>
      </Header>

      <hr />

      <Body>
        <InputStop label={'Nome'} valor={data.nome}/>
        <InputStop label={'Jogador'} valor={data.usuario}/>
        <InputStop label={'Idade'} valor={data.idade}/>
        <InputStop label={'Nacionalidade'} valor={data.nacionalidade}/>
        <InputStop label={'Origem'} valor={data.origem}/>
        <InputStop label={'NEX'} valor={data.nex}/>
        <InputStop label={'Classe'} valor={data.classe}/>
        <InputStop label={'Trilha'} valor={data.trilha}/>
        <InputStop label={'Patente'} valor={`${data.patente} - ${data.prestigio}`}/>
        <InputStop label={'Deslocamento'} valor={data.deslocamento}/>
        <InputStop label={'PE/Rod'} valor={data.peprod}/>
        {data.afinidade && <InputStop label={'Afinidade'} valor={data.afinidade}/>}
      </Body>
    </Container>
  );
}