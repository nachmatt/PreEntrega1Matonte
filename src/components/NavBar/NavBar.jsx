import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.scss'

import {Link} from 'react-router-dom'

const NavBar = () => {
    
    //Nav basada en bootstrap.
    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-5 wrapper">
            <div className="container">
                <Link className="navbar-brand title" to="/">PC PARTS</Link>
                
                {/* Burguer menu */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                {/* Content */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-ul">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/cpu">CPU's</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/case">Cases</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/gpu">GPU's</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                            <CartWidget />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

// 1. Ver tema imágenes
// 2. Estilizar