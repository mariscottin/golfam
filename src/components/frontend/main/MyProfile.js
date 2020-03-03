import React, { useState } from 'react';
import Navbar from './Navbar';
import ProfileCard from './ProfileCard';
import ScorecardsModule from './ScorecardsModule';
import './Main.css';


const MyProfile = ({currentUser: user}) => {

    return (
        <div>
            <Navbar />
            <div className="Main-body">
                <nav>
                    <div className="nav nav-tabs profile-navbar" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-miPerfil-tab" data-toggle="tab" href="#nav-miPerfil" role="tab" aria-controls="nav-miPerfil" aria-selected="true">Mi Perfil</a>
                        <a className="nav-item nav-link" id="nav-misTarjetas-tab" data-toggle="tab" href="#nav-misTarjetas" role="tab" aria-controls="nav-misTarjetas" aria-selected="false">Mis Tarjetas</a>
                        <a className="nav-item nav-link" id="nav-miCalendario-tab" data-toggle="tab" href="#miCalendario" role="tab" aria-controls="miCalendario" aria-selected="false">Mi Calendario</a>
                        <a className="nav-item nav-link" id="nav-misConsumos-tab" data-toggle="tab" href="#misConsumos" role="tab" aria-controls="misConsumos" aria-selected="false">Mis Consumos</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-miPerfil" role="tabpanel" aria-labelledby="nav-miPerfil-tab">
                        <ProfileCard user={user}/>
                    </div>
                    <div className="tab-pane fade" id="nav-misTarjetas" role="tabpanel" aria-labelledby="nav-misTarjetas-tab">
                        <ScorecardsModule user={user}/>
                    </div>
                    <div className="tab-pane fade" id="miCalendario" role="tabpanel" aria-labelledby="nav-miCalendario-tab">Mi Calendario</div>
                    <div className="tab-pane fade" id="misConsumos" role="tabpanel" aria-labelledby="nav-misConsumos-tab">Mis Consumos</div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;