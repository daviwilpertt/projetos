import React from 'react'
import './MostrarTela.css'

const MostrarTela = () => {
    const [tela, setTela] = React.useState('') 
    const conteudo = (texto) => {
        setTela(texto)
    }

    return <>
        <button onClick={() => conteudo('conteúdo tela 1')}>Tela I</button>
        <button onClick={() => conteudo('conteúdo tela 2')}>Tela II</button>
        <button onClick={() => conteudo('conteúdo tela 3')}>Tela III</button>
        <p>{tela}</p>
    </>

}

export default MostrarTela