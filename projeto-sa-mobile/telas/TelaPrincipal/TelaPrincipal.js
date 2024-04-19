import { Text, View } from 'react-native';
import BotaoCustom from '../../comum/componentes/BotaoCustom/BotaoCustom';
import TELAS from '../../comum/constantes/telas';

const TelaPrincipal = (props) => {
  console.log(props);

  return (
    <View>
      <BotaoCustom cor='primaria' onPress={() => props.navigation.navigate(TELAS.TELA_CONTADOR)}>
        Tela Contador
      </BotaoCustom>
    </View>
  );
};

export default TelaPrincipal;