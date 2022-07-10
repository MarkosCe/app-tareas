import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="app-tareas">
      <div className="titulo-logo">
        <p className='titulo'>App Tareas</p>
      </div>
      <div className="tareas-lista-principal">
        <h1>Lista</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
