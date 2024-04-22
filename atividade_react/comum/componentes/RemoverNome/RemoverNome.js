import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

const estilos = StyleSheet.create({
    tudo: {
        
    }
})

const RemoverNome = () => {
    let [nomes, setNomes] = useState(['fulano', 'ciclano', 'peliclano', 'beltrano'])

    const deletar = (index) => {
        let novosNomes = nomes.slice()
        novosNomes.splice(index, 1)
        setNomes(novosNomes)

    }

    return <View style={estilos.tudo}>
        <ul>
            {nomes.map((nome, index) => (
                <li key={index}>
                    {nome}
                    <button onClick={() => deletar(index)}>remover</button>
                </li>
            ))}
        </ul>
    </View>
}

export default RemoverNome