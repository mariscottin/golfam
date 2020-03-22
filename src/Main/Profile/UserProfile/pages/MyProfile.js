import React from 'react';
import Navbar from '../../../Navbar';
import NavTabs from '../../../shared/NavTabs/NavTabs';
import Tab from '../../../shared/NavTabs/Tab';
import ProfileCard from '../components/ProfileCard';


const MyProfile = ({currentUser: user}) => {

    return (
        <div>
            <Navbar />
            <div className="Main-body">
                <NavTabs>
                    <Tab to={`/perfil/${user.id}`} title={'Mi Perfil'} active/>
                    <Tab to={`/perfil/${user.id}/tarjetas`} title={'Mis Tarjetas'}/>
                    <Tab to={`/perfil/${user.id}/calendario`} title={'Mi Calendario'}/>
                    <Tab to={`/perfil/${user.id}/consumos`} title={'Mis Consumos'}/>
                </NavTabs>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active">
                        <ProfileCard user={user}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;