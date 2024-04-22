import React from "react"
import { StyleSheet, Pressable, View, Text } from "react-native"

const estilos = StyleSheet.create({
    tudoContador: {
        flexDirection: 'row',
    },
    botao: {
        borderRadius: '5px',
        backgroundColor: 'red',
        margin: '5px',
    },
    texto: {
        fontSize: 22
    }
})

const BotaoContador = () => {

    const [contador, setContador] = React.useState(0)

    let somar = () => {
        setContador(contador + 1)
    }
    
    let diminuir = () => {
        setContador(contador - 1)
    }


    return (
        <View style={estilos.tudoContador}>
            <Pressable style={estilos.botao} onPress={somar}>
                <Text style={estilos.texto} >+</Text>
            </Pressable>
            <Text style={estilos.texto}>{contador}</Text>
            <Pressable style={estilos.botao} onPress={diminuir}>
                <Text style={estilos.texto}>-</Text>
            </Pressable>
        </View>
    )
}

export default BotaoContador