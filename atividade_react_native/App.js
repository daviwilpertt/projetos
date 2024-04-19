import { StyleSheet, Text, View } from 'react-native';
import Contador from './comum/componentes/Contador/Contador';
import './App.css'
import BotaoContador from './comum/componentes/BotaoContador/BotaoContador';

export default function App() {
  return (
    <View id='container'>
      <Contador />
      <BotaoContador/>
    </View>
  );
}

