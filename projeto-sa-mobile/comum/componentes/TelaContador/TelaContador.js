import { StyleSheet, Text, View } from "react-native"

const estilos = StyleSheet.create({
    tudoTelaContador: {
        flex: 1,
        alingItens: 'center',

    },
})

const TelaContador = () => {
    return (
        <View style={estilos.tudoTelaContador}>
            <Text></Text>
        </View>
    )
}

export default TelaContador