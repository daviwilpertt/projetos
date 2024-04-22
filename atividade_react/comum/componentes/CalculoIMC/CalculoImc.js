import React from "react"
import { StyleSheet,Pressable, TextInput, View,Text } from "react-native"

const estilo = StyleSheet.create({
    tudo:{
        flexDirection:'row', 
    },
    input:{
        backgroundColor:'white',
        fontSize:15,
        borderRadius: 5,
        width: 80,
        border: '1px black solid',
    },
    texto: {
        fontSize: 20,
    },
    
})

const CalculoIMC = ()=>{

    const [peso,setPeso]= React.useState(0)
    const [altura,SetAltura]= React.useState(0)
    const [imc,setIMC]= React.useState(0)
    const [status,setStatus]= React.useState('')

    const calcularIMC= ()=> {
        const calculo = peso/ (altura*altura)
        setIMC(calculo);

        if (calculo>30) {
            setStatus('obeso')
        }
        else if (calculo>25 && calculo<=30){
            setStatus('sobrepeso')
        }
        else if (calculo>18.5 && calculo<=25){
            setStatus('abaixo do peso')
        }
    }
    return(
        <View style={estilo.tudo}>
            <TextInput style={estilo.input} placeholder="peso"  onChange={(event)=>setPeso(+event.target.value)}>

            </TextInput>

            <TextInput style={estilo.input}  placeholder="altura"  onChange={(event)=> SetAltura(+event.target.value)}>

            </TextInput>

            <Pressable onPress={calcularIMC}>
                <Text style={estilo.texto} >calcular</Text>
            </Pressable>
            <Text style={estilo.texto} >IMC {imc.toFixed(2)}{status}</Text>

        </View>
    )
}

export default CalculoIMC