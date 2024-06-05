import React from 'react'
import { Nombre } from './Nombre'
import { NavBar } from './NavBar'
import Carrito from './Carrito'


export const Header = (props) => {
  return (
    <header className='header'>
        <Nombre />
        <NavBar />
    </header>
  )
}

