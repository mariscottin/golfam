import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faGolfBall, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className= "nav-links">
            <li className="first-li">
                <NavLink to="/inicio"><FontAwesomeIcon className="navbar-icon" icon={faFlag} /> Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/torneos"><FontAwesomeIcon className="navbar-icon" icon={faGolfBall} /> Torneos</NavLink>
            </li>
            <li>
                <NavLink to={`/perfil/${props.currentUserId}`}><FontAwesomeIcon className="navbar-icon" icon={faUser} /> Mi Perfil</NavLink>
            </li>
            <li>
                <NavLink to="/" exact><FontAwesomeIcon className="navbar-icon" icon={faSignOutAlt} /> Cerrar Sesión</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;