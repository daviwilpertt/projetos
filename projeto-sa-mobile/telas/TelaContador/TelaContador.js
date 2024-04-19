import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BotaoCustom from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import CORES from '../../comum/constantes/cores';

const estilos = StyleSheet.create({
  tudoTelaContador: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  contador: {
    fontSize: 72,
    color: CORES.TEXTO_PADRAO,
  },
});

const TelaContador = () => {
  const [contador, setContador] = React.useState(0);

  return (
    <View style={estilos.tudoTelaContador}>
      <BotaoCustom cor='secundaria' onPress={() => setContador(contador - 1)}>
        -
      </BotaoCustom>

      <Text style={estilos.contador}>{contador}</Text>

      <BotaoCustom cor='primaria' onPress={() => setContador(contador + 1)}>
        +
      </BotaoCustom>
    </View>
  );
};

export default TelaContador;