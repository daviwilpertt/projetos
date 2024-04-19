import { useState } from 'react'
import './Contador.css'

const Contador = () => {
    const [numero, setNumero] = useState(0)

    let somar = () => {
        setNumero(numero + 1)
    }

    let diminuir = () => {
        setNumero(numero - 1)
    }

    return <>
        <button className='contador' onClick={somar}>mais 1</button>
        {numero}
        <button className='contador' onClick={diminuir}>menos 1</button>
    </>


}

export default Contador