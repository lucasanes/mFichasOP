import { useEffect, useState } from "react"
import { Container, ContainerInput, InputA, InputB, LabelContainer, Progress, ProgressBar, SpanMsg} from "./styles"
import {AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Preview } from "../Preview";

export function InputImg({ id, label, setValor, valor, ...rest }) {

  const [hover, sethover] = useState(false)
  const [erro, seterro] = useState('')
  const [file, setFile] = useState(undefined)
  const [msg, setMsg] = useState('Enviar Foto')

  const progress = document.getElementById(`fileprogress${id}`)

  useEffect(() => {
    if (valor != null && valor.toString().length > 0) {
      sethover(true)
    } else {
      if (!hover) {
        sethover(false)
      }
      setMsg('Enviar foto')
      setFile(undefined)
      seterro('')
    }
  }, [valor])

  async function handleFileUpload() {
    const data = new FormData();
    data.append('query', 'etc_foto_upload')
    data.append('file', file);

    const response = await api.post('/', data, {
      onUploadProgress: (ProgressEvent) => {
        setMsg('Aguarde...')
        progress.style.width = (ProgressEvent.loaded / ProgressEvent.total) * 100 + '%'
      },
    })

    if (response.data.success) {
      setMsg('Enviado!')
      setValor(response.data.url)
      seterro('')
    } else {
      progress.style.width = '0%'
      setMsg('Erro!')
      seterro(response.data.msg)
    }

  }

  useEffect(() => {

    if (file != undefined) {

      handleFileUpload()

    }

  }, [file])

  return (
    <Container>

      <div className="container">
      
        <LabelContainer hover={hover}>
          {label}
        </LabelContainer>

        <ContainerInput>
          <InputA value={valor} type={'text'} {...rest}
            onChange={(event) => {
              setValor(event.target.value)
            }}
            onFocus={() => {
              sethover(true)
            }}
            onBlur={() => {
              if (valor == null || valor.toString().length == 0) {
                sethover(false)
              }
            }}
          />
          <InputB progresso={!file && 'ni'}>
            <SpanMsg msg={msg == 'Erro!' ? 'erro' : msg == 'Enviado!' && 'enviado' } className="msg">{msg}</SpanMsg>
            <ProgressBar progresso={!file && 'ni'}>
              <Progress id={`fileprogress${id}`} progresso={msg == 'Enviado!' ? 'f' : 'i'}/>
            </ProgressBar>
            <input type="file" style={{display: 'none'}} onChange={(e) => setFile(e.target.files[0])}/>
          </InputB>
        </ContainerInput>

      </div>
      {erro && <span className="span">{erro}</span>}
      <Preview foto={valor}/>
    </Container>
  )
}