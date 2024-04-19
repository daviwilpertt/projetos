import { useState } from 'react'
import './Somar.css'

const Somar = () => {
    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    let saida_soma = document.querySelector('#saida_soma')

    const calcular = () => {
        saida_soma.innerHTML = num1 + num2
    }

    return <>
        <input className='inputs' type="number" value={num1} onChange={(event) => setNum1(+event.target.value)} placeholder='numero 1' />
        +
        <input className='inputs' type="number" value={num2} onChange={(event) => setNum2(+event.target.value)} placeholder='numero 2' />
        =
        <label id='saida_soma'></label>
        <br />
        <button onClick={calcular}>calcular</button>
    </>
}

export default Somar