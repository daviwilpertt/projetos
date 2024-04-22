import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './comum/componentes/Contador/Contador';
import BotaoContador from './comum/componentes/BotaoContador/BotaoContador';
import MostrarTela from './comum/componentes/MostrarTela/MostrarTela';
import Somar from './comum/componentes/Somar/Somar';
import Diminuir from './comum/componentes/Diminuir/Diminuir';
import Multiplicar from './comum/componentes/Multiplicar/Multiplicar';
import Dividir from './comum/componentes/Dividir/Dividir';
import CambioDolar from './comum/componentes/CambioDolar/CambioDolar';
import CambioEuro from './comum/componentes/CambioEuro/CambioEuro';
import CalculoIMC from './comum/componentes/CalculoIMC/CalculoImc';
import AddNome from './comum/componentes/AddNome/AddNome';
import RemoverNome from './comum/componentes/RemoverNome/RemoverNome';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Contador />
      <BotaoContador />
      <MostrarTela />
      <Somar /> 
      <Diminuir />
      <Multiplicar />
      <Dividir />
      <CambioDolar />
      <CambioEuro />
      <CalculoIMC />
      <AddNome />
      <RemoverNome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: '10px',
  },
});
