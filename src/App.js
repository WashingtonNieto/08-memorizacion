import logo from './logo.svg';
import './App.css';
import { Gestion } from './components/Gestion';
import { Tareas } from './components/Tareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* ejercicio con metodo memo para componentes */}
        {/* <Gestion></Gestion> */}

        {/* Ejercicio con Hook useMemo
        Recordemos que un Hook es simplemente una funcion
        que se ejecuta en un momento dado dentro del ciclo
        de vida de un componente o del comportamiento habitual
        de un componente */}
        <Tareas />

        


      </header>
    </div>
  );
}

export default App;
