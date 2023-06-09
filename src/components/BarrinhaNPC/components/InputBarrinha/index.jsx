import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../../services/api"
import { Container, InputB, } from "./styles"
import {useFicha} from '../../../../hooks/ficha'

export function InputBarrinha({max = 10000, setValor, valor, valorMax, right = false, ...rest }) {

    const {blockPerm} = useFicha()

    function onlyNumbers(v) {
        if (v < max) {
            if (v > valorMax) {
                setValor(valor)
            } else {
                v = v.replace(/[^0-9]/g, "")
                setValor(Number(v))
            }
        }
    }

    return (
        <Container>
            <InputB disabled={blockPerm} autoComplete="off" right={right} value={valor != null ? valor : 0} type="number" {...rest}
                onChange={(event) => {
                    onlyNumbers(event.target.value)
                }}
            />
        </Container>
    )
}