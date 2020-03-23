import React from 'react';
import Logo from '../../../assets/img/cnsi-logo.png';

import './InicioHeader.css';

const InicioHeader = () => {
    return(
        <div className="inicio-header">
            <div className="logo-container">
                <img src={Logo} alt='Golfam-logo' />
            </div>
            <div className="estado-cancha-container">
                <h5>Estado de la cancha:</h5>
                <h4 className="estado-cancha abierta">Abierta</h4>
            </div>
            <div className="weather-container">
                <h5>Clima:</h5>
            </div>
        </div>
    )
}

export default InicioHeader;