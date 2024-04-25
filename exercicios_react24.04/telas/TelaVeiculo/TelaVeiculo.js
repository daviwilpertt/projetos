import React from "react"
import { Text, View } from "react-native"
import Fontisto from '@expo/vector-icons/Fontisto'
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"

const TelaVeiculo = () => {

    let [distancia, setDistancia] = React.useState()
    let [qntCombustivel, setQntCombustivel] = React.useState()
    let [res, setRes] = React.useState()

    const calcular = () => {
        res = distancia / qntCombustivel
        setRes(res.toFixed(2))
        console.log(res)
    }

    return (
        <View>
            <Fontisto name="car" size={32} color='red' />
            <CampoTextoCustomizado label='distancia (Km)' value={distancia} onChangeText={setDistancia} inputMode='numeric' />
            <CampoTextoCustomizado label='qnt combustivel (L)' value={qntCombustivel} onChangeText={setQntCombustivel} inputMode='numeric' />
            <BotaoCustomizado onPress={calcular}>calcular</BotaoCustomizado>  
            <Text>{res} Km/L</Text>
        </View>
    )
}

export default TelaVeiculo