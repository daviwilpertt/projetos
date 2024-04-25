import { Text, View } from 'react-native';
import TELAS from '../../comum/constantes/telas';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';

const TelaPrincipal = (props) => {
  console.log(props);

  return (
    <View>
      <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_VEICULO)}>
        <Text>Media Consumo Veicular</Text>
      </BotaoCustomizado>

      <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_MOEDA)}>
        <Text>conversor de moeda</Text>
      </BotaoCustomizado>

      <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_MEDIDA)}>
        <Text>conversor de medidas</Text>
      </BotaoCustomizado>

      <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_NOTA)}>
        <Text>calculadora de notas</Text>
      </BotaoCustomizado>

      <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_IMC)}>
        <Text>calculadora de IMC</Text>
      </BotaoCustomizado>

    </View>
  );
};

export default TelaPrincipal;
