import { StyleSheet, Text, View } from "react-native"
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import React from "react"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TelaIMC = () => {

    const estilos = StyleSheet.create({
        tudo: {
            flex: 1,
            alignItems: 'center'

        },
        icone: {
            alignItems: 'center',
            margin: 10,
        },
        input: {
            padding: 10,
            width: 300,
            border: '2px solid black',
            margin: 15,
            fontSize: 20,
        },
        botao: {
            backgroundColor: 'gray',
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

    let [peso, setPeso] = React.useState(0)
    let [altura, setAltura] = React.useState(0)
    let [imc, setImc] = React.useState(0)
    let [status, setStatus] = React.useState('status')

    const calcular = () => {
        altura = altura / 100
        let calculo = peso / (altura * altura)
        setImc(calculo.toFixed(2))

        if (calculo > 40) {
            setStatus('obesidade morbida')
        }
        else if (calculo > 35 && calculo <= 40) {
            setStatus('obesidade grau 2')
        }
        else if (calculo > 30 && calculo <= 35) {
            setStatus('obesidade grau 1')
        }
        else if (calculo > 25 && calculo <= 30) {
            setStatus('sobrepeso')
        }
        else if (calculo > 18.5 && calculo <= 25) {
            setStatus('peso normal')
        }
        else if (calculo <= 18.5) {
            setStatus('abaixo do peso')
        }
        else {
            setStatus('erro')
        }
    }

    return (<View style={estilos.tudo}>
        <FontAwesome name="balance-scale" style={estilos.icone} size={64} color='gray' />
        <CampoTextoCustomizado style={estilos.input} label='peso (Kg)' value={peso} onChangeText={setPeso} />
        <CampoTextoCustomizado style={estilos.input} label='altura (cm)' value={altura} onChangeText={setAltura} />
        <BotaoCustomizado style={estilos.botao} onPress={calcular}>calcular IMC</BotaoCustomizado>
        <Text style={estilos.texto} >resultado: {imc} - {status}</Text>
    </View>)
}

export default TelaIMC