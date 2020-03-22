import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faGolfBall, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Navbar = ()=> {
    return(
        <div className="main-navbar">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <span className="navbar-brand mb-0 h1"><NavLink to="/inicio">GOLFAM</NavLink></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/inicio" exact className="nav-link" ><FontAwesomeIcon className="navbar-icon" icon={faFlag} /> Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/torneos" className="nav-link"><FontAwesomeIcon className="navbar-icon" icon={faGolfBall} /> Torneos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/miperfil" exact className="nav-link"><FontAwesomeIcon className="navbar-icon" icon={faUser} /> Mi perfil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link"><FontAwesomeIcon className="navbar-icon" icon={faSignOutAlt} /> Salir</NavLink>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar;