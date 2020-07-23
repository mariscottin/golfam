import React, { useState, useEffect, useContext, useCallback } from 'react';
import ReactLoading from 'react-loading';
import Fixture from '../components/Fixture';
import NavTabs from '../../shared/NavTabs/NavTabs';
import Tab from '../../shared/NavTabs/Tab';
import { AuthContext } from '../../../shared/context/auth-context';
import './Torneos.css';


const Torneos = () => {

    const auth = useContext(AuthContext);
    const [loadedTournaments, setLoadedTournaments] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const loadTournamentsData = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tournaments/${auth.clubId}`);
            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData.message)
            }
            setIsLoading(false);
            setLoadedTournaments(responseData.tournaments);
        } catch (err) {
            console.log(err);
        }
    }, [auth.clubId]);

    useEffect(() => {
        loadTournamentsData();
    }, [loadTournamentsData]);




    return (
        <div>
            <div>
                <NavTabs>
                    <Tab to={`/torneos`} title='Fixture' active />
                    <Tab to={`/torneos/resultados`} title='Resultados' />
                </NavTabs>
                <div className="tab-content torneos__container">
                    <div className="tab-pane fade show active">
                        {isLoading &&
                            <div className="fixture-loading-spinner__container">
                                <ReactLoading className="fixture-loading-spinner" type={'spin'} color={'#5a945a'} height={'10%'} width={'10%'} />
                            </div>
                        }
                        {(!isLoading && loadedTournaments) &&
                            <Fixture torneos={loadedTournaments} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Torneos;