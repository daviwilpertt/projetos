import { Text, View } from "react-native"

const TelaLista = () => {

    const ItemTarefa = (props) => {
        console.log(props)
        return (
            <View>
                <Text>{props.item.title}</Text>
            </View>
        )
    }
    
    return (
        <View>
            
        </View>
    )
}

export default TelaLista