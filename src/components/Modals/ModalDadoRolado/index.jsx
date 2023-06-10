import { useEffect, useState } from 'react';
import { Container, Header, Main, Footer, CloseButton, Span } from './styles';
import pericias from '../../mappers/pericias/pericias';
import {useFicha} from '../../../hooks/ficha'
import { api } from '../../../services/api';
import { useAuth } from '../../../hooks/auth';
import { useParams } from 'react-router-dom';

export function ModalDadoRolado({ setModalEditIsOpenFalse, data }) {

  const [dado, setDado] = useState({});
  const {dc} = useFicha()

  const {token} = useAuth()
  const {id} = useParams()

  // useEffect(() => {
  //   const rolarDado = () => {

  //     if (data.isDano == false) {

  //       let qtdDado;
  //       let valorMax;
  //       let totalValores = [];
  //       let contaTotal = [];

  //       let splitD

  //       let soma = 0

  //       if (data.valor.includes('+')) {
  //         const splitMais = data.valor.split('+')
  //         soma = splitMais[1]

  //         splitD = splitMais[0].split('d')
  //       } else {
  //         splitD = data.valor.split('d')
  //       }

  //       qtdDado = Number(splitD[0])
  //       valorMax = Number(splitD[1])

  //       if (qtdDado == 0) {

  //         for (let i = 0; i < 2; i++) {

  //           const valorGerado = Math.floor(Math.random() * valorMax + 1);
  //           totalValores.push(valorGerado);

  //         }

  //         const menor = Math.min.apply(null, totalValores)
  //         contaTotal.push(menor)

  //       } else if (qtdDado == -1) {

  //         for (let i = 0; i < 3; i++) {

  //           const valorGerado = Math.floor(Math.random() * valorMax + 1);
  //           totalValores.push(valorGerado);

  //         }

  //         const menor = Math.min.apply(null, totalValores)
  //         contaTotal.push(menor)

  //       } else {

  //         for (let i = 0; i < qtdDado; i++) {

  //           const valorGerado = Math.floor(Math.random() * valorMax + 1);
  //           totalValores.push(valorGerado);

  //         }

  //         const maior = Math.max.apply(null, totalValores)
  //         contaTotal.push(maior)

  //       }

  //       if (soma > 0) {
  //         contaTotal.push(soma)
  //       }

  //       setDados({
  //         valorTotal: eval(contaTotal.join("+")),
  //         conta: contaTotal.join("+"),
  //         dadosRolados: [
  //           {
  //             dado: 'd' + valorMax,
  //             valores: totalValores
  //           }
  //         ]
  //       });

  //     } else {

  //       let soma = []
  //       let contaTotal = [];
  //       let todosDadosRolados = []

  //       if (data.valor.includes('+')) {
  //         const splitSoma = data.valor.split('+')

  //         for (let i = 0; i < splitSoma.length; i++) {

  //           if (splitSoma[i].includes('d')) {
  //             const splitDado = splitSoma[i].split('d')
  //             let qtdDado = splitDado[0]
  //             let valorMax = splitDado[1]

  //             let totalValores = [];

  //             for (let i = 0; i < qtdDado; i++) {

  //               const valorGerado = Math.floor(Math.random() * valorMax + 1);
  //               totalValores.push(valorGerado);
  //               contaTotal.push(valorGerado)

  //             }

  //             const novoDado = {
  //               dado: 'd' + valorMax,
  //               valores: totalValores
  //             }

  //             todosDadosRolados.push(novoDado)

  //           } else {
  //             soma.push(splitSoma[i])
  //           }
  //         }

  //         if (soma.length > 0) {
  //           contaTotal.push('(' + soma.join('+') + ')')
  //         }

  //         setDados({
  //           valorTotal: eval(contaTotal.join("+")),
  //           conta: contaTotal.join("+"),
  //           dadosRolados: todosDadosRolados
  //         });

  //       } else {

  //         let totalValores = []
  //         let contaTotal = []

  //         const splitDado = data.valor.split('d')

  //         let qtdDado = splitDado[0]
  //         let valorMax = splitDado[1]

  //         for (let i = 0; i < qtdDado; i++) {
  //           const valorGerado = Math.floor(Math.random() * valorMax + 1);
  //           totalValores.push(valorGerado);
  //           contaTotal.push(valorGerado)
  //         }

  //         setDados({
  //           valorTotal: eval(contaTotal.join("+")),
  //           conta: contaTotal.join("+"),
  //           dadosRolados: [
  //             {
  //               dado: 'd' + valorMax,
  //               valores: totalValores
  //             }
  //           ]
  //         });
  //       }

  //     };
  //   }

  //   rolarDado();
  // }, []);

  function DadoDinamico(dado, arr = null) {
    if (dado.includes("/")) {
      for (const [i, v] of Object.entries(arr)) {
        dado = dado.replaceAll(i, v);
      }
      dado = dado.replaceAll("/", "");
    }
    return dado;
  }

  function rolarDado(dado_bruto, dano = false, margem = 20) {

    function best(array) {
      let largest = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
          largest = array[i];
        }
      }
      return largest;
    }
    
    function worst(array) {
      let largest = array[0];
      for (let i = 0; i < array.length; i++) {
        if (array[i] < largest) {
          largest = array[i];
        }
      }
      return largest;
    }
    
    let resultado = 0, faces = 0, print= "", critico = false, index = 0, saida = {}, negativo = false, rolagens = [], dados = [];
    
    dado_bruto = dado_bruto.replaceAll("-", "+-");
    let dado_fragmentado = dado_bruto.split("+");

    dado_fragmentado.forEach((e,i)=>{
      if (e) {
        let separador = e.split("d");
        let quantidade = parseInt(separador[0] ? separador[0] : 1);
        if (separador[0] === '-') {
          quantidade = 1
        }
        if (separador.length === 2) {
          faces = parseInt(separador[1]);

          if (quantidade === 0) {
            quantidade = -2;
          }
          if (quantidade < 0) {
            quantidade = Math.abs(quantidade);
            negativo = true;
          }
          saida[index] = {}
          saida[index]["resultados"] = [];
          if (dano) {
            saida[index]["dado"] = "d" + faces;
            for (let i = 0; i < quantidade; i++) {
              saida[index]["rolagens"] = i + 1;
              saida[index]["dados"] = i + 1;
              saida[index]["resultados"][i] = Math.floor(Math.random() * (faces)) + 1;
              resultado += parseInt(saida[index]["resultados"][i]);
              print += (print ? '+' : "") + saida[index]["resultados"][i];
            }
          } else {
            for (let i = 0; i < quantidade; i++) {
              saida[index]["resultados"][i] = Math.floor(Math.random() * (faces)) + 1
            }

            if (!negativo) {

              if(faces === 20 && best(saida[index]['resultados']) >= margem){
                critico = true;
              }

            } else {
              if(faces === 20 && worst(saida[index]['resultados']) >= margem){
                critico = true;
              }
            }

            saida[index]["rolagens"] = quantidade;
            saida[index]["dados"] = quantidade;
            saida[index]["dado"] = "d" + faces;
            saida[index]["melhor"] = best(saida[index]["resultados"]);
            saida[index]["pior"] = worst(saida[index]["resultados"]);
            resultado += parseInt(saida[index][negativo ? "pior" : "melhor"]);
            print += (print ? "+" : '') + saida[index][negativo ? "pior" : "melhor"];
            saida[index]["resultado"] = saida[index][negativo ? "pior" : "melhor"];
          }
          index++;
        } else {
          if (quantidade > 0) {
            quantidade = (saida["print"] ? "+" : "+") + quantidade;
            print += quantidade;
          }
          resultado += parseInt(quantidade);
        }
      }
    })

    for (let i = 0; i < index; i++) {
      rolagens.push(saida[i])
      dados.push(saida[i])
    }

    saida["dano"] = dano;
    saida["critico"] = critico;
    saida["resultado"] = resultado;
    saida["margem"] = margem;
    saida["print"] = print;
    saida["rolagens"] = rolagens
    saida["dados"] = dados
    
    setDado(saida)

    return saida;
  }

  useEffect(() => {
    
    async function fetchData() {

      const dadoRolado = rolarDado(DadoDinamico(data.valor, dc), data.isDano, data.margem)

      if (token && id) {

        const response = await api.post('/', {
          query: 'etc_dices_submit',
          sessid: token,
          token: id,
          nome: pericias(data.nome) != null ? pericias(data.nome) : data.nome,
          dado: dadoRolado,
        })

      }

    }

    fetchData()

  }, [])

  return (
    <Container isDano={data.isDano.toString()}>

      <Header>

        <h1>{pericias(data.nome) != null ? pericias(data.nome) : data.nome}</h1>
        <CloseButton onClick={setModalEditIsOpenFalse}>X</CloseButton>

      </Header>

      <Main isCritico={dado.critico}>
        <span>
          {dado.print} = <Span critico={dado.critico}>{dado.resultado}</Span>
        </span>
      </Main>

      <Footer isCritico={dado.critico}>
        {dado.rolagens && dado.rolagens.map((dado) => (
          <span key={dado.dado}>
            {dado.dado}: {dado.resultados.join(', ')}
          </span>
        ))}
      </Footer>

    </Container>
  );

}