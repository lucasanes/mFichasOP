import { useState } from "react"
import { Container, InputB, LabelContainer } from "./styles"

export function TextAreaStop({ label, valor, setValor, ...rest }) {

    const [focus, setFocus] = useState(false)

    return (
        <Container>
            <LabelContainer active={focus}>
                {label}
            </LabelContainer>
            <InputB disabled={true} value={((valor == 0) || (valor != null && valor != undefined && valor != '')) ? valor : '- - -'} type="text" {...rest}/>
        </Container>
    )
}