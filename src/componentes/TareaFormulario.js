import React from 'react';
import '../hojas-de-estilo/TareaFormulario.css';

function TareaFormulario(props) {
  return (
    <form action='' className='tarea-formulario'>
      <input 
        type='text' 
        className='tarea-input'
        placeholder='Escribe una tarea'
        name='texto'
      />
      <button className='tarea-boton'>
        Agregar tarea
      </button>
    </form>
  );
}

export default TareaFormulario;