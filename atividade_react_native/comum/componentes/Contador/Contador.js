import { useState } from "react"
import { Pressable, Text, View } from 'react-native';


const Contador = () => {
    let [numero, setNumero] = useState(0)

    let somar = () => {
        setNumero(numero + 1)
    }

    let diminuir = () => {
        setNumero(numero - 1)
    }

    return <View>
        <Pressable onPress={somar}>
            <Text>+</Text>
        </Pressable>
        {numero}
        <Pressable onPress={diminuir}>
            <Text>-</Text>
        </Pressable>
    </View>

}

export default Contador