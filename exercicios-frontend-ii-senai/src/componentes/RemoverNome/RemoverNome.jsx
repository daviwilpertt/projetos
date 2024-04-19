import { useState } from "react";

const RemoverNome = () => {
    let [nomes, setNomes] = useState(['fulano', 'ciclano', 'peliclano', 'beltrano'])

    const deletar = (index) => {
        let novosNomes = nomes.slice()
        novosNomes.splice(index, 1)
        setNomes(novosNomes)

    }

    return <>
        <ul>
            {nomes.map((nome, index) => (
                <li key={index}>
                    {nome}
                    <button onClick={() => deletar(index)}>remover</button>
                </li>
            ))}
        </ul>
    </>
}

export default RemoverNome