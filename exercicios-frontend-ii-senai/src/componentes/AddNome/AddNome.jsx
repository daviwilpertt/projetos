import { useState } from "react"

const AddNome = () => {

    let [nome, setNome] = useState('')
    let [lista, setLista] = useState([])
    
    const mudarNome = (event) => {
        setNome(event.target.value)

    }
    const adicionarNome = () => {
        if (nome !== '') {
            setLista(lista.concat(nome))
            setNome('')
        }
    }


    return <>
        <input type="text" value={nome} onChange={mudarNome} />
        <br />
        <button onClick={adicionarNome}>adcionar</button>
        <ul>
            {lista.map((nome, index) => (
                <li key={index}>{nome}</li>
            ))}
        </ul>
    </>

}

export default AddNome