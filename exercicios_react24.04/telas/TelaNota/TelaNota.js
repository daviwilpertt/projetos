import React from "react"
import { View, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"

const TelaNota = () => {
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
        <View>
            <Ionicons name="document" size={64} color='orange' />
            <CampoTextoCustomizado label='nota 1' value={av1} onChangeText={setAv1} inputMode='numeric' />
            <CampoTextoCustomizado label='nota 2' value={av2} onChangeText={setAv2} inputMode='numeric'/>
            <CampoTextoCustomizado label='nota sa' value={sa} onChangeText={setSa} inputMode='numeric' />
            <BotaoCustomizado onPress={calcular}>calcular</BotaoCustomizado>
            <Text>Resultado: </Text>
            <Text>{media}</Text>
            <Text>Situação: </Text>
            <Text>{res}</Text>
        </View>
    )
}

export default TelaNota

