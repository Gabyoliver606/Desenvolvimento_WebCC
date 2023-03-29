//import logo from './logo.svg';
//import './App.css';
//import calculadora from "./calculadora";
//import MyProps from './MyProps';
//import MeusDados from "./components/01MeusDados";
//import MeusDados from "./components/02MeusDados";
//import Temperatura from "./components/03Temperatura";
import Pai from "./atividade01/01Pai";
import * as PC from "./atividade01/02MeuPC";
import * as Batalha from "./atividade01/03Batalha";
import FuncaoA from "./components/06Contexto/FuncaoA";

/*function App() {
  return (
    <div className="App">
        <FuncaoA/>
    </div>
  )
}

export default App;*/

function App() {
  return (
    <div className="App">
        <Pai/>
        <hr/>
        <PC.PlacaMae nome = "Asus" preco = {1000} />
        <PC.Memoria nome = "Corsair" preco = {800} /> 
        <PC.PlacaDeVideo nome = "GTX 1660" preco = {2000} />
        <hr/>
        <Batalha.World>
            <Batalha.Arena nome = "Park dos Princess" />
            <Batalha.Hero nome = "Messi" vida = {100} />
            <Batalha.Enemy nome = "CR7" vida = {100} />
        </Batalha.World>
        <hr/>
        <FuncaoA/>
    </div>
  )
}

export default App;
