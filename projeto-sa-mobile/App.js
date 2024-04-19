import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import CORES from './comum/constantes/cores.js'
import BotaoCustom from './comum/componentes/BotaoCustom/BotaoCustom.js';
import TelaContador from './comum/componentes/TelaContador/TelaContador.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TELAS from './comum/constantes/telas.js';
import TelaPrincipal from './telas/TelaPrincipal/TelaPrincipal.js';


export default function App() {
  const [contador, setContador] = useState(0)

  const Stack = createStackNavigator()

  return (
    <View style={estilos.tudo}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={TELAS.TELA_PRINCIPAL} component={TelaPrincipal} />
          <Stack.Screen name={TELAS.TELA_CONTADOR} component={TelaContador} />
        </Stack.Navigator>
      </NavigationContainer>
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
