import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import SaidaRes from "../../comum/componentes/SaidaRes/SaidaRes"

const TelaNota = () => {

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
            backgroundColor: 'yellow',
            alignItems: 'center',
            borderRadius: 40,
            width: 240,
            margin: 15
        },
        texto: {
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'right',
        },
    })

    let [av1, setAv1] = React.useState(0)
    let [av2, setAv2] = React.useState(0)
    let [sa, setSa] = React.useState(0)
    let [media, setMediamedia] = React.useState(0)
    let [res, setRes] = React.useState('')

    const calcular = () => {
        media = (Number(av1) + Number(av2) + Number((sa * 2))) / 4
        setMediamedia(media.toFixed(2))

        if (media < 7) {
            res = 'reprovado'
            setRes(res)
        }
        else {
            res = 'aprovado'
            setRes(res)
        }
    }

    return (
        <View style={estilos.tudo}>
            <Ionicons name="document" size={64} color='yellow' />
            <CampoTextoCustomizado style={estilos.input} label='nota 1' value={av1} onChangeText={setAv1} inputMode='numeric' />
            <CampoTextoCustomizado style={estilos.input} label='nota 2' value={av2} onChangeText={setAv2} inputMode='numeric'/>
            <CampoTextoCustomizado style={estilos.input} label='nota sa' value={sa} onChangeText={setSa} inputMode='numeric' />
            <BotaoCustomizado style={estilos.botao} onPress={calcular}>calcular</BotaoCustomizado>
            <SaidaRes />
            <Text style={estilos.texto}>{media}</Text>
            <Text style={estilos.texto}>Situação: </Text>
            <Text style={estilos.texto}>{res}</Text>
        </View>
    )
}

export default TelaNota

