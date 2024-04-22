import React from "react"
import { StyleSheet, Pressable, View, Text } from "react-native"

const estilos = StyleSheet.create({
    tudo: {
        flexDirection: 'row',
    },

    textoTela: {
        fontSize: 20,
    },
    botao: {
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    texto: {
        fontSize: 20,
    }
})

const MostrarTela = () => {
    const [conteudo, setConteudo] = React.useState('selecione a tela ')


    const pagina = (texto) => {
        setConteudo(texto)
    }

    return (
        <View style={estilos.tudo}>
            <Pressable style={estilos.botao} onPress={() => pagina('conteudo tela 01')}>
                <Text style={estilos.texto}>tela1</Text>
            </Pressable>
            <Pressable style={estilos.botao} onPress={() => pagina('conteudo tela 02')}>
                <Text style={estilos.texto}>tela2</Text>
            </Pressable>
            <Pressable style={estilos.botao} onPress={() => pagina('conteudo tela 03')}>
                <Text style={estilos.texto}>tela3</Text>
            </Pressable>
            <Text style={estilos.textoTela} >{conteudo}</Text>
        </View>
    )
}

export default MostrarTela