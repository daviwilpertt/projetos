import { StyleSheet, Text, TextInput, View } from "react-native"
import React from "react"

const CampoTextoCustomizado = (props) => {

    const estilos = StyleSheet.create({
        input: {
            border: '1px solid black',
        }
    })
    const [campoNome, setCampoNome] = React.useState('')

    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput style={estilos.input} onChangeText={setCampoNome} value={campoNome} {...props} />
        </View>
    )
}

export default CampoTextoCustomizado