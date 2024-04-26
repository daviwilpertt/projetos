import React from "react";
import { View, Text } from "react-native"
import RNPickerSelect from 'react-native-picker-select';
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

const TelaCalculadora = () => {

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
        <View>
            <CampoTextoCustomizado label='numero 1' value={numero1} onChangeText={setNum1} />
            <RNPickerSelect
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
            <CampoTextoCustomizado label='numero 2' value={numero2} onChangeText={setNum2} />
            <BotaoCustomizado label='calcular' onPress={calcular}>
                <Text>calcular</Text>
            </BotaoCustomizado>
            <Text>{res}</Text>

        </View>
    )
}

export default TelaCalculadora