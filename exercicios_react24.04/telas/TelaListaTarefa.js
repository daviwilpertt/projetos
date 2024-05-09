import React from "react"
import { FlatList, Text, View } from "react-native"
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado"

const TelaListaTarefa = () => {

    let [listaTarefas, setListaTarefas] = React.useState([])
    let [campoDescricao, setCampoDescricao] = React.useState('')

    const ItemTarefa = (props) => {
        console.log(props)
        return (
            <View>
                <Text>{props.item.descricao}</Text>
            </View>
        )
    }

    const SeparadorListagens = () => {
        return <View></View>
    };

    const ListagemVazia = () => {
        return (
            <View>
                <Text>Nenhum item para listar.</Text>
            </View>
        )
    }

    
    const adicinarTarefa = async => {
        if (campoDescricao !== '') {
            const novaLista = [...listaTarefas, { descricao: campoDescricao, id: +new Date() }]
            setListaTarefas(novaLista)
            setCampoDescricao('')
            console.log(novaLista)
        } else {
            alert('Campo descrição é obrigatório.');
        }
    }

    return (
        <View>
            <CampoTextoCustomizado label='Descrição da tarefa' value={campoDescricao} onChangeText={setCampoDescricao} />
            <BotaoCustomizado onPress={adicinarTarefa}>+</BotaoCustomizado>

            <FlatList
                data={listaTarefas}
                renderItem={ItemTarefa}
                ItemSeparatorComponent={SeparadorListagens}
                ListEmptyComponent={ListagemVazia}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default TelaListaTarefa