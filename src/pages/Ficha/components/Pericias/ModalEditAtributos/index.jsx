import React, { useEffect, useState } from "react";
import { Body, Container, Footer, Header } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import {Input} from '../../../../../components/Input'
import { api } from "../../../../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks/auth";
import {AtributoInput} from '../../../../../components/AtributoInput'

export function ModalEditAtributos({data, setData, setModalClose}) {

  const {id} = useParams()
  const {token} = useAuth()

  const [intelecto, setintelecto] = useState(data.atributos.intelecto)
  const [vigor, setvigor] = useState(data.atributos.vigor)
  const [forca, setforca] = useState(data.atributos.forca)
  const [presenca, setpresenca] = useState(data.atributos.presenca)
  const [agilidade, setagilidade] = useState(data.atributos.agilidade)

  async function updateFichaAPI(e) {

    e.preventDefault()

    const response = await api.post('/', {
      query: 'fichas_info_update',
      sessid: token,
      token: id,
      dados: {
        inteligencia: intelecto,
        vigor: vigor,
        forca: forca,
        presenca: presenca,
        agilidade: agilidade,
      }
    })

    if (response.data.success) {
      setData({
        atributos: {
          agilidade: agilidade ? agilidade : 0,
          presenca: presenca ? presenca : 0,
          vigor: vigor ? vigor : 0,
          forca: forca ? forca : 0,
          intelecto: intelecto ? intelecto : 0,
        },
        pericias: [
          {id: 1, nome: 'acrobacia', valor: data.pericias[0].valor, atributoChave: agilidade ? agilidade : 0},
          {id: 2, nome: 'adestramento', valor: data.pericias[1].valor, atributoChave: presenca ? presenca : 0},
          {id: 3, nome: 'arte', valor: data.pericias[2].valor, atributoChave: presenca ? presenca : 0},
          {id: 4, nome: 'atletismo', valor: data.pericias[3].valor, atributoChave: forca ? forca : 0},
          {id: 5, nome: 'atualidade', valor: data.pericias[4].valor, atributoChave: intelecto ? intelecto : 0},
          {id: 6, nome: 'ciencia', valor: data.pericias[5].valor, atributoChave: intelecto ? intelecto : 0},
          {id: 7, nome: 'crime', valor: data.pericias[6].valor, atributoChave: agilidade ? agilidade : 0},
          {id: 8, nome: 'diplomacia', valor: data.pericias[7].valor, atributoChave: presenca ? presenca : 0},
          {id: 9, nome: 'enganacao', valor: data.pericias[8].valor, atributoChave: presenca ? presenca : 0},
          {id: 10, nome: 'fortitude', valor: data.pericias[9].valor, atributoChave: vigor ? vigor : 0},
          {id: 11, nome: 'furtividade', valor: data.pericias[10].valor, atributoChave: agilidade ? agilidade : 0},
          {id: 12, nome: 'iniciativa', valor: data.pericias[11].valor, atributoChave: agilidade ? agilidade : 0},
          {id: 13, nome: 'intimidacao', valor: data.pericias[12].valor, atributoChave: presenca ? presenca : 0},
          {id: 14, nome: 'intuicao', valor: data.pericias[13].valor, atributoChave: intelecto ? intelecto : 0},
          {id: 15, nome: 'investigacao', valor: data.pericias[14].valor, atributoChave: intelecto ? intelecto : 0},
          {id: 16, nome: 'luta', valor: data.pericias[15].valor, atributoChave: forca ? forca : 0},
          {id: 17, nome: 'medicina', valor: data.pericias[16].valor, atributoChave: intelecto ? intelecto : 0},
          {id: 18, nome: 'ocultismo', valor: data.pericias[17].valor, atributoChave: intelecto ? intelecto : 0},
          {id: 19, nome: 'percepcao', valor: data.pericias[18].valor, atributoChave: presenca ? presenca : 0},
          {id: 20, nome: 'pilotagem', valor: data.pericias[19].valor, atributoChave: agilidade ? agilidade : 0},
          {id: 21, nome: 'pontaria', valor: data.pericias[20].valor, atributoChave: agilidade ? agilidade : 0},
          {id: 22, nome: 'profissao', valor: data.pericias[21].valor, atributoChave: intelecto ? intelecto : 0},
          {id: 23, nome: 'reflexo', valor: data.pericias[22].valor, atributoChave: agilidade ? agilidade : 0},
          {id: 24, nome: 'religiao', valor: data.pericias[23].valor, atributoChave: presenca ? presenca : 0},
          {id: 25, nome: 'sobrevivencia', valor: data.pericias[24].valor, atributoChave: intelecto ? intelecto : 0},
          {id: 26, nome: 'tatica', valor: data.pericias[25].valor, atributoChave: intelecto ? intelecto : 0},
          {id: 27, nome: 'tecnologia', valor: data.pericias[26].valor, atributoChave: intelecto ? intelecto : 0},
          {id: 28, nome: 'vontade', valor: data.pericias[27].valor, atributoChave: presenca ? presenca : 0}
        ]
      })
      setModalClose()
      toast.success("Alterado com sucesso!")
    }

  }

  return (
    <Container>

      <form onSubmit={updateFichaAPI}>

        <Header>

          <h1>Atributos</h1>
          <button type="button" onClick={setModalClose}>x</button>

        </Header>

        <hr />

        <Body>

          <AtributoInput vig={vigor} agi={agilidade} forca={forca} int={intelecto} pre={presenca} setAgi={setagilidade} 
          setFor={setforca} setInt={setintelecto} setPre={setpresenca} setVig={setvigor}/>

        </Body>

        <hr />

        <Footer>

          <button type="submit">Salvar</button>

        </Footer>

      </form>
      

    </Container>
  );
}