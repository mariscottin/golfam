import React from 'react';
import { Link } from 'react-router-dom';
import clubLogo from '../../../../assets/img/cnsi-logo.png'
import './ProfileCard.css';

const ProfileCard = ({ user, currentUserId }) => {
    return (
        <div className="profile-card">
            <div className="profile-card__header profile-card__row">
                <div className="profile-card__img-holder">
                    <img src={`${process.env.REACT_APP_ASSET_URL}/${user.profileImg}`} alt={user.name} />
                </div>
                <div className="profile-card__name-holder">
                    <h1>{user.name} {user.lastName}</h1>
                    <div className="profile-card__row">
                        <img src={clubLogo} alt={user.club.name} className="profile-card__club-icon" />
                        <Link to={`/club/${user.club.id}`} className="profile-card__user-club">{user.club.name}</Link>
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
                        <div className="value">{user.birthDate.substr(4, 11)}</div>
                        <div className="denotation">Nacimiento</div>
                    </div>
                    <div className="profile-card__col">
                        <div className="value">{user.country}</div>
                        <div className="denotation">pais</div>
                    </div>
                </div>
                <div className="followers-info__container">
                    <div className="profile-card__followers-data profile-card__row">
                        <div className="profile-card__col">
                            <div className="value">{user.followers.length}</div>
                            <div className="denotation">Seguidores</div>
                        </div>
                        <div className="profile-card__col profile-card__col-2">
                            <div className="value">{user.following.length}</div>
                            <div className="denotation">Siguiendo</div>
                        </div>
                    </div>
                    {/* {user.id !== currentUserId &&
                        <div className="profile-card__follow-btn-container">
                            <button type="button" className="btn btn-primary follow-btn">Seguir</button>
                        </div>
                    } */}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;