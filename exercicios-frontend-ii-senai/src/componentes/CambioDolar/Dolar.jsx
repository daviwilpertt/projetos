import { useState } from "react"
import './Dolar.css'

const Dolar = () => {
    const cambioDolar = 5

    let [valorReal, setValorReal] = useState('')
    let [valorDolar, setValorDolar] = useState('')

    const mudarValorReal = (event) => {
        let valorDigitado = (+event.target.value)

        setValorDolar(valorDigitado)
        setValorReal(valorDigitado / cambioDolar)
    }

    const mudarValorDolar = (event) => {
        let valorDigitado = (+event.target.value)

        setValorReal(valorDigitado)
        setValorDolar(valorDigitado * cambioDolar)
    }

    return <>
        <input className="inputs" type="number" value={valorDolar} onChange={mudarValorReal} />
        reais é igual a
        <input className="inputs" type="number" value={valorReal} onChange={mudarValorDolar} />
        dolares
    </>
}

export default Dolar