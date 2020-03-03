import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faGolfBall, faUser, faSignOutAlt, faSign } from '@fortawesome/free-solid-svg-icons';
import './Main.css';


const Navbar = ()=> {
    return(
        <div className="main-navbar">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <span className="navbar-brand mb-0 h1">GOLFAM</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/inicio" className="nav-link" ><FontAwesomeIcon className="navbar-icon" icon={faFlag} /> Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FontAwesomeIcon className="navbar-icon" icon={faGolfBall} /> Torneos</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/miperfil" className="nav-link"><FontAwesomeIcon className="navbar-icon" icon={faUser} /> Mi perfil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link"><FontAwesomeIcon className="navbar-icon" icon={faSignOutAlt} /> Salir</Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar;