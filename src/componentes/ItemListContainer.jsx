import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

  let [equipos, setEquipos] = useState([]);

  const llamarEquipos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(datos);
      }, 2000);
    })
  }

  useEffect(() => {

    llamarEquipos()
    .then((res) => {
      setEquipos(res);
    })
  }, []);

  return (
    <div>
      <h1>Equipos</h1>
      <ItemList equipos={equipos} />
    </div>
  )
}
