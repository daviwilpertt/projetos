import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TELAS from './comum/constantes/telas';
import TelaVeiculo from './telas/TelaVeiculo/TelaVeiculo';
import TelaPrincipal from './telas/TelaPrincipal/TelaPrincipal';
import TelaMoeda from './telas/TelaMoeda/TelaMoeda';
import TelaMedida from './telas/TelaMedida/TelaMedida';
import TelaNota from './telas/TelaNota/TelaNota';
import TelaIMC from './telas/TelaIMC/TelaIMC';
import TelaSalario from './telas/TelaSalario/TelaSalario';
import TelaCalculadora from './telas/TelaCalculadora/TelaCalculadora';
import TelaLogin from './telas/TelaLogin';
import TelaCadastro, { buscarStorage } from './telas/TelaCadastro';
import { useEffect } from 'react';

export default function App() {

  const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      textAlign: 'center'
    },

  });

  useEffect(() => {
    buscarStorage();
}, []);

  const Stack = createStackNavigator()

  return (
    <View style={estilos.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Group screenOptions={{ headerShown: 'false' }}>
            <Stack.Screen name={TELAS.TELA_PRINCIPAL} component={TelaPrincipal} />
          </Stack.Group>
          <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} />
          <Stack.Screen name={TELAS.TELA_CADASTRO} component={TelaCadastro} />
          <Stack.Screen name={TELAS.TELA_VEICULO} component={TelaVeiculo} />
          <Stack.Screen name={TELAS.TELA_MOEDA} component={TelaMoeda} />
          <Stack.Screen name={TELAS.TELA_MEDIDA} component={TelaMedida} />
          <Stack.Screen name={TELAS.TELA_NOTA} component={TelaNota} />
          <Stack.Screen name={TELAS.TELA_IMC} component={TelaIMC} />
          <Stack.Screen name={TELAS.TELA_SALARIO} component={TelaSalario} />
          <Stack.Screen name={TELAS.TELA_CALCULADORA} component={TelaCalculadora} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

