import React from 'react'
import './BotaoContador.css'

const BotaoContador = () => {
    const [numero, setNumero] = React.useState(0)

    const incrementar = () => {
        setNumero(numero + 1)
    }
    
    return <button className='botaoContador' onClick={incrementar}>contador é: {numero}</button>
}

export default BotaoContador