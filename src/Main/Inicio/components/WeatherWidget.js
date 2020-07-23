import React from 'react';

import './WeatherWidget.css';

const WeatherWidget = props => {
    return(
        <div className="weather-widget">
            <div className="weather-widget__row">
                <h5>{props.title}:</h5>
            </div>
            <div className="weather-widget__row">
                    <img src={`https://openweathermap.org/img/w/${props.icon}.png`} alt="Icono del Clima" className="weather-widget__icon"/>
                    <h2 className="weather-widget__temp">{Math.round(props.temperature)}&deg;C</h2>
            </div>
            <div className="weather-widget__row">
                <h2 className="weather-widget__desc">{props.description}</h2>
            </div>

        </div>




        // <div className="weather-widget">
        //     <div className="weather-widget__header">
        //         <h4 className="weather-widget__title">{props.title}</h4>
        //     </div>
        //     <div className="weather-widget__body">
        //         <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="Icono del Clima" className="weather-widget__icon"/>
        //         <h2 className="weather-widget__temp">{Math.round(props.temperature)}&deg;C</h2>
        //     </div>
        //     <div className="weather-widget__footer">
        //         <p>{props.description}</p>
        //         <p>viento: {props.wind} m/s</p>
        //     </div>
        // </div>
    )
}

export default WeatherWidget;