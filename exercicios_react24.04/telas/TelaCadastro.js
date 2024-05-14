import { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado";

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
    };

    const buscarStorage = async () => {
        const response = await AsyncStorage.getItem('app1');
        if (response) {
            setUsuarios(JSON.parse(response));
        }
    };

    return (
        <View>
            <CampoTextoCustomizado label='nome' value={nome} onChangeText={setNome} />
            <CampoTextoCustomizado label='email' value={email} onChangeText={setEmail} />
            <CampoTextoCustomizado label='senha' value={senha} onChangeText={setSenha} />
            <CampoTextoCustomizado label='data de nascimento' value={dtNasc} onChangeText={setDtNasc} />
            <CampoTextoCustomizado label='cpf' value={cpf} onChangeText={setCpf} />
            <CampoTextoCustomizado label='telefone' value={telefone} onChangeText={setTelefone} />
            <BotaoCustomizado onPress={salvarStorage}>enviar</BotaoCustomizado>
        </View>
    );
};

export default TelaCadastro;