import React from "react"
import { StyleSheet, View } from "react-native"
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import Entypo from '@expo/vector-icons/Entypo'

const TelaMedida = () => {

    const estilos = StyleSheet.create({
        tudo: {
            flex: 1,
            alignItems: 'center'

        },
        input: {
            padding: 10,
            width: 300,
            border: '2px solid black',
            margin: 15,
            fontSize: 20,
        },
        icone: {
            color: 'green',
            margin: 10,
        },
        botao: {
            backgroundColor: 'red',
            alignItems: 'center',
            borderRadius: 40,
            width: 240,
            margin: 15
        },
    })

    let [cm, setCm] = React.useState(0)
    let [m, setM] = React.useState(0)
    let [km, setKm] = React.useState(0)

    const conversorCm = (value) => {
        setCm(value)
        let medidaM = (value) / 100
        let medidaKm = (value) / 10000
        setM(medidaM.toFixed(2))
        setKm(medidaKm.toFixed(2))
    }

    const conversorM = (value) => {
        setM(value)
        let medidaCm = (value) * 100
        let medidaKm = (value) / 1000
        setCm(medidaCm)
        setKm(medidaKm)
    }

    const conversorKm = (value) => {
        setKm(value)
        let medidaM = (value) * 1000
        let medidaCm = (value) * 10000
        setM(medidaM)
        setCm(medidaCm)
    }
    return (
        <View style={estilos.tudo}>
            <Entypo name='ruler' size={64} style={estilos.icone} />
            <CampoTextoCustomizado style={estilos.input} label='centimetros' value={cm} onChangeText={conversorCm} />
            <CampoTextoCustomizado style={estilos.input} label='metros' value={m} onChangeText={conversorM} />
            <CampoTextoCustomizado style={estilos.input} label='kilometros' value={km} onChangeText={conversorKm} />
        </View>
    )
}
export default TelaMedida