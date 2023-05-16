import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header, Card } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../components/Input'
import { api } from "../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";
import { useFicha } from "../../../../../hooks/ficha";
import { InputSelect } from "../../../../../components/InputSelect";
import pericias from '../../../../../components/mappers/pericias/pericias'

export function ModalEditPericias({data, setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const {setDc} = useFicha()

  const [acrobacia, setacrobacia] = useState(data.pericias[0].bonus ? data.pericias[0].bonus : 0)
  const [adestramento, setadestramento] = useState(data.pericias[1].bonus ? data.pericias[1].bonus : 0)
  const [arte, setarte] = useState(data.pericias[2].bonus ? data.pericias[2].bonus : 0)
  const [atletismo, setatletismo] = useState(data.pericias[3].bonus ? data.pericias[3].bonus : 0)
  const [atualidade, setatualidade] = useState(data.pericias[4].bonus ? data.pericias[4].bonus : 0)
  const [ciencia, setciencia] = useState(data.pericias[5].bonus ? data.pericias[5].bonus : 0)
  const [crime, setcrime] = useState(data.pericias[6].bonus ? data.pericias[6].bonus : 0)
  const [diplomacia, setdiplomacia] = useState(data.pericias[7].bonus ? data.pericias[7].bonus : 0)
  const [enganacao, setenganacao] = useState(data.pericias[8].bonus ? data.pericias[8].bonus : 0)
  const [fortitude, setfortitude] = useState(data.pericias[9].bonus ? data.pericias[9].bonus : 0)
  const [furtividade, setfurtividade] = useState(data.pericias[10].bonus ? data.pericias[10].bonus : 0)
  const [iniciativa, setiniciativa] = useState(data.pericias[11].bonus ? data.pericias[11].bonus : 0)
  const [intimidacao, setintimidacao] = useState(data.pericias[12].bonus ? data.pericias[12].bonus : 0)
  const [intuicao, setintuicao] = useState(data.pericias[13].bonus ? data.pericias[13].bonus : 0)
  const [investigacao, setinvestigacao] = useState(data.pericias[14].bonus ? data.pericias[14].bonus : 0)
  const [luta, setluta] = useState(data.pericias[15].bonus ? data.pericias[15].bonus : 0)
  const [medicina, setmedicina] = useState(data.pericias[16].bonus ? data.pericias[16].bonus : 0)
  const [ocultismo, setocultismo] = useState(data.pericias[17].bonus ? data.pericias[17].bonus : 0)
  const [percepcao, setpercepcao] = useState(data.pericias[18].bonus ? data.pericias[18].bonus : 0)
  const [pilotagem, setpilotagem] = useState(data.pericias[19].bonus ? data.pericias[19].bonus : 0)
  const [pontaria, setpontaria] = useState(data.pericias[20].bonus ? data.pericias[20].bonus : 0)
  const [profissao, setprofissao] = useState(data.pericias[21].bonus ? data.pericias[21].bonus : 0)
  const [reflexo, setreflexo] = useState(data.pericias[22].bonus ? data.pericias[22].bonus : 0)
  const [religiao, setreligiao] = useState(data.pericias[23].bonus ? data.pericias[23].bonus : 0)
  const [sobrevivencia, setsobrevivencia] = useState(data.pericias[24].bonus ? data.pericias[24].bonus : 0)
  const [tatica, settatica] = useState(data.pericias[25].bonus ? data.pericias[25].bonus : 0)
  const [tecnologia, settecnologia] = useState(data.pericias[26].bonus ? data.pericias[26].bonus : 0)
  const [vontade, setvontade] = useState(data.pericias[27].bonus ? data.pericias[27].bonus : 0)

  const [tacrobacia, settacrobacia] = useState(data.pericias[0].grau ? data.pericias[0].grau : 0)
  const [tadestramento, settadestramento] = useState(data.pericias[1].grau ? data.pericias[1].grau : 0)
  const [tarte, settarte] = useState(data.pericias[2].grau ? data.pericias[2].grau : 0)
  const [tatletismo, settatletismo] = useState(data.pericias[3].grau ? data.pericias[3].grau : 0)
  const [tatualidade, settatualidade] = useState(data.pericias[4].grau ? data.pericias[4].grau : 0)
  const [tciencia, settciencia] = useState(data.pericias[5].grau ? data.pericias[5].grau : 0)
  const [tcrime, settcrime] = useState(data.pericias[6].grau ? data.pericias[6].grau : 0)
  const [tdiplomacia, settdiplomacia] = useState(data.pericias[7].grau ? data.pericias[7].grau : 0)
  const [tenganacao, settenganacao] = useState(data.pericias[8].grau ? data.pericias[8].grau : 0)
  const [tfortitude, settfortitude] = useState(data.pericias[9].grau ? data.pericias[9].grau : 0)
  const [tfurtividade, settfurtividade] = useState(data.pericias[10].grau ? data.pericias[10].grau : 0)
  const [tiniciativa, settiniciativa] = useState(data.pericias[11].grau ? data.pericias[11].grau : 0)
  const [tintimidacao, settintimidacao] = useState(data.pericias[12].grau ? data.pericias[12].grau : 0)
  const [tintuicao, settintuicao] = useState(data.pericias[13].grau ? data.pericias[13].grau : 0)
  const [tinvestigacao, settinvestigacao] = useState(data.pericias[14].grau ? data.pericias[14].grau : 0)
  const [tluta, settluta] = useState(data.pericias[15].grau ? data.pericias[15].grau : 0)
  const [tmedicina, settmedicina] = useState(data.pericias[16].grau ? data.pericias[16].grau : 0)
  const [tocultismo, settocultismo] = useState(data.pericias[17].grau ? data.pericias[17].grau : 0)
  const [tpercepcao, settpercepcao] = useState(data.pericias[18].grau ? data.pericias[18].grau : 0)
  const [tpilotagem, settpilotagem] = useState(data.pericias[19].grau ? data.pericias[19].grau : 0)
  const [tpontaria, settpontaria] = useState(data.pericias[20].grau ? data.pericias[20].grau : 0)
  const [tprofissao, settprofissao] = useState(data.pericias[21].grau ? data.pericias[21].grau : 0)
  const [treflexo, settreflexo] = useState(data.pericias[22].grau ? data.pericias[22].grau : 0)
  const [treligiao, settreligiao] = useState(data.pericias[23].grau ? data.pericias[23].grau : 0)
  const [tsobrevivencia, settsobrevivencia] = useState(data.pericias[24].grau ? data.pericias[24].grau : 0)
  const [ttatica, setttatica] = useState(data.pericias[25].grau ? data.pericias[25].grau : 0)
  const [ttecnologia, setttecnologia] = useState(data.pericias[26].grau ? data.pericias[26].grau : 0)
  const [tvontade, settvontade] = useState(data.pericias[27].grau ? data.pericias[27].grau : 0)

  const [nciencia, setnciencia] = useState(data.pericias[5].ramo)
  const [nprofissao, setnprofissao] = useState(data.pericias[21].ramo)

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

        tacrobacias: tacrobacia,
        tadestramento: tadestramento,
        tartes: tarte,
        tatletismo: tatletismo,
        tatualidades: tatualidade,
        tciencia: tciencia,
        tcrime: tcrime,
        tdiplomacia: tdiplomacia,
        tenganacao: tenganacao,
        tfortitude: tfortitude,
        tfurtividade: tfurtividade,
        tiniciativa: tiniciativa,
        tintimidacao: tintimidacao,
        tintuicao: tintuicao,
        tinvestigacao: tinvestigacao,
        tluta: tluta,
        tmedicina: tmedicina,
        tocultismo: tocultismo,
        tpercepcao: tpercepcao,
        tpilotagem: tpilotagem,
        tpontaria: tpontaria,
        tprofissao: tprofissao,
        treflexos: treflexo,
        treligiao: treligiao,
        tsobrevivencia: tsobrevivencia,
        ttatica: ttatica,
        ttecnologia: ttecnologia,
        tvontade: tvontade,

        nciencia: nciencia,
        nprofissao: nprofissao,
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
          {nome: 'acrobacia', bonus: acrobacia, grau: tacrobacia, atributoChave: data.atributos.agilidade},
          {nome: 'adestramento', bonus: adestramento, grau: tadestramento, atributoChave: data.atributos.presenca},
          {nome: 'arte', bonus: arte, grau: tarte, atributoChave: data.atributos.presenca},
          {nome: 'atletismo', bonus: atletismo, grau: tatletismo, atributoChave: data.atributos.forca},
          {nome: 'atualidade', bonus: atualidade, grau: tatualidade, atributoChave: data.atributos.intelecto},
          {nome: 'ciencia', bonus: ciencia, grau: tciencia, ramo: nciencia, atributoChave: data.atributos.intelecto},
          {nome: 'crime', bonus: crime, grau: tcrime, atributoChave: data.atributos.agilidade},
          {nome: 'diplomacia', bonus: diplomacia, grau: tdiplomacia, atributoChave: data.atributos.presenca},
          {nome: 'enganacao', bonus: enganacao, grau: tenganacao, atributoChave: data.atributos.presenca},
          {nome: 'fortitude', bonus: fortitude, grau: tfortitude, atributoChave: data.atributos.vigor},
          {nome: 'furtividade', bonus: furtividade, grau: tfurtividade, atributoChave: data.atributos.agilidade},
          {nome: 'iniciativa', bonus: iniciativa, grau: tiniciativa, atributoChave: data.atributos.agilidade},
          {nome: 'intimidacao', bonus: intimidacao, grau: tintimidacao, atributoChave: data.atributos.presenca},
          {nome: 'intuicao', bonus: intuicao, grau: tintuicao, atributoChave: data.atributos.intelecto},
          {nome: 'investigacao', bonus: investigacao, grau: tinvestigacao, atributoChave: data.atributos.intelecto},
          {nome: 'luta', bonus: luta, grau: tluta, atributoChave: data.atributos.forca},
          {nome: 'medicina', bonus: medicina, grau: tmedicina, atributoChave: data.atributos.intelecto},
          {nome: 'ocultismo', bonus: ocultismo, grau: tocultismo, atributoChave: data.atributos.intelecto},
          {nome: 'percepcao', bonus: percepcao, grau: tpercepcao, atributoChave: data.atributos.presenca},
          {nome: 'pilotagem', bonus: pilotagem, grau: tpilotagem, atributoChave: data.atributos.agilidade},
          {nome: 'pontaria', bonus: pontaria, grau: tpontaria, atributoChave: data.atributos.agilidade},
          {nome: 'profissao', bonus: profissao, grau: tprofissao, ramo: nprofissao, atributoChave: data.atributos.intelecto},
          {nome: 'reflexo', bonus: reflexo, grau: treflexo, atributoChave: data.atributos.agilidade},
          {nome: 'religiao', bonus: religiao, grau: treligiao, atributoChave: data.atributos.presenca},
          {nome: 'sobrevivencia', bonus: sobrevivencia, grau: tsobrevivencia, atributoChave: data.atributos.intelecto},
          {nome: 'tatica', bonus: tatica, grau: ttatica, atributoChave: data.atributos.intelecto},
          {nome: 'tecnologia', bonus: tecnologia, grau: ttecnologia, atributoChave: data.atributos.intelecto},
          {nome: 'vontade', bonus: vontade, grau: tvontade, atributoChave: data.atributos.presenca}
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
      toast.success("Alterado com sucesso!")
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

          <Card>
            <h1>{pericias('acrobacia')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tacrobacia} setGrau={settacrobacia} valor={acrobacia} setValor={setacrobacia} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('adestramento')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tadestramento} setGrau={settadestramento} valor={adestramento} setValor={setadestramento} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('arte')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tarte} setGrau={settarte} valor={arte} setValor={setarte} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('atletismo')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tatletismo} setGrau={settatletismo} valor={atletismo} setValor={setatletismo} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('atualidade')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tatualidade} setGrau={settatualidade} valor={atualidade} setValor={setatualidade} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('ciencia')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tciencia} setGrau={settciencia} valor={ciencia} setValor={setciencia} />
              <Input labelmenor maxLength={30} label={'Área'} valor={nciencia} setValor={setnciencia}/>
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('crime')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tcrime} setGrau={settcrime} valor={crime} setValor={setcrime} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('diplomacia')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tdiplomacia} setGrau={settdiplomacia} valor={diplomacia} setValor={setdiplomacia} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('enganacao')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tenganacao} setGrau={settenganacao} valor={enganacao} setValor={setenganacao} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('fortitude')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tfortitude} setGrau={settfortitude} valor={fortitude} setValor={setfortitude} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('furtividade')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tfurtividade} setGrau={settfurtividade} valor={furtividade} setValor={setfurtividade} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('iniciativa')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tiniciativa} setGrau={settiniciativa} valor={iniciativa} setValor={setiniciativa} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('intimidacao')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tintimidacao} setGrau={settintimidacao} valor={intimidacao} setValor={setintimidacao} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('intuicao')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tintuicao} setGrau={settintuicao} valor={intuicao} setValor={setintuicao} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('investigacao')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tinvestigacao} setGrau={settinvestigacao} valor={investigacao} setValor={setinvestigacao} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('luta')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tluta} setGrau={settluta} valor={luta} setValor={setluta} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('medicina')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tmedicina} setGrau={settmedicina} valor={medicina} setValor={setmedicina} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('ocultismo')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tocultismo} setGrau={settocultismo} valor={ocultismo} setValor={setocultismo} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('percepcao')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tpercepcao} setGrau={settpercepcao} valor={percepcao} setValor={setpercepcao} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('pilotagem')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tpilotagem} setGrau={settpilotagem} valor={pilotagem} setValor={setpilotagem} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('pontaria')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tpontaria} setGrau={settpontaria} valor={pontaria} setValor={setpontaria} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('profissao')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tprofissao} setGrau={settprofissao} valor={profissao} setValor={setprofissao} />
              <Input labelmenor maxLength={30} label={'Área'} valor={nprofissao} setValor={setnprofissao}/>
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('reflexo')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={treflexo} setGrau={settreflexo} valor={reflexo} setValor={setreflexo} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('religiao')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={treligiao} setGrau={settreligiao} valor={religiao} setValor={setreligiao} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('sobrevivencia')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tsobrevivencia} setGrau={settsobrevivencia} valor={sobrevivencia} setValor={setsobrevivencia} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('tatica')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={ttatica} setGrau={setttatica} valor={tatica} setValor={settatica} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('tecnologia')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={ttecnologia} setGrau={setttecnologia} valor={tecnologia} setValor={settecnologia} />
            </div>
            
          </Card>

          <Card>
            <h1>{pericias('vontade')}</h1>
            <hr />
            <div className="body">
              <InputSelect grau={tvontade} setGrau={settvontade} valor={vontade} setValor={setvontade} />
            </div>
            
          </Card>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>
      

    </Container>
  );
}