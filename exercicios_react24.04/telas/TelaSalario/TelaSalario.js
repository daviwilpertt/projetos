import { Switch, View, Text } from "react-native"
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import React from "react"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"

const TelaSalario = () => {

    let [salario, setSalario] = React.useState(0)
    let [cargoConfianca, setCargoConfianca] = React.useState(false)
    let [novoSalario, setNovoSalario] = React.useState(0)
    let reajuste = Number(0);

    let valorSalario = parseFloat(salario)

    const calcular = () => {

        if (valorSalario <= 2000) {
            reajuste = 0.08
            
        }
        else if (valorSalario <= 3000) {
            reajuste = 0.07
        }
        else if (valorSalario <= 4000) {
            reajuste = 0.06
        }
        else {
            reajuste = 0.05
        }

        if (cargoConfianca) {
            reajuste += 0.05
        }

        novoSalario = valorSalario + (valorSalario * reajuste)
        setNovoSalario(novoSalario.toFixed(2))
        
    }
    return (
        <View>
            <CampoTextoCustomizado label='salario' value={salario} onChangeText={setSalario} />
            <Text>cargo de confiança</Text>
            <Switch
                trackColor={{ false: 'gray', true: 'blue' }}
                thumbColor={'black'}
                ios_backgroundColor={'black'}
                onValueChange={setCargoConfianca}
                value={cargoConfianca}
            />

            <BotaoCustomizado onPress={calcular}>
                <Text>calcular</Text>
            </BotaoCustomizado>
            <Text>{novoSalario}</Text>
        </View>
    )
}

export default TelaSalario