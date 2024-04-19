import { useState } from "react"
import './Euro.css'

const Euro = () => {
    const cambioEuro = 5.5

    let [valorReal, setValorReal] = useState(0)
    let [valorEuro, setValorEuro] = useState(0)

    const mudarValorReal = (event) => {
        let valorDigitado = (+event.target.value)

        setValorReal(valorDigitado)
        setValorEuro(valorDigitado / cambioEuro)
    }

    const mudarValorEuro = (event) => {
        let valorDigitado = (+event.target.value)

        setValorEuro(valorDigitado)
        setValorReal(valorDigitado * cambioEuro)
    }

    return <>
        <input className="inputs" type="number" value={valorReal} onChange={mudarValorReal} />
        reais é igual a
        <input className="inputs" type="number" value={valorEuro.toFixed(2)} onChange={mudarValorEuro} />
        euros
    </>
}

export default Euro