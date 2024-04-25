import { Text, View } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from "react"
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"

const TelaMoeda = () => {

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
        <View>
            <MaterialIcons name="attach-money" size={64} color='blue' />
            <CampoTextoCustomizado label='Real' value={real} onChangeText={conversaoReal} />
            <CampoTextoCustomizado label='Dolar' value={dolar} onChangeText={conversaoDolar} />
            <CampoTextoCustomizado label='Euro' value={euro} onChangeText={conversaoEuro} />
        </View>
    )
}

export default TelaMoeda
