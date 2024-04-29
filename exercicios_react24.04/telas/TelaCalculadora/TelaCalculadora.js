import React from "react";
import { View, Text, StyleSheet } from "react-native"
import RNPickerSelect from 'react-native-picker-select';
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import SaidaRes from "../../comum/componentes/SaidaRes/SaidaRes";

const TelaCalculadora = () => {

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
            backgroundColor: 'purple',
            alignItems: 'center',
            borderRadius: 40,
            width: 240,
            margin: 15
        },
        saida: {
            fontSize: 20,
            margin: 10,
        },
        select: {
            backgroundColor: 'green',
        },
    })

    const pickerSelectStyles = StyleSheet.create({
        inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            color: 'black',
            paddingRight: 30,
        },
        inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30,
        },
    })

    let [campoOperacao, setCampoOperacao] = React.useState('');
    let [numero1, setNum1] = React.useState(0)
    let [numero2, setNum2] = React.useState(0)
    let [res, setRes] = React.useState(0)

    const calcular = () => {

        let num1 = Number(numero1)
        let num2 = Number(numero2)

        let res = 0

        if (campoOperacao === '+') {
            res = num1 + num2
            setRes(res)
        }
        else if (campoOperacao === '-') {
            res = num1 - num2
            setRes(res)
        }
        else if (campoOperacao === '*') {
            res = num1 * num2
            setRes(res)
        }
        else if (campoOperacao === '/') {
            res = num1 / num2
            setRes(res)
        }
    }

    return (
        <View style={estilos.tudo}>
            <CampoTextoCustomizado style={estilos.input} label='numero 1' value={numero1} onChangeText={setNum1} />
            <RNPickerSelect style={pickerSelectStyles}
                onValueChange={setCampoOperacao}
                value={campoOperacao}
                items={[
                    { label: 'adição', value: '+' },
                    { label: 'subtração', value: '-' },
                    { label: 'multiplicação', value: '*' },
                    { label: 'divisão', value: '/' },
                ]}
                placeholder={{ label: 'selecione uma operação', value: null }}
            />
            <CampoTextoCustomizado style={estilos.input} label='numero 2' value={numero2} onChangeText={setNum2} />
            <BotaoCustomizado style={estilos.botao} label='calcular' onPress={calcular}>
                <Text>calcular</Text>
            </BotaoCustomizado>
            <SaidaRes />
            <Text>{res}</Text>

        </View>
    )
}

export default TelaCalculadora