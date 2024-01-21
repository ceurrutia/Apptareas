import logo from "./imagenes/logo.png";
import "./App.css";
import ListaDeTareas from "./componentes/ListaDeTareas";
import Fechadehoy from "./componentes/Fechadehoy";

function App() {
  return (
    <div className="app-tareas">
      <div className="logo-contenedor">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="tareas-lista-principal">
        
        <h1>Things to do today</h1>
        <Fechadehoy />
       

        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
