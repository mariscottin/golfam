import React from 'react';
import Logo from '../../../../assets/img/cnsi-logo.png';
import Map from '../../../../shared/Map/Map';
import './ClubCard.css';

const ClubCard = props => {
    return(
        <div className="club-card__container">
            <div className="club-card__header">
                <div className="club-card__logo-container">
                    <img src={Logo} alt={`${props.club.name} Logo`} />
                </div>
                <div className="club-card__name-container">
                    <h1>{props.club.name}</h1>
                </div>
            </div>
            <div className="club-card__body mt-3">
                <div className="google-maps__container">
                    <div className="map-container">
                        <Map center={props.club.coordinates} zoom={16}/>
                    </div>
                    <div className="address">{props.club.address}</div>
                </div>
                <div className="club-card__info-container center">
                    <div className="info-col">
                        <div className="info">
                            <div className="value">03/07/1901</div>
                            <div className="denotation">FUNDACIÓN</div>
                        </div>
                        <div className="info">
                            <div className="value">341</div>
                            <div className="denotation">GOLFISTAS</div>
                        </div>
                    </div>
                    <div className="info-col">
                        <div className="info">
                            <a href="http://cnsi.org.ar" className="value" target="_blank" rel="noopener noreferrer">www.cnsi.org.ar</a>
                            <div className="denotation">WEB</div>
                        </div>
                        <div className="info">
                            <div className="value">4732-0440</div>
                            <div className="denotation">TELÉFONO</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubCard;