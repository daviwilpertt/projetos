import { useState } from "react"
import { Pressable, TextInput, View } from "react-native"
import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    tudo: {
        flexDirection: 'column'
    },
    input: {
        width: 80,
    },
    botao: {
        backgroundColor: 'green',
        justifyContent: 'center',
        flex: 2,
    },
});


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


    return <View style={estilos.tudo}>
        <TextInput style={estilos.input} placeholder="nome" value={nome} onChange={mudarNome} />
        <br />
        <Pressable style={estilos.botao} onPress={adicionarNome}>adcionar</Pressable>
        <ul>
            {lista.map((nome, index) => (
                <li key={index}>{nome}</li>
            ))}
        </ul>
    </View>

}

export default AddNome