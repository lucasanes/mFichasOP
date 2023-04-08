import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer } from "react-toastify";
import {Input} from '../../../../../components/Input'
import { api } from "../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";
import { useFicha } from "../../../../../hooks/ficha";

export function ModalEditPericias({data, setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const {setDc} = useFicha()

  const [acrobacia, setacrobacia] = useState(data.pericias[0].valor ? data.pericias[0].valor : 0)
  const [adestramento, setadestramento] = useState(data.pericias[1].valor ? data.pericias[1].valor : 0)
  const [arte, setarte] = useState(data.pericias[2].valor ? data.pericias[2].valor : 0)
  const [atletismo, setatletismo] = useState(data.pericias[3].valor ? data.pericias[3].valor : 0)
  const [atualidade, setatualidade] = useState(data.pericias[4].valor ? data.pericias[4].valor : 0)
  const [ciencia, setciencia] = useState(data.pericias[5].valor ? data.pericias[5].valor : 0)
  const [crime, setcrime] = useState(data.pericias[6].valor ? data.pericias[6].valor : 0)
  const [diplomacia, setdiplomacia] = useState(data.pericias[7].valor ? data.pericias[7].valor : 0)
  const [enganacao, setenganacao] = useState(data.pericias[8].valor ? data.pericias[8].valor : 0)
  const [fortitude, setfortitude] = useState(data.pericias[9].valor ? data.pericias[9].valor : 0)
  const [furtividade, setfurtividade] = useState(data.pericias[10].valor ? data.pericias[10].valor : 0)
  const [iniciativa, setiniciativa] = useState(data.pericias[11].valor ? data.pericias[11].valor : 0)
  const [intimidacao, setintimidacao] = useState(data.pericias[12].valor ? data.pericias[12].valor : 0)
  const [intuicao, setintuicao] = useState(data.pericias[13].valor ? data.pericias[13].valor : 0)
  const [investigacao, setinvestigacao] = useState(data.pericias[14].valor ? data.pericias[14].valor : 0)
  const [luta, setluta] = useState(data.pericias[15].valor ? data.pericias[15].valor : 0)
  const [medicina, setmedicina] = useState(data.pericias[16].valor ? data.pericias[16].valor : 0)
  const [ocultismo, setocultismo] = useState(data.pericias[17].valor ? data.pericias[17].valor : 0)
  const [percepcao, setpercepcao] = useState(data.pericias[18].valor ? data.pericias[18].valor : 0)
  const [pilotagem, setpilotagem] = useState(data.pericias[19].valor ? data.pericias[19].valor : 0)
  const [pontaria, setpontaria] = useState(data.pericias[20].valor ? data.pericias[20].valor : 0)
  const [profissao, setprofissao] = useState(data.pericias[21].valor ? data.pericias[21].valor : 0)
  const [reflexo, setreflexo] = useState(data.pericias[22].valor ? data.pericias[22].valor : 0)
  const [religiao, setreligiao] = useState(data.pericias[23].valor ? data.pericias[23].valor : 0)
  const [sobrevivencia, setsobrevivencia] = useState(data.pericias[24].valor ? data.pericias[24].valor : 0)
  const [tatica, settatica] = useState(data.pericias[25].valor ? data.pericias[25].valor : 0)
  const [tecnologia, settecnologia] = useState(data.pericias[26].valor ? data.pericias[26].valor : 0)
  const [vontade, setvontade] = useState(data.pericias[27].valor ? data.pericias[27].valor : 0)

  async function updateFichaAPI(e) {

    e.preventDefault()

    const response = await api.post('/', {
      query: 'fichas_info_update',
      sessid: token,
      token: id,
      dados: {
        acrobacias: acrobacia,
        adestramento: adestramento,
        artes: arte,
        atletismo: atletismo,
        atualidades: atualidade,
        ciencia: ciencia,
        crime: crime,
        diplomacia: diplomacia,
        enganacao: enganacao,
        fortitude: fortitude,
        furtividade: furtividade,
        iniciativa: iniciativa,
        intimidacao: intimidacao,
        intuicao: intuicao,
        investigacao: investigacao,
        luta: luta,
        medicina: medicina,
        ocultismo: ocultismo,
        percepcao: percepcao,
        pilotagem: pilotagem,
        pontaria: pontaria,
        profissao: profissao,
        reflexos: reflexo,
        religiao: religiao,
        sobrevivencia: sobrevivencia,
        tatica: tatica,
        tecnologia: tecnologia,
        vontade: vontade,
      }
    })

    if (response.data.success) {
      setData({
        atributos: {
          agilidade: data.atributos.agilidade,
          presenca: data.atributos.presenca,
          vigor: data.atributos.vigor,
          forca: data.atributos.forca,
          intelecto: data.atributos.intelecto
        },
        pericias: [
          {id: 1, nome: 'acrobacia', valor: acrobacia, atributoChave: data.atributos.agilidade},
          {id: 2, nome: 'adestramento', valor: adestramento, atributoChave: data.atributos.presenca},
          {id: 3, nome: 'arte', valor: arte, atributoChave: data.atributos.presenca},
          {id: 4, nome: 'atletismo', valor: atletismo, atributoChave: data.atributos.forca},
          {id: 5, nome: 'atualidade', valor: atualidade, atributoChave: data.atributos.intelecto},
          {id: 6, nome: 'ciencia', valor: ciencia, atributoChave: data.atributos.intelecto},
          {id: 7, nome: 'crime', valor: crime, atributoChave: data.atributos.agilidade},
          {id: 8, nome: 'diplomacia', valor: diplomacia, atributoChave: data.atributos.presenca},
          {id: 9, nome: 'enganacao', valor: enganacao, atributoChave: data.atributos.presenca},
          {id: 10, nome: 'fortitude', valor: fortitude, atributoChave: data.atributos.vigor},
          {id: 11, nome: 'furtividade', valor: furtividade, atributoChave: data.atributos.agilidade},
          {id: 12, nome: 'iniciativa', valor: iniciativa, atributoChave: data.atributos.agilidade},
          {id: 13, nome: 'intimidacao', valor: intimidacao, atributoChave: data.atributos.presenca},
          {id: 14, nome: 'intuicao', valor: intuicao, atributoChave: data.atributos.intelecto},
          {id: 15, nome: 'investigacao', valor: investigacao, atributoChave: data.atributos.intelecto},
          {id: 16, nome: 'luta', valor: luta, atributoChave: data.atributos.forca},
          {id: 17, nome: 'medicina', valor: medicina, atributoChave: data.atributos.intelecto},
          {id: 18, nome: 'ocultismo', valor: ocultismo, atributoChave: data.atributos.intelecto},
          {id: 19, nome: 'percepcao', valor: percepcao, atributoChave: data.atributos.presenca},
          {id: 20, nome: 'pilotagem', valor: pilotagem, atributoChave: data.atributos.agilidade},
          {id: 21, nome: 'pontaria', valor: pontaria, atributoChave: data.atributos.agilidade},
          {id: 22, nome: 'profissao', valor: profissao, atributoChave: data.atributos.intelecto},
          {id: 23, nome: 'reflexo', valor: reflexo, atributoChave: data.atributos.agilidade},
          {id: 24, nome: 'religiao', valor: religiao, atributoChave: data.atributos.presenca},
          {id: 25, nome: 'sobrevivencia', valor: sobrevivencia, atributoChave: data.atributos.intelecto},
          {id: 26, nome: 'tatica', valor: tatica, atributoChave: data.atributos.intelecto},
          {id: 27, nome: 'tecnologia', valor: tecnologia, atributoChave: data.atributos.intelecto},
          {id: 28, nome: 'vontade', valor: vontade, atributoChave: data.atributos.presenca}
        ]
      })
      setDc({
        "FOR": data.atributos.forca,
        "AGI": data.atributos.agilidade,
        "INT": data.atributos.intelecto,
        "PRE": data.atributos.presenca,
        "VIG": data.atributos.vigor,

        "ACRO": acrobacia,
        "ADES": adestramento,
        "ARTE": arte,
        "ATLE": atletismo,
        "ATUA": atualidade,
        "CIEN": ciencia,
        "CRIM": crime,
        "DIPL": diplomacia,
        "ENGA": enganacao,
        "FORT": fortitude,
        "FURT": furtividade,
        "INIT": iniciativa,
        "INTI": intimidacao,
        "INTU": intuicao,
        "INVE": investigacao,
        "LUTA": luta,
        "MEDI": medicina,
        "OCUL": ocultismo,
        "PERC": percepcao,
        "PILO": pilotagem,
        "PONT": pontaria,
        "PROF": profissao,
        "REFL": reflexo,
        "RELI": religiao,
        "SOBR": sobrevivencia,
        "TATI": tatica,
        "TECN": tecnologia,
        "VONT": vontade
      })
      setModalClose()
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Perícias</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

        <div className='grid2'>
          <Input label={'Acrobacia'} valor={acrobacia} setValor={setacrobacia} />
          <Input label={'Adestramento'} valor={adestramento} setValor={setadestramento} />
        </div>

        <div className='grid2'>
          <Input label={'Arte'} valor={arte} setValor={setarte} />
          <Input label={'Atletismo'} valor={atletismo} setValor={setatletismo} />
        </div>

        <div className='grid2'>
          <Input label={'Atualidade'} valor={atualidade} setValor={setatualidade} />
          <Input label={'Ciencia'} valor={ciencia} setValor={setciencia} />
        </div>

        <div className='grid2'>
          <Input label={'Crime'} valor={crime} setValor={setcrime} />
          <Input label={'Diplomacia'} valor={diplomacia} setValor={setdiplomacia} />
        </div>

        <div className='grid2'>
          <Input label={'Enganacao'} valor={enganacao} setValor={setenganacao} />
          <Input label={'Fortitude'} valor={fortitude} setValor={setfortitude} />
        </div>

        <div className='grid2'>
          <Input label={'Furtividade'} valor={furtividade} setValor={setfurtividade} />
          <Input label={'Iniciativa'} valor={iniciativa} setValor={setiniciativa} />
        </div>

        <div className='grid2'>
          <Input label={'Intimidacao'} valor={intimidacao} setValor={setintimidacao} />
          <Input label={'Intuicao'} valor={intuicao} setValor={setintuicao} />
        </div>

        <div className='grid2'>
          <Input label={'Investigacao'} valor={investigacao} setValor={setinvestigacao} />
          <Input label={'Luta'} valor={luta} setValor={setluta} />
        </div>

        <div className='grid2'>
          <Input label={'Medicina'} valor={medicina} setValor={setmedicina} />
          <Input label={'Ocultismo'} valor={ocultismo} setValor={setocultismo} />
        </div>

        <div className='grid2'>
          <Input label={'Percepcao'} valor={percepcao} setValor={setpercepcao} />
          <Input label={'Pilotagem'} valor={pilotagem} setValor={setpilotagem} />
        </div>

        <div className='grid2'>
          <Input label={'Pontaria'} valor={pontaria} setValor={setpontaria} />
          <Input label={'Profissao'} valor={profissao} setValor={setprofissao} />
        </div>

        <div className='grid2'>
        <Input label={'Reflexo'} valor={reflexo} setValor={setreflexo} />
        <Input label={'Religiao'} valor={religiao} setValor={setreligiao} />
        </div>

        <div className='grid2'>
          <Input label={'Sobrevivencia'} valor={sobrevivencia} setValor={setsobrevivencia} />
          <Input label={'Tatica'} valor={tatica} setValor={settatica} />
        </div>

        <div className='grid2'>
          <Input label={'Tecnologia'} valor={tecnologia} setValor={settecnologia} />
          <Input label={'Vontade'} valor={vontade} setValor={setvontade} />
        </div>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>
      <ToastContainer/>

    </Container>
  );
}