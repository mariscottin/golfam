import  React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faGolfBall, faUser, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/auth-context';

import './NavLinks.css';

const NavLinks = () => {
    const auth = useContext(AuthContext);
    return (
        <ul className= "nav-links">
            <li className="first-li">
                <NavLink to="/inicio"><FontAwesomeIcon className="navbar-icon" icon={faFlag} /> Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/torneos"><FontAwesomeIcon className="navbar-icon" icon={faGolfBall} /> Torneos</NavLink>
            </li>
            <li>
                <NavLink to={`/perfil/${auth.userId}`}><FontAwesomeIcon className="navbar-icon" icon={faUser} /> Mi Perfil</NavLink>
            </li>
            <li>
                <div className="logout-btn" onClick={()=> auth.logout()}><FontAwesomeIcon className="navbar-icon" icon={faSignOutAlt} /> Salir</div>
            </li>
           
        </ul>
    )
}

export default NavLinks;