import React from "react"
import { StyleSheet,Pressable, Text, TextInput, View } from "react-native";

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

const Multiplicar =() =>{
const [numero01, setNumero01]= React.useState(0);
const [numero02, setNumero02]= React.useState(0);
const [resultado, setResultado]= React.useState(0);

const calcular= ()=>{
    const soma = numero01*numero02
    setResultado (soma)
}

return(
    <View style={estilos.tudo}>
        <TextInput style={estilos.input} placeholder="num 1" onChange={(event)=> setNumero01(+event.target.value)}>   
        </TextInput >
            <Text>*</Text>
        <TextInput style={estilos.input} placeholder="num 2" onChange={(event)=> setNumero02(+event.target.value)}>   
        </TextInput>
        <Pressable style={estilos.botao} onPress={calcular}>
            <Text>Multiplicar</Text>
        </Pressable>
        <Text style={estilos.resultado} >{resultado}</Text>
    </View>
)
}
export default Multiplicar