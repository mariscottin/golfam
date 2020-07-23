import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ScorecardsModule from '../components/ScorecardsModule';
import NavTabs from '../../../shared/NavTabs/NavTabs';
import Tab from '../../../shared/NavTabs/Tab';
import { AuthContext } from '../../../../shared/context/auth-context';

import './UserScorecards.css';
const DUMMY_SCORECARDS = [
    {
        id: 'sc_1',
        user: '5ed6b0ffff1b3a2808e72c91',
        club: 'Club Nautico San Isidro',
        score: [4, 4, 3, 4, 4, 4, 5, 3, 4, 4, 3, 4, 5, 5, 4, 4, 3, 3],
        torneo: 'Sweepstake',
        modalidad: 'Medal Play',
        position: 1,
        date: '15/02/2020'
    },
    {
        id: 'sc_2',
        user: '5eb9aca58682475ba41f1b6a',
        club: 'Club Nautico San Isidro',
        torneo: 'Sweepstake',
        modalidad: 'Medal Play',
        score: [5, 3, 4, 5, 5, 5, 3, 2, 4, 4, 4, 5, 3, 4, 3, 5, 3, 4],
        position: 2,
        date: '14/02/2020'
    },
    {
        id: 'sc_3',
        user: 123456,
        club: 'Club Nautico San Isidro',
        torneo: 'Sweepstake',
        modalidad: 'Medal Play',
        score: [5, 3, 4, 5, 5, 5, 3, 2, 4, 4, 4, 5, 3, 4, 3, 5, 3, 4],
        position: 2,
        date: '8/02/2020'
    }
]


const UserScorecards = () => {
    const auth = useContext(AuthContext);
    const userId = useParams().id;
    const loadedScorecards = DUMMY_SCORECARDS.filter(scorecard => scorecard.user === userId);

    return(
        <div>
            <div className="user-scorecards__scorecards-container">
                <div className="user-scorecards__navbar">
                    {auth.userId === userId ?
                        <NavTabs>
                            <Tab to={`/perfil/${auth.userId}`} title={'Mi Perfil'} />
                            <Tab to={`/perfil/${auth.userId}/tarjetas`} title={'Mis Tarjetas'} active />
                            <Tab to={`/perfil/${auth.userId}/actividad`} title={'Mi Actividad'} />
                            {/* <Tab to={`/perfil/${auth.userId}/consumos`} title={'Mis Consumos'} /> */}
                        </NavTabs>
                        :
                        <NavTabs>
                            <Tab to={`/perfil/${userId}`} title={'Perfil'} />
                            <Tab to={`/perfil/${userId}/tarjetas`} title={'Tarjetas'} active/>
                            <Tab to={`/perfil/${userId}/actividad`} title={'Actividad'} />
                        </NavTabs>
                    }
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active">
                        {loadedScorecards.length > 0 ?
                            <ScorecardsModule scorecards={loadedScorecards}/>
                            :
                            <p className="center mt-3">Este usuario no tiene tarjetas</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserScorecards;