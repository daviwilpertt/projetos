import { useState } from "react"

const CalculoIMC = () => {

    let [altura, setAltura] = useState('')
    let [peso, setPeso] = useState('')
    let [imc, setImc] = useState(0)
    let [status, setStatus] = useState('')


    const mudarPeso = (event) => {
        setPeso(event.target.value)
    }

    const mudarAltura = (event) => {
        setAltura(event.target.value)
    }

    const calcularIMC = () => {
        const formula_imc = peso / (altura * altura)
        setImc(formula_imc)

        if (formula_imc < 18) {
            setStatus('Abaixo do Peso')
        }
        else if (formula_imc >= 18 && formula_imc < 25) {
            setStatus('Peso normal')
        }
        else if (formula_imc >= 25 && formula_imc < 30) {
            setStatus('Sobrepeso')
        }
        else if (formula_imc >= 30) {
            setStatus('Obeso')
        }
    }


    return <>
        <input type="number" value={peso} onChange={mudarPeso} /> peso Kg
        <br />
        <input type="number" value={altura} onChange={mudarAltura} /> altura M
        <br />
        <button onClick={calcularIMC}>calcular</button>
        <br />
        imc: {imc.toFixed(2)} <br />
        status: {status}

    </>
}

export default CalculoIMC