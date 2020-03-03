import React, { useReducer } from 'react';
import clubLogo from '../../../assets/img/cnsi-logo.png'

import './Main.css';

const ProfileCard = ({user})=> {
    return(
        <div className="profile-card">
            <div className="img-holder">
                <img src={user.profileImg} className="profile-card-img"/>
                <div className="follow container">
                    <div className="row">
                        <div className="col-lg-6 item">
                            <div className="value">{user.followers}</div>
                            <div className="denotation">Seguidores</div> 
                        </div>
                        <div className="col-lg-6 item">
                            <div className="value">{user.following}</div>
                            <div className="denotation">Siguiendo</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="name-lastname-club">
                <h1>{user.name} {user.lastName}</h1>
                <div className="club-icon">
                    <img src={clubLogo} alt="club-logo"/>
                    {user.club}
                </div>
            <div className="container data">
                <div className="row">
                    <div className="col-lg-3 item">
                        <div className="value">{user.handicap}</div>
                        <div className="denotation">Index</div>
                    </div>
                    <div className="col-lg-3 item">
                        <div className="value">{user.age}</div>
                        <div className="denotation">Edad</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 item">
                        <div className="value">{user.matricula}</div>
                        <div className="denotation">Matricula</div>
                    </div>
                    <div className="col-lg-3 item">
                        <div className="value">{user.country}</div>
                        <div className="denotation">Pais</div>
                    </div>
                </div>
            </div>
        </div>
                
            
            
        </div>
    )
}

export default ProfileCard;