import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import CORES from './comum/constantes/cores.js'
import BotaoCustom from './comum/componentes/BotaoCustom/BotaoCustom.js';
import TelaContador from './comum/componentes/TelaContador/TelaContador.js';


export default function App() {
  const [contador, setContador] = useState(0)

  let Somar = () => {
    setContador(contador + 1)
  }

  let Subtrair = () => {
    setContador(contador - 1)
  }

  return (
    <View style={estilos.tudo}>
      <StatusBar style="auto" />
      <TelaContador />
    </View>
  );
}

const estilos = StyleSheet.create({
  tudo: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: CORES.PRIMARIA,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
