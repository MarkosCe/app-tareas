import React from 'react';
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css'

function ListaDeTareas() {
  return(
    //<></> son llamados fragmentos
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        LiSTA DE TAREAS
      </div>
    </>
  );
}

export default ListaDeTareas;