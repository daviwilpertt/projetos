import { useState } from "react"
import { Pressable, View, Text } from "react-native"
import './BotaoContador.css'

const BotaoContador = () => {
    const [numero, setNumero] = useState(0)

    const incrementar = () => {
        setNumero(numero + 1)
    }

    return <View>
        <Pressable id='botaoContador' onPress={incrementar}>
            <Text>contador é: {numero}</Text>
        </Pressable>
    </View>
}

export default BotaoContador