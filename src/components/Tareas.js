import React, { useState } from 'react'

export const Tareas = () => {

  const [tareas, setTareas]= useState([]);

  const guardarTareas  = e => {
    e.preventDefault();

    setTareas(tarea => [...tareas, e.target.descripcion.value]);
  }

  const borrarTarea = id => {
    //Filtar las tareas
    let nuevas_tareas = tareas.filter((tarea, indice) => indice !== id);
    // console.log(nuevas_tareas);

    //Restablece el estado
    setTareas(nuevas_tareas);
  }


  return (

    <div className='tareas-container'>
      <h1>Tareas</h1>
      <form onSubmit={guardarTareas}>
        <input type="text" name="descripcion" placeholder='Describe la tara' />
        <input type="submit" values="Guardar" />
      </form>

      <h3>Lista de tareas</h3>
      <ul>
        {
          tareas.map((tarea, indice) => {
            return( 
              <li key={indice}>
                {tarea}
                &nbsp;
                <button onClick={() => borrarTarea(indice)}>X</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
