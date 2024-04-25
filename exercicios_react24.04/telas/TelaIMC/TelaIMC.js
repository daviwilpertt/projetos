import { Text, View } from "react-native"
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import React from "react"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"

const TelaIMC = () => {

    let [peso, setPeso] = React.useState(0)
    let [altura, setAltura] = React.useState(0)
    let [imc, setImc] = React.useState(0)
    let [status, setStatus] = React.useState('')

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

    return (<View>
        <CampoTextoCustomizado label='peso (Kg)' value={peso} onChangeText={setPeso} />
        <CampoTextoCustomizado label='altura (cm)' value={altura} onChangeText={setAltura} />
        <BotaoCustomizado onPress={calcular}>calcular IMC</BotaoCustomizado>
        <Text>resultado: {imc} - {status}</Text>
    </View>)
}

export default TelaIMC