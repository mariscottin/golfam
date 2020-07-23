import React, { useEffect, useCallback, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import InscripcionTable from '../components/InscripcionTable';

import './Inscripcion.css'

const Inscripcion = () => {
    const tournId = useParams().id;
    const [loadedTournament, setLoadedTournament] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const loadTournament = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tournaments/tournament/${tournId}`);
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setLoadedTournament(responseData.tournament);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    }, [tournId])

    useEffect(() => {
        loadTournament();
    }, [loadTournament])

    const registeredHandler = () => {
        loadTournament();
    }

    return (
        <div className='inscripcion__container'>

            <div className="back-container">
                <Link to="/torneos" className="back-link">Volver al Fixture</Link>
            </div>
            {isLoading &&
                <div className="fixture-loading-spinner__container">
                    <ReactLoading type={'spin'} color={'#5a945a'} height={'20%'} width={'20%'} />
                </div>
            }
            {(!isLoading && loadedTournament) &&
                <React.Fragment>
                    <div className='inscripcion__title'>
                        <h1>{loadedTournament.name}</h1>
                        <h4>Inscripción</h4>
                    </div>
                    <div className="inscripcion-table__container">
                        <InscripcionTable tournament={loadedTournament} registeredHandler={registeredHandler}/>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default Inscripcion;