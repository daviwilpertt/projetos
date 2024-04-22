import React from "react"
import {  StyleSheet,Text, TextInput, View } from "react-native"

const estilo= StyleSheet.create({
    tudo:{
        flexDirection: 'row',   
        margin: 10,
    },
    input:{
        backgroundColor:'white',
        borderRadius:5,
        fontSize: 15,
        border: '1px black solid',
        width: 80,
    },
    texto: {
        fontSize: 20,
    }, 
    
})

const CambioEuro = () =>{
    const taxaCambio = 5

    const [valorEuro,setValorEuro]=React.useState(0)
    const [valorReal,SetValorReal]=React.useState(0)

    const conversaoEuro = (event)=>{
        const valorDigitado = (+event.target.value);
        setValorEuro(valorDigitado)
        SetValorReal(valorDigitado/taxaCambio)
    }
    const conversaoReal =(event)=>{
        const valorDigitado = (+event.target.value);
        SetValorReal(valorDigitado);
        setValorEuro(valorDigitado*taxaCambio);
    }

    return(
        <View style={estilo.tudo}> 
            <TextInput style={estilo.input} value={valorEuro.toFixed(2)} onChange={conversaoEuro}>
            </TextInput>
                <Text style={estilo.texto} >reais é igual a</Text>
            <TextInput  style={estilo.input} value={valorReal.toFixed(2)} onChange={conversaoReal} ></TextInput>
                <Text style={estilo.texto} >Euros</Text>
        </View>
    )


}

export default CambioEuro