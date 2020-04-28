import React from 'react';
import ReactLoading from 'react-loading';

import Logo from '../../../assets/img/cnsi-logo.png';
import WeatherWidget from './WeatherWidget';
import './InicioHeader.css';

const InicioHeader = ({ weather }) => {

    return(
        <div className="inicio-header">
            <div className="logo-status-container">
                <div className="logo-container">
                    <img src={Logo} alt='Golfam-logo' />
                </div>
                <div className="estado-cancha-container">
                    <h5>Estado de la cancha: <span className="estado-cancha abierta"> Abierta</span></h5>
                </div>
            </div>
            <div className="weather-container">
                {
                    // weather.name==='' || weather.icon=== '' || weather.temperature === null || weather.description==='' || weather.wind === null
                    !weather.isWeather
                    ? 
                    <ReactLoading className="weather-loading" type={'spin'} color={'#5a945a'} height={'20%'} width={'20%'}/>
                    :
                    <WeatherWidget
                        title={weather.name}
                        icon={weather.icon}
                        temperature={weather.temperature}
                        description={weather.description}
                        wind={weather.wind}
                    />
                }
            </div>
        </div>
    )
}

export default InicioHeader;