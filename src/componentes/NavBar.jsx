import React from 'react'

export const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid menu">
                <a className="navbar-brand" href="#">Equipos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Alquilar</a>
                    <a className="nav-link" href="#">Contacto</a>
                    <a className="nav-link" href="#">🛒1</a>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
