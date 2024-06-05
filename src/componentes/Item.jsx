import React from 'react'


export const Item = ({ equipo }) => {

  return (

    <div>
        <img src={equipo.image} />
        <h2>{equipo.name}</h2>
        <p>${equipo.price}</p>
        <p>{equipo.description}</p>
    </div>
  )
}

