import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Fontisto from '@expo/vector-icons/Fontisto'
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import SaidaRes from "../../comum/componentes/SaidaRes/SaidaRes"

const TelaVeiculo = () => {

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
        botao: {
            backgroundColor: 'red',
            alignItems: 'center',
            borderRadius: 40,
            width: 240,
            margin: 15
        },
        saida: {
            fontSize: 20,
            margin: 10,
        }
    })

    let [distancia, setDistancia] = React.useState()
    let [qntCombustivel, setQntCombustivel] = React.useState()
    let [res, setRes] = React.useState()

    const calcular = () => {
        res = distancia / qntCombustivel
        setRes(res.toFixed(2))
        console.log(res)
    }

    return (
        <View style={estilos.tudo}>
            <Fontisto name="car" size={64} color='red' />
            <CampoTextoCustomizado style={estilos.input} label='Distância (Km)' value={distancia} onChangeText={setDistancia} inputMode='numeric' />
            <CampoTextoCustomizado style={estilos.input} label='Quantidade de combustivel (L)' value={qntCombustivel} onChangeText={setQntCombustivel} inputMode='numeric' />
            <BotaoCustomizado style={estilos.botao} onPress={calcular}>calcular</BotaoCustomizado>
            <SaidaRes />
            <Text style={estilos.saida}>{res} Km/L</Text>
        </View>
    )
}

export default TelaVeiculo