import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../Navbar';
import NavTabs from '../../../shared/NavTabs/NavTabs';
import Tab from '../../../shared/NavTabs/Tab';
import ProfileCard from '../components/ProfileCard';

const DUMMY_USERS = [
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

const UserProfile = () => {
    const userId = +useParams().id;
    const loadedUser = DUMMY_USERS.filter(item => item.id === userId);
    return (
        <div>
            <Navbar />
            <div className="Main-body">
                <NavTabs>
                    <Tab to={`/perfil/${loadedUser[0].id}`} title={'Perfil'} active />
                    <Tab to={`/perfil/${loadedUser[0].id}/tarjetas`} title={'Tarjetas'} />
                    <Tab to={`/perfil/${loadedUser[0].id}/calendario`} title={'Calendario'} />
                </NavTabs>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active">
                        <ProfileCard user={loadedUser[0]} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserProfile;