import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProfileCard from './ProfileCard';
import './Main.css';

const Profile = ({ match }) => {
    //I WILL HAVE TO FETCH THE USER INFO FROM THE DB, BUT FOR PROTOTYPING I WILL CREATE A STATE WITH THE USERS ALREADY DEFINED
    const [users, setUsers] = useState([
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
        }
    ]);

    const [user, setUser] = useState({});

    //Get the user info before the component renders
    useEffect(() => {
        let userId = match.params;
        //Here would go the fetch method
        users.forEach(item => {
            console.log(item.id)
            if (item.id === parseInt(userId.id)) {
                setUser(item);
            }
        })

    })
    return (
        <div>
            <Navbar />
            <div className="Main-body">
                <nav>
                    <div className="nav nav-tabs profile-navbar" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-Perfil-tab" data-toggle="tab" href="#nav-Perfil" role="tab" aria-controls="nav-Perfil" aria-selected="true">Perfil</a>
                        <a className="nav-item nav-link" id="nav-Tarjetas-tab" data-toggle="tab" href="#nav-Tarjetas" role="tab" aria-controls="nav-Tarjetas" aria-selected="false">Tarjetas</a>
                        <a className="nav-item nav-link" id="nav-Calendario-tab" data-toggle="tab" href="#Calendario" role="tab" aria-controls="Calendario" aria-selected="false">Calendario</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-Perfil" role="tabpanel" aria-labelledby="nav-Perfil-tab">
                        <ProfileCard user={user} />
                    </div>
                    <div className="tab-pane fade" id="nav-Tarjetas" role="tabpanel" aria-labelledby="nav-Tarjetas-tab">Tarjetas</div>
                    <div className="tab-pane fade" id="Calendario" role="tabpanel" aria-labelledby="nav-Calendario-tab">Calendario</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;