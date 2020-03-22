import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../../assets/img/main-slide-1.png';
import slide2 from '../../assets/img/main-slide-2.png';

import '../Landing.css';


const HomeBody = () => {

    return (
        <div className="App-body">
            <Carousel interval={3000}>
                <Carousel.Item>
                    <div className="container">
                        <div className="row center-body">
                            <div className="col-lg-5 main-body-slide">
                                <h2>La Primera Red Social para Golfistas Aficionados</h2>
                                <h6>Conectate con tus amigos golfistas y viví la experiencia de ser un Golfista Aficionado en la era digital</h6>
                            </div>
                            <div className="col-lg-5">
                                <img src={slide1} className="slide-img" alt="golfam-slider-1" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container">
                        <div className="row center-body">
                            <div className="col-lg-5 main-body-slide">
                                <h2>El Sistema de Gestión más moderno para clubes de Golf</h2>
                                <h6>Gestioná los torneos, jugadores y el día a día de tu campo de golf de la manera más simple y moderna</h6>
                            </div>
                            <div className="col-lg-5">
                                <img src={slide2} className="slide-img" alt="golfam-slider-2" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}


export default HomeBody;