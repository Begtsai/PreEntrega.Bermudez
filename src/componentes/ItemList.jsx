import React from 'react'
import {Item} from './Item'


export const ItemList = ( {equipos} ) => {

    return (
        <div>
            {
                equipos.length > 0 ?
                equipos.map(equipo => {
                    return <Item key={equipo.id} equipo= {equipo} />
                }) 
                : <p>No se encuentran equipos</p>
            }
    </div>
    )
}

