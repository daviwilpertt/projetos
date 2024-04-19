import AddNome from "./componentes/AddNome/AddNome";
import BotaoContador from "./componentes/BotaoContador/BotaoContador";
import CalculoIMC from "./componentes/CalculoIMC/IMC";
import Dolar from "./componentes/CambioDolar/Dolar";
import Euro from "./componentes/CambioEuro/Euro";
import Contador from "./componentes/Contador/Contador";
import Diminuir from "./componentes/Diminuir/Diminuir";
import Dividir from "./componentes/Dividir/Dividir";
import MostrarTela from "./componentes/MostrarTela/MostrarTela";
import Multiplicar from "./componentes/Multiplicar/Multiplicar";
import RemoverNome from "./componentes/RemoverNome/RemoverNome";
import Somar from "./componentes/Somar/Somar";

function App() {
  return (
    <>
      <span>
        <p>Exercício 1</p>
        <BotaoContador />
        <hr />
      </span>

      <span>
        <p>Exercício 2</p>
        <Contador />
        <hr />
      </span>

      <span>
        <p>Exercício 3</p>
        <MostrarTela />
        <hr />
      </span>

      <span>
        <p>Exercício 4</p>
        <Somar />
        <hr />
      </span>

      <span>
        <p>Exercício 5</p>
        <Diminuir />
        <hr />
      </span>

      <span>
        <p>Exercício 6</p>
        <Multiplicar />
        <hr />
      </span>

      <span>
        <p>Exercício 7</p>
        <Dividir />
        <hr />
      </span>

      <span>
        <p>Exercício 8</p>
        <Dolar />
        <hr />
      </span>

      <span>
        <p>Exercício 9</p>
        <Euro />
        <hr />
      </span>

      <span>
        <p>Exercício 10</p>
        <CalculoIMC />
        <hr />
      </span>

      <span>
        <p>Exercício 11</p>
        <AddNome />
        <hr />
      </span>

      <span>
        <p>Exercício 12</p>
        <RemoverNome />
        <hr />
      </span>
    </>
  );
}

export default App;
