import { useState } from 'react'
import './Formulario.css'

const Formulario = () => {
    const [campoNome, setNome] = useState('')
    const [campoCor, setCor] = useState('#408753')

    const alterarNome = (event) => {
        setNome(event.target.value)
}

    const alterarCor = (event) => {
        setCor(event.target.value)
    }

    return <div className='formulario'>
        <input type="text" value={campoNome} onChange={alterarNome} placeholder='nome' />
        <br />
        <input type="color" value={campoCor} onChange={alterarCor} placeholder='cor'/>
    </div>
}

export default Formulario