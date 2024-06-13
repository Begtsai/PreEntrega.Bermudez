import React from 'react'
import Carrito from './Carrito'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid menu">
                <Link to="/" className="navbar-brand" href="#">Equipos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link" href="#">Contacto</Link>
                </div>
              </div> 
              <Carrito />
            </div>
          </nav>
    </div>
  )
}
