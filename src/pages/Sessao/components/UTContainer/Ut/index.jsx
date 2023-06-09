import {Body, Container, Header, Img} from './styles'

export function Ut({data}) {

  return (
    <Container>

      <Header>
        <Img>
          <img src={data.fotoP}/>
        </Img>  
        <h1>{data.nomeP}</h1>
        <span>{data.hora}</span>
      </Header>

      <Body dano={data.dano}>
        <h1>{data.nomeDado}</h1>
        <h2>{data.print} = {data.resultado}</h2>
        {data.rolagens.map((dado, i) => 
          <span key={`${i}-${dado.dado}`}>
            {dado.dado}: {dado.resultados.join(', ')}
          </span>
        )}
      </Body>

    </Container>
  );
}