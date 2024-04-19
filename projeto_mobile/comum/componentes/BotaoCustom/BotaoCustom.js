import { StyleSheet, View, Text, Pressable } from 'react-native'
import CORES from '../../constantes/cores'

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: CORES.SECUNDARIA,
    },
})

const BotaoCustom = (props) => {

    return <View>
        <Pressable style={estilos.CORES} id='botao' onPress={props.onPress}>
            <Text>
                {props.children}
            </Text>
        </Pressable>
    </View>
}

export default BotaoCustom