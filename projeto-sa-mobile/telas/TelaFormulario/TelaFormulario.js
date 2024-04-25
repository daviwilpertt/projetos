import React from "react"
import { StyleSheet, View } from "react-native"
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const TelaFormulario = () => {
    const estilos = StyleSheet.create({
        tudo: {
            flex: 1,
            padding: 10,
        },
    })

    let [campoNome, setCampoNome] = React.useState('')
    let [campoSobrenome, setCampoSobrenome] = React.useState('')
    let [campoCPF, setCampoCPF] = React.useState('')

    const salvar = () => {
        console.log('salvou: ', { campoNome, campoSobrenome, campoCPF })
        setCampoNome(campoNome)
        setCampoSobrenome(campoSobrenome)
        setCampoCPF(campoCPF)
    }

    return (
        <View style={estilos.tudo}>
            <MaterialCommunityIcons name='cannabis' size={64} color='green' />
            <CampoTextoCustomizado label='nome' value={campoNome} onChangeText={setCampoNome} />
            <CampoTextoCustomizado label='sobrenome' value={campoSobrenome} onChangeText={setCampoSobrenome} />
            <CampoTextoCustomizado label='CPF' inputMode='numeric' value={campoCPF} onChangeText={setCampoCPF} />
            <BotaoCustomizado onPress={salvar}>salvar</BotaoCustomizado>
        </View>
    )
}

export default TelaFormulario