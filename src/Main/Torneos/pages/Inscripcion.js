import React from 'react';
import { useParams, Link } from 'react-router-dom';
import InscripcionTable from '../components/InscripcionTable';

import './Inscripcion.css'
//STATIC TOURNAMENTS DATA!! FETCH FROM DB!!
const DUMMY_TOURNAMENTS =
    [
        {
            id: 11111,
            date: '12/03/2020',
            name: 'Torneo los Teros',
            mod: 'Medal Play',
            cat: '0-36',
            state: 'Abierto'
        },
        {
            id: 11112,
            date: '13/03/2020',
            name: 'Torneo los Patos',
            mod: 'Fourball Americana',
            cat: '0-36',
            state: 'Abierto'
        },
        {
            id: 11113,
            date: '19/03/2020',
            name: 'Torneo las Palomas',
            mod: 'Laguneada',
            cat: '0-18, 18-36',
            state: 'Cerrado'
        },
        {
            id: 11114,
            date: '20/03/2020',
            name: 'Gran Premio',
            mod: 'Medal Play',
            cat: 'Scratch, 0-9, 10-16',
            state: 'Cerrado'
        },
        {
            id: 11115,
            date: '26/03/2020',
            name: 'Sweepstake',
            mod: 'Medal Play',
            cat: '0-36',
            state: 'Cerrado'
        }
    ]


const Inscripcion = () => {
    const tournId = +useParams().id;
    const loadedTournament = DUMMY_TOURNAMENTS.filter(tour => tour.id === tournId);

    return (
        <div className='inscripcion__container'>
            <div className="back-container">
                <Link to="/torneos" className="back-link">Volver al Fixture</Link>
            </div>
            <div className='inscripcion__title'>
                <h1>{loadedTournament[0].name}</h1>
                <h4>Inscripción</h4>
            </div>
            <div className="inscripcion-table__container">
                <InscripcionTable tournament={loadedTournament[0]} />
            </div>
        </div>
    )
}

export default Inscripcion;