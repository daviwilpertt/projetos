import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TELAS from '../../comum/constantes/telas';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';

const TelaPrincipal = (props) => {
  console.log(props);

  const estilos = StyleSheet.create({
    tudo: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    telaVeiculo: {
      backgroundColor: 'red',
      color: 'white',
      borderRadius: 50,
      alignItems: 'center'
    },
    telaMoeda: {
      backgroundColor: 'blue',
      textAlign: 'left',
      borderRadius: 10,
    },
    telaMedida: {
      backgroundColor: 'green',
      borderTopStartRadius: 50,
      borderBottomEndRadius: 50,
      alignItems: 'center',
    },
    telaNota: {
      backgroundColor: 'yellow',
      borderRadius: 10,
      border: '3px dashed black',
      alignItems: 'flex-end'
    },
    telaSalario: {
      backgroundColor: 'orange',
      borderTopStartRadius: 100,
      borderBottomEndRadius: 100,
    },
    telaCalculadora: {
      backgroundColor: 'purple',
      alignItems: 'center',
      border: '4px solid black',
      borderRadius: 100,
    },
    telaIMC: {
      backgroundColor: 'gray',
      borderTopStartRadius: 100,
      borderBottomEndRadius: 100,
      alignItems: 'center'
    },
    texto: {
      color: 'black',
    },
    rolada: {
      flexGrow: 1,
      
    },
  })

  return (
    <ScrollView style={estilos.rolada}>

      <View style={estilos.tudo}>

        <Text>Bem VIndo</Text>

        <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_LOGIN)}>
          <Text style={estilos.texto}>Tela de Login</Text>
        </BotaoCustomizado>

        <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO)}>
          <Text style={estilos.texto}>Tela de Cadastro</Text>
        </BotaoCustomizado>

        <BotaoCustomizado style={estilos.telaVeiculo} onPress={() => props.navigation.navigate(TELAS.TELA_VEICULO)}>
          <Text style={estilos.texto}>Media Consumo de Combustível</Text>
        </BotaoCustomizado>

        <BotaoCustomizado style={estilos.telaMoeda} onPress={() => props.navigation.navigate(TELAS.TELA_MOEDA)}>
          <Text style={estilos.texto}>conversor de moeda</Text>
        </BotaoCustomizado>

        <BotaoCustomizado style={estilos.telaMedida} onPress={() => props.navigation.navigate(TELAS.TELA_MEDIDA)}>
          <Text style={estilos.texto}>conversor de medidas</Text>
        </BotaoCustomizado>

        <BotaoCustomizado style={estilos.telaNota} onPress={() => props.navigation.navigate(TELAS.TELA_NOTA)}>
          <Text>calculadora de notas</Text>
        </BotaoCustomizado>

        <BotaoCustomizado style={estilos.telaCalculadora} onPress={() => props.navigation.navigate(TELAS.TELA_CALCULADORA)}>
          <Text style={estilos.texto}>calculadora</Text>
        </BotaoCustomizado>

        <BotaoCustomizado style={estilos.telaSalario} onPress={() => props.navigation.navigate(TELAS.TELA_SALARIO)}>
          <Text style={estilos.texto}>calcular reajuste salarial</Text>
        </BotaoCustomizado>

        <BotaoCustomizado style={estilos.telaIMC} onPress={() => props.navigation.navigate(TELAS.TELA_IMC)}>
          <Text style={estilos.texto}>calculadora de IMC</Text>
        </BotaoCustomizado>

        <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_LOGIN)}>
          <Text style={estilos.texto}>Tela de Login</Text>
        </BotaoCustomizado>

        <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO)}>
          <Text>tela de cadastro</Text>
        </BotaoCustomizado>
      </View>
    </ScrollView>
  );
};

export default TelaPrincipal;
