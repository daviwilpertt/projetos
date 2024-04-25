import { Pressable, Text, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  botao: {
    padding: 16,
    borderRadius: 8,
    margin: 5,
  },
})


const BotaoCustomizado = (props) => {
  const estilosBotao = [estilos.botao];

  return (
    <Pressable style={estilos.botao} onPress={props.onPress}>
      <Text >{props.children}</Text>
    </Pressable>
  );
};

export default BotaoCustomizado;
