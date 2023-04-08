import { useState } from "react"
import { Container, InputB, LabelContainer } from "./styles"

export function TextArea({ menor = false, label, valor, setValor, ...rest }) {

    const [focus, setFocus] = useState(false)

    return (
        <Container>
            <LabelContainer menor={menor} active={focus}>
                {label}
            </LabelContainer>
            <InputB menor={menor} defaultValue={valor} type="text" {...rest}
                onChange={(event) => {
                    setValor(event.target.value)
                }}
                onFocus={() => {
                    setFocus(true)
                }}
                onBlur={() => {
                    setFocus(false)
                }}
            />
        </Container>
    )
}