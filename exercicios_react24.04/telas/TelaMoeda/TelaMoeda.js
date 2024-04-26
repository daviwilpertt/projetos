import { StyleSheet, Text, View } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from "react"
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"

const TelaMoeda = () => {

    const estilos = StyleSheet.create({
        tudo: {
            flex: 1,
            alignItems: 'center'

        },
        icone: {
            alignItems: 'center'
        },
        input: {
            padding: 10,
            width: 300,
            border: '2px solid black',
            margin: 15,
            fontSize: 20,
        },
    })

    let taxaDolar = 5.1
    let taxaEuro = 5.5

    let [real,setValorReal]=React.useState(0)
    let [dolar, setValorDolar] = React.useState(0)
    let [euro, setValorEuro] = React.useState(0)
    
    const conversaoReal = (value) => {
        setValorReal(value)
        let valorDolar = (value) / taxaDolar
        let valorEuro = (value) / taxaEuro
        setValorDolar(valorDolar.toFixed(2))
        setValorEuro(valorEuro.toFixed(2))
    }

    const conversaoDolar = (value) => {
        setValorDolar(value)
        let valorReal = (value) * taxaDolar
        let valorEuro = ((value) / taxaDolar) / taxaEuro
        setValorReal(valorReal.toFixed(2))
        setValorEuro(valorEuro.toFixed(2))
    }

    const conversaoEuro = (value) => {
        setValorEuro(value)
        let valorReal = (value) * taxaEuro
        let valorDolar = ((value) / taxaEuro) / taxaDolar
        setValorDolar(valorDolar.toFixed(2))
        setValorReal(valorReal.toFixed(2))
    }

   
    return (
        <View style={estilos.tudo}>
            <MaterialIcons style={estilos.icone} name="attach-money" size={64} color='blue' />
            <CampoTextoCustomizado style={estilos.input} label='Real' value={real} onChangeText={conversaoReal} />
            <CampoTextoCustomizado style={estilos.input} label='Dolar' value={dolar} onChangeText={conversaoDolar} />
            <CampoTextoCustomizado style={estilos.input} label='Euro' value={euro} onChangeText={conversaoEuro} />
        </View>
    )
}

export default TelaMoeda
