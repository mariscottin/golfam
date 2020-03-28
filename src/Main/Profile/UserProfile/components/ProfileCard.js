import React from 'react';
import clubLogo from '../../../../assets/img/cnsi-logo.png'

import './ProfileCard.css';

const ProfileCard = ({ user }) => {
    return (
        <div className="profile-card">
            <div className="profile-card__header profile-card__row">
                <div className="profile-card__img-holder">
                    <img src={user.profileImg} alt={user.name} />
                </div>
                <div className="profile-card__name-holder">
                    <h1>{user.name} {user.lastName}</h1>
                    <div className="profile-card__row">
                        <img src={clubLogo} alt={user.club} className="profile-card__club-icon" />
                        <p className="profile-card__user-club">{user.club}</p>
                    </div>
                </div>
            </div>
            <div className="profile-card__body">
                <div className="profile-card__user-data profile-card__row">
                    <div className="profile-card__col">
                        <div className="value">{user.handicap}</div>
                        <div className="denotation">Hcp Index</div>
                    </div>
                    <div className="profile-card__col">
                        <div className="value">{user.matricula}</div>
                        <div className="denotation">matricula</div>
                    </div>
                </div>
                <div className="profile-card__user-data profile-card__row">
                    <div className="profile-card__col">
                        <div className="value">{user.age}</div>
                        <div className="denotation">Edad</div>
                    </div>
                    <div className="profile-card__col">
                        <div className="value">{user.country}</div>
                        <div className="denotation">pais</div>
                    </div>
                </div>
                <div className="profile-card__followers-data profile-card__row">
                    <div className="profile-card__col">
                        <div className="value">{user.followers}</div>
                        <div className="denotation">Seguidores</div>
                    </div>
                    <div className="profile-card__col">
                        <div className="value">{user.following}</div>
                        <div className="denotation">Siguiendo</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;