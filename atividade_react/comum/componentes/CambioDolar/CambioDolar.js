import React from "react"
import { StyleSheet,Text, TextInput, View } from "react-native"

const estilo= StyleSheet.create({
    tudo:{
        flexDirection: 'row',
        margin: 10,
    },
    input:{
        backgroundColor:'white',
        borderRadius:5,
        width: 80,
        fontSize: 15,
        border: '1px black solid',
    },
    texto: {
        fontSize: 20,
    },
    
})

const CambioDolar = () =>{
    const taxaCambio = 5

    const [valorDolar,setValorDolar]=React.useState(0)
    const [valorReal,SetValorReal]=React.useState(0)

    const conversaoDolar = (event)=>{
        const valorDigitado = (+event.target.value);
        setValorDolar(valorDigitado)
        SetValorReal(valorDigitado/taxaCambio)
    }
    const conversaoReal =(event)=>{
        const valorDigitado = (+event.target.value);
        SetValorReal(valorDigitado);
        setValorDolar(valorDigitado*taxaCambio);
    }

    return(
        <View style={estilo.tudo}>
            <TextInput style={estilo.input} value={valorDolar.toFixed(2)} onChange={conversaoDolar}>
            </TextInput>
                <Text style={estilo.texto} >reais é igual a</Text>
            <TextInput style={estilo.input}  value={valorReal.toFixed(2)} onChange={conversaoReal} ></TextInput>
                <Text style={estilo.texto} >dólares</Text>
        </View>
    )


}

export default CambioDolar