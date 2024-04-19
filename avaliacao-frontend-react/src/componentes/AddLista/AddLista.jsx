import { useState } from "react"
import './AddLista.css'

const AddLista = () => {

    let [tarefa, setTarefa] = useState('')
    let [lista, setLista] = useState([])

    const mudarTarefa = (event) => {
        setTarefa(event.target.value)
    }

    const addTarefa = () => {
        if (tarefa !== '') {
            setLista(lista.concat(tarefa))
            setTarefa('')
        }
        else {
            alert('nenhuma tarefa para listar')
        }
    }

    const deletar = (index) => {
        if (confirm('deseja mesmo remover?') == true) {
            lista.splice(index, 1)
            setLista([...lista])
        }
    }

    return <div className="divLista">
        <h1>Lista de Tarefas ({lista.length})</h1>
        <span>
            <input type="text" className="input" value={tarefa} onChange={mudarTarefa} placeholder="descrição da tarefa" />
            <button className="botoes" onClick={addTarefa}>adicionar</button>
        </span>
        <span className="spanLista">
            <ul className="lista">
                {lista.map((tarefa, index) => (
                    <li key={index}>
                        {tarefa}
                        <button className="botoes" onClick={() => deletar(index)}>remover</button>
                    </li>
                ))
                }
            </ul>
        </span>
    </div>
}

export default AddLista