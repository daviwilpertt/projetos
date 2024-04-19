import './App.css';
import AnoAtual from './componentes/AnoAtual/AnoAtual';
import Calculadora from './componentes/Calculadora/Calculadora';
import DataCompletaAtual from './componentes/DataCompletaAtual/DataCompletaAtual';
import DiaAtual from './componentes/DiaAtual/DiaAtual';
import Divisao from './componentes/Divisao/Divisao';
import HoraAtual from './componentes/HoraAtual/HoraAtual';
import ListaProdutos from './componentes/ListaProdutos/ListaProdutos';
import MesAtual from './componentes/MesAtual/MesAtual';
import MinutoAtual from './componentes/MinutoAtual/MinutoAtual';
import Multiplicacao from './componentes/Multiplicacao/Multiplicacao';
import NomesOrdenados from './componentes/NomesOrdenados/NomesOrdenados';
import NumerosImpares from './componentes/NumerosImpares/NumerosImpares';
import NumerosPares from './componentes/NumerosPares/NumerosPares';
import OlaMundo from './componentes/OlaMundo/OlaMundo';
import OlaPessoa from './componentes/OlaPessoa/OlaPessoa';
import Soma from './componentes/Soma/Soma';
import Subtracao from './componentes/Subtracao/Subtracao';
import TamanhoTexto from './componentes/TamanhoTexto/TamanhoTexto';
import VerificarIdade from './componentes/VerificarIdade/VerificarIdade';


let lista_nomes = ['Maria', 'João', 'Ana', 'Pedro', 'Carla']
let lista_numeros = [56, 23, 89, 42, 10, 77, 34, 91, 15, 68]
function App() {
  return (
    <>
      <span>
        1. Crie um componente chamado 'OlaMundo' que mostra uma mensagem: "Olá,
        Mundo!!" em uma div com o fundo vermelho, texto centralizado na cor
        azul.
      </span>

      <OlaMundo />
      <hr />

      <span>
        2. Crie um componente chamado 'DiaAtual' que mostra o texto: "15" em uma
        div redonda com o fundo azul, texto centralizado na cor branco.
      </span>

      <DiaAtual />
      <hr />

      <span>
        3. Crie um componente chamado 'MesAtual' que mostra o texto:
        "03" em uma div com o fundo verde, texto justificado à esquerda na cor branco.
      </span>
      <MesAtual />
      <hr />

      <span>
        4. Crie um componente chamado 'AnoAtual' que mostra o texto:
        "2024" em uma div com o fundo vermelho, justificado à direita na cor amarelo.
      </span>
      <AnoAtual />
      <hr />

      <span>
        5. Crie um componente chamado 'HoraAtual' que mostra o texto:
        "20" em uma div redonda 50x50 px centralizada com o fundo azul, texto na cor
        amarelo.
      </span>
      <HoraAtual />
      <hr />

      <span>
        6. Crie um componente chamado 'MinutoAtual' que mostra o texto:
        "30" em uma div redonda 50x50 px centralizada com o fundo rosa, texto na cor
        preta.
      </span>
      <MinutoAtual />
      <hr />

      <span>
        7. Crie um componente chamado 'DataCompletaAtual' que mostra o texto:
        "15/03/2024 20:30" em uma div com o fundo marrom, texto centralizado na cor
        branca.
      </span>
      <DataCompletaAtual />
      <hr />

      <span>
        8.  Crie um componente chamado 'OlaPessoa' que aceita uma prop chamada 'nome'
        e mostra o texto:
        "Olá, nome!" em uma div com o fundo laranja, texto centralizado na cor branca.
      </span>
      <OlaPessoa nome='joni begudi' />
      <hr />

      <span>
        9. Crie um componente chamado 'ListaProdutos' que aceita uma prop chamada
        'produtos' e deve ser uma lista de nomes de produtos.
        O componente deve listar os itens em tela em uma ul com o fundo roxo e a letra
        amarela
      </span>
      <div>
        <ListaProdutos item='suco' />
        <ListaProdutos item='samambaia' />
        <ListaProdutos item='goiaba' />
        <ListaProdutos item='tomada 3 pinos' />
      </div>
      <hr />

      <span>
        10. .Crie um componente chamado 'VerificarIdade' que aceita uma prop chamada
        'idade' e mostra uma mensagem:
        "xx anos, é maior de idade" se a idade for maior ou igual a 18, em uma div
        com o fundo verde e letra amarela;
        "xx anos, é menor de idade" se for menor que 18, em uma div com o
        fundo vermelho e letra amarela.;
        Chame o componente duas vezes, uma para maior de idade e outra para menor de idade
      </span>
      <VerificarIdade idade='18' />
      <VerificarIdade idade='17' />
      <VerificarIdade idade='98' />
      <hr />

      <span>
        11.Crie um componente chamado 'NumerosPares' que aceita uma prop chamada
        'numeros' e deve ser uma lista de números inteiros.
        O componente deve mostrar uma lista com os números pares em uma ul com o
        fundo azul e a letra amarela.
      </span>
      <NumerosPares numeros={lista_numeros} />
      <hr />

      <span>
        12.Crie um componente chamado 'NumerosImpares' que aceita uma prop chamada
        'numeros' e deve ser uma lista de números inteiros.
        O componente deve mostrar uma lista com os números ímpares em uma ul
        com o fundo azul e a letra amarela.
      </span>
      <NumerosImpares numeros={lista_numeros} />
      <hr />

      <span>
        13.Crie um componente chamado 'Soma' que aceita as props 'num1', 'num2', o
        componente deve mostrar:
        O resultado da soma entre os dois números em uma div com o fundo marrom,
        texto centralizado na cor branca.
      </span>
      <Soma num1='2' num2='5' />
      <hr />

      <span>
        14.Crie um componente chamado 'Subtracao' que aceita as props 'num1', 'num2', o
        componente deve mostrar:
        O resultado da subtração entre os dois números em uma div com o fundo cinza,
        texto centralizado na cor branca.
      </span>
      <Subtracao num1='234' num2='765' />
      <hr />

      <span>
        15.Crie um componente chamado 'Divisao' que aceita as props 'num1', 'num2', o
        componente deve mostrar:
        O resultado da divisão entre os dois números em uma div com o fundo laranja,
        texto centralizado na cor azul.
      </span>
      <Divisao num1='13' num2='6' />
      <hr />

      <span>
        16.Crie um componente chamado 'Multiplicacao' que aceita as props 'num1', 'num2',
        o componente deve mostrar:
        O resultado da multiplicação entre os dois números em uma div com o fundo
        laranja, texto centralizado na cor azul.
      </span>
      <Multiplicacao num1='4' num2='8' />
      <hr />

      <span>
        17.Crie um componente chamado 'Calculadora' que aceita as props 'num1', 'num2' e
        'operacao'. A 'operacao' deve determinar que tipo de operação matemática que
        deve ser realizada (ex: soma, subtracao, multiplicacao, divisao). O componente
        deve mostrar:
        O resultado da operação entre os dois números em uma div com o fundo verde,
        texto centralizado na cor branca.
        Utilize do switch nesse componente.
      </span>
      <Calculadora num1='2' operacao='+' num2='7' />
      <Calculadora num1='5' operacao='-' num2='3' />
      <Calculadora num1='6' operacao='*' num2='30' />
      <Calculadora num1='654' operacao='/' num2='75' />
      <hr />

      <span>
        18.Crie um componente chamado 'TamanhoTexto' que aceita uma prop chamado
        'texto', o componente deve mostrar:
        O tamanho do texto informado em uma div com o fundo marrom, texto
        justificado à direita na cor amarela.
      </span>
      <TamanhoTexto texto='tangamandapio' />
      <TamanhoTexto texto='eh ux guri nau tem comoh' />
      <hr />

      <span>
        19.Crie um componente chamado 'NomesOrdenados' que aceita uma prop
        chamado 'nomes' e deve ser uma lista com pelo menos 5 nomes de pessoas
        aleatórias e não ordenada. O componente deve mostrar:
        Uma lista ordenada dos nomes em ordem alfabética em uma ol com o fundo
        rosa, texto na cor vermelha.
        Utilize a função sort para ordenar a lista.
      </span>
      <NomesOrdenados nome={lista_nomes.sort()} />
    </>
  );
}

export default App;
