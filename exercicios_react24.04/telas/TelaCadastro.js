import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../comum/constantes/telas";

const estilos = StyleSheet.create({
    tudo: {
        flex: 1,
    },
    input: {
        padding: 10,
        width: 300,
        border: '2px solid black',
        margin: 15,
        fontSize: 20,
    },
})

const TelaCadastro = () => {

    
    const [usuarios, setUsuarios] = useState([]);
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [dtNasc, setDtNasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    useEffect(() => {
        buscarStorage();
    }, []);

    const salvarStorage = async () => {
        const novoUsuario = {
            nome,
            senha,
            email,
            dtNasc,
            cpf,
            telefone,
        };

        const usuariosAtualizados = [...usuarios, novoUsuario];
        await AsyncStorage.setItem('app1', JSON.stringify(usuariosAtualizados));
        setUsuarios(usuariosAtualizados);
        console.log(usuariosAtualizados);
        props.navigation.navigate(TELAS.TELA_LOGIN)
    };

    
    
    return (
        <ScrollView style={estilos.tudo}>
            <CampoTextoCustomizado style={estilos.input} label='nome' value={nome} onChangeText={setNome} />
            <CampoTextoCustomizado style={estilos.input} label='email' value={email} onChangeText={setEmail} />
            <CampoTextoCustomizado style={estilos.input} label='senha' value={senha} onChangeText={setSenha} />
            <CampoTextoCustomizado style={estilos.input} label='data de nascimento' value={dtNasc} onChangeText={setDtNasc} />
            <CampoTextoCustomizado style={estilos.input} label='cpf' value={cpf} onChangeText={setCpf} />
            <CampoTextoCustomizado style={estilos.input} label='telefone' value={telefone} onChangeText={setTelefone} />
            <BotaoCustomizado onPress={salvarStorage}>enviar</BotaoCustomizado>
        </ScrollView>
    );
};


export default TelaCadastro;

export async function buscarStorage(setUsuarios) {
    try {
      const response = await AsyncStorage.getItem('app1');
      if (response) {
        setUsuarios(JSON.parse(response));
      }
    } catch (error) {
      console.error('Erro ao buscar dados do AsyncStorage:', error);
    }
  }