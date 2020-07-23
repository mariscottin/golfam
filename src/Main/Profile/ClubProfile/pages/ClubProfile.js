import React, { useState, useEffect, useCallback } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import NavTabs from '../../../shared/NavTabs/NavTabs';
import Tab from '../../../shared/NavTabs/Tab';
import ClubCard from '../components/ClubCard';

import './ClubProfile.css';

const UserProfile = () => {
    const clubId = useParams().id;
    const [loadedClub, setLoadedClub] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const loadClub = useCallback(async () =>{
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/clubs/${clubId}`);
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setLoadedClub(responseData.club);
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
    }, [clubId])
    
    useEffect(() => {
        loadClub();
    }, [loadClub]);



    // const loadClub = async () => {
        
    // }

    return (
        <div className="user-profile__container">
            <div className="user-profile__navbar">
                    <NavTabs>
                        <Tab to={`/club/${clubId}`} title={'Club'} active />
                        <Tab to={`/club/${clubId}/torneos`} title={'Torneos'} />
                        <Tab to={`/club/${clubId}/actividad`} title={'Actividad'} />
                        {/* <Tab to={`/perfil/${auth.userId}/consumos`} title={'Mis Consumos'} /> */}
                    </NavTabs>
            </div>
            {isLoading &&
                <div className="fixture-loading-spinner__container">
                    <ReactLoading className="fixture-loading-spinner" type={'spin'} color={'#5a945a'} height={'10%'} width={'10%'} />
                </div>
            }
            {(!isLoading && loadedClub) &&
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active">
                        <ClubCard club={loadedClub} />
                    </div>
                </div>
            }
        </div>
    )

}

export default UserProfile;