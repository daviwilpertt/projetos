import { Switch, View, Text, StyleSheet } from "react-native"
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import React from "react"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import FontAwesome from '@expo/vector-icons/FontAwesome'

const TelaSalario = () => {

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
        <View style={estilos.tudo}>
            <FontAwesome name='money' color='orange' size={64} style={estilos.icone} />
            <CampoTextoCustomizado style={estilos.input} label='salario' value={salario} onChangeText={setSalario} />
            <Text>cargo de confiança</Text>
            <Switch
                trackColor={{ false: 'gray', true: 'orange' }}
                thumbColor={'black'}
                ios_backgroundColor={'black'}
                onValueChange={setCargoConfianca}
                value={cargoConfianca}
            />

            <BotaoCustomizado style={estilos.botao} onPress={calcular}>
                <Text>calcular</Text>
            </BotaoCustomizado>
            <Text style={estilos.texto}>R${novoSalario}</Text>
        </View>
    )
}

export default TelaSalario