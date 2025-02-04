import React from 'react'

export const Tareas = () => {
  return (
    <div className='tareas-container'>
      <h1>Tareas</h1>
      <form>
        <input type="text" name="descripcion" placeholder='Describe la tara' />
        <input type="submit" values="Guardar" />
      </form>

      <h3>Lista de tareas</h3>
      
    </div>
  )
}
