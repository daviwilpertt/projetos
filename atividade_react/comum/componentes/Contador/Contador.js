import React from "react"
import { StyleSheet, Pressable, View, Text } from "react-native"


const estilos = StyleSheet.create({
    Contador: {
        flexDirection: 'row',
    },
    texto: {
        fontSize: 22
    }

})


const Contador = () => {
    const [contador, setContador] = React.useState(0)

    return (
        <View>
            <Pressable style={estilos.Contador} onPress={() => setContador(contador + 1)}>
                <Text style={estilos.texto}>contador é: {contador}</Text>
            </Pressable>
        </View>

    )
}

export default Contador