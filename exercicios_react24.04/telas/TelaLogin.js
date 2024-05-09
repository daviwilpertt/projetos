import { StyleSheet, View } from "react-native"
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import React from "react"
import TELAS from "../comum/constantes/telas"

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
        backgroundColor: 'orange',
        alignItems: 'center',
        borderRadius: 40,
        width: 240,
        margin: 15
    },
    saida: {
        fontSize: 20,
        margin: 10,
    },
    texto: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'right',
    },
})
const TelaLogin = (props) => {


    let [usuario, setUsuario] = React.useState('')
    let [senha, setSenha] = React.useState('')

    const entrar = () => {
        if (usuario.trim() && senha.trim()) {
            if (usuario === 'adm' && senha === '123') {
                props.navigation.navigate(TELAS.TELA_PRINCIPAL)
            }
            else {
                alert('Usuário ou senha incorretos')
            }
        }
        else {
            alert('Preencha os dados corretamente')
        }
    }

    return (
        <View style={estilos.tudo}>
            <CampoTextoCustomizado style={estilos.input} label='usuario' value={usuario} onChangeText={setUsuario} />
            <CampoTextoCustomizado style={estilos.input} label='senha' value={senha} onChangeText={setSenha} />
            <BotaoCustomizado style={estilos.botao} onPress={entrar} >entrar</BotaoCustomizado>
        </View>
    )
}

export default TelaLogin