import { useState } from 'react'
import './Dividir.css'

const Dividir = () => {
    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    let saida_divisao = document.querySelector('#saida_divisao')

    const dividir = () => {
        saida_divisao.innerHTML = num1 / num2
    }

    return <>
        <input className='inputs' type="number" value={num1} onChange={(event) => setNum1(+event.target.value)} placeholder='numero 1' />
        /
        <input className='inputs' type="number" value={num2} onChange={(event) => setNum2(+event.target.value)} placeholder='numero 2' />
        =
        <label id='saida_divisao'></label>
        <br />
        <button onClick={dividir}>calcular</button>
    </>
}

export default Dividir