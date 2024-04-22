import React from "react"
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";

const estilos = StyleSheet.create({
    tudo: {
        flexDirection: 'row',
        margin: 10,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 20,
        width: 80,
        border: '1px black solid',
    },
    resultado: {
        borderRadius: 5,
        fontSize: 20
    },
    botao: {
        backgroundColor: 'red',
    },
});

const Somar = () => {
    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [resultado, setResultado] = React.useState(0);

    const calcular = () => {
        const soma = num1 + num2
        setResultado(soma)
    }

    return (
        <View style={estilos.tudo} >

            <TextInput style={estilos.input} placeholder="num 1" onChange={(event) => setNum1(+event.target.value)}>
            </TextInput>
            <Text>+</Text>

            <TextInput style={estilos.input} placeholder="num 2" onChange={(event) => setNum2(+event.target.value)}>

            </TextInput>
            <Pressable style={estilos.botao} onPress={calcular}>
                <Text>somar</Text>
            </Pressable>
            <Text style={estilos.resultado} >{resultado}</Text>
        </View>
    )

}
export default Somar