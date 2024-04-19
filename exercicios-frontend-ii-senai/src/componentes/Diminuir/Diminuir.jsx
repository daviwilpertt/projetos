import { useState } from 'react'
import './Diminuir.css'

const Diminuir = () => {
    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    let saida_sub = document.querySelector('#saida_sub')

    const diminuir = () => {
        saida_sub.innerHTML = num1 - num2
    }

    return <>
        <input className='inputs' type="number" value={num1} onChange={(event) => setNum1(+event.target.value)} placeholder='numero 1' />
        -
        <input className='inputs' type="number" value={num2} onChange={(event) => setNum2(+event.target.value)} placeholder='numero 2' />
        =
        <label id='saida_sub'></label>
        <br />
        <button onClick={diminuir}>calcular</button>
    </>
}

export default Diminuir