import { useState } from 'react'
import './Multiplicar.css'

const Multiplicar = () => {
    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    let saida_multi = document.querySelector('#saida_multi')

    const multiplicar = () => {
        saida_multi.innerHTML = num1 * num2
    }

    return <>
        <input className='inputs' type="number" value={num1} onChange={(event) => setNum1(+event.target.value)} placeholder='numero 1' />
        *
        <input className='inputs' type="number" value={num2} onChange={(event) => setNum2(+event.target.value)} placeholder='numero 2' />
        =
        <label id='saida_multi'></label>
        <br />
        <button onClick={multiplicar}>calcular</button>
    </>
}

export default Multiplicar