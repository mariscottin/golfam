import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import NavTabs from '../../../shared/NavTabs/NavTabs';
import Tab from '../../../shared/NavTabs/Tab';
import ProfileCard from '../components/ProfileCard';

import './UserProfile.css';

const DUMMY_USERS = [
    {
        id: 123456,
        name: "Nicolas",
        lastName: "Mariscotti",
        matricula: 113113,
        club: "Club Nautico San Isidro",
        age: 26,
        handicap: 5.9,
        country: "Argentina",
        profileImg: 'https://imagizer.imageshack.com/img921/627/FLY9pC.jpg',
        followers: 12932,
        following: 1993
    },
    {
        id: 654321,
        name: "Guillermo",
        lastName: "Ferrari",
        matricula: 115115,
        club: "Club Nautico San Isidro",
        age: 27,
        handicap: '+1.0',
        country: "Argentina",
        profileImg: 'https://imagizer.imageshack.com/img923/9435/q28BmG.jpg',
        followers: 1023,
        following: 912
    },
    {
        id: 13243546,
        name: "Federico",
        lastName: "Prieto",
        matricula: 109537,
        club: "Club Nautico San Isidro",
        age: 33,
        handicap: '7.2',
        country: "Argentina",
        profileImg: 'https://imagizer.imageshack.com/img924/6154/QVl4IV.jpg',
        followers: 755,
        following: 892
    },
    {
        id: 64534231,
        name: "Ezequiel",
        lastName: "Diez Peña",
        matricula: 110736,
        club: "Club Nautico San Isidro",
        age: 32,
        handicap: '4.6',
        country: "Argentina",
        profileImg: 'https://imagizer.imageshack.com/img923/5321/d6FUTM.jpg',
        followers: 229,
        following: 596
    },
]



const UserProfile = ({ currentUser }) => {
    const userId = +useParams().id;
    const loadedUser = DUMMY_USERS.filter(item => item.id === userId);
    
    const [toggleLogout, setToggleLogout] = useState(false);


    const handleToggleLogOut = () => {
        !toggleLogout ? setToggleLogout(true) : setToggleLogout(false);
    }


    return (
        <div className="user-profile__container">
            <div className="user-profile__navbar">
                {currentUser.id === userId ?
                    <NavTabs>
                        <Tab to={`/perfil/${loadedUser[0].id}`} title={'Mi Perfil'} active />
                        <Tab to={`/perfil/${loadedUser[0].id}/tarjetas`} title={'Mis Tarjetas'} />
                        <Tab to={`/perfil/${loadedUser[0].id}/calendario`} title={'Mi Calendario'} />
                        <Tab to={`/perfil/${loadedUser[0].id}/consumos`} title={'Mis Consumos'} />
                    </NavTabs>
                    :
                    <NavTabs>
                        <Tab to={`/perfil/${loadedUser[0].id}`} title={'Perfil'} active />
                        <Tab to={`/perfil/${loadedUser[0].id}/tarjetas`} title={'Tarjetas'} />
                        <Tab to={`/perfil/${loadedUser[0].id}/calendario`} title={'Calendario'} />
                    </NavTabs>
                }
            </div>
            
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active">
                    <div className="logout__container">
                        <div className="logout__dots" onClick={handleToggleLogOut}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        {toggleLogout &&
                            <div className="logout__link-box">
                                <Link to="/"><FontAwesomeIcon icon={faSignOutAlt}/> Salir</Link>
                            </div>
                        }
                    </div>
                    <ProfileCard user={loadedUser[0]} />
                </div>
            </div>
        </div>
    )

}

export default UserProfile;