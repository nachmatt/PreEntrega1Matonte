import React from 'react';
import CartWidget from './CartWidget';

import './NavBar.scss'

const NavBar = () => {
    
    //Nav basada en bootstrap.
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 wrapper">
            <div className="container-fluid ">
                <a className="navbar-brand title " href="#">PC PARTS</a>
                
                {/* Burguer menu */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                {/* Content */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar