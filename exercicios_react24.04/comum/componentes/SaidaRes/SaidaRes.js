import { StyleSheet, Text, View } from "react-native"

const SaidaRes = () => {

    const estilos = StyleSheet.create({
        texto: {
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'right',
        },
    })
    
    return (
        <View>
            <Text style={estilos.texto}>Resultado:</Text>
        </View>
    )
}

export default SaidaRes