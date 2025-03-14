import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

  const [ nombre, setNombre ] = useState("");
  const [ pagina, setPagina ] = useState(1);

  const asignarGestor = e => {
    setNombre(e.target.value);
  }

  useEffect(() => {
    console.log("Vista Gestion actualizada!!")
  }, [nombre,pagina])

  return (
    <div>
      <h1>Nombre del gestor : {nombre}</h1>

      <input type="text" onChange={asignarGestor} placeholder="Introduce nombre gestor" />

      <h2>Listado de empleados</h2>
      <p>Los usuarios son gestionados por {nombre} </p>
      <button onClick={() => { setPagina(1) }}>Página 1</button> 
      <button onClick={() => { setPagina(2) }}>Página 2</button>

      <Empleados pagina={pagina} />

    </div>
  )
}
