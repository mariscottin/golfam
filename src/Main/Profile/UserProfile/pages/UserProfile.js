import React, { useState, useContext, useEffect, useCallback } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import NavTabs from '../../../shared/NavTabs/NavTabs';
import Tab from '../../../shared/NavTabs/Tab';
import ProfileCard from '../components/ProfileCard';
import { AuthContext } from '../../../../shared/context/auth-context';

import './UserProfile.css';

const UserProfile = () => {
    const auth = useContext(AuthContext);
    const userId = useParams().id;
    const [loadedUser, setLoadedUser] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const loadUser = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/user/${userId}`);
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setLoadedUser(responseData.user)
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
    }, [userId]);
    
    useEffect(() => {
        loadUser();
    }, [loadUser]);

    return (
        <div className="user-profile__container">
            <div className="user-profile__navbar">
                {auth.userId === userId ?
                    <NavTabs>
                        <Tab to={`/perfil/${auth.userId}`} title={'Mi Perfil'} active />
                        <Tab to={`/perfil/${auth.userId}/tarjetas`} title={'Mis Tarjetas'} />
                        <Tab to={`/perfil/${auth.userId}/actividad`} title={'Mi Actividad'} />
                        {/* <Tab to={`/perfil/${auth.userId}/consumos`} title={'Mis Consumos'} /> */}
                    </NavTabs>
                    :
                    <NavTabs>
                        <Tab to={`/perfil/${userId}`} title={'Perfil'} active />
                        <Tab to={`/perfil/${userId}/tarjetas`} title={'Tarjetas'} />
                        <Tab to={`/perfil/${userId}/actividad`} title={'Actividad'} />
                    </NavTabs>
                }
            </div>
            {isLoading &&
                <div className="fixture-loading-spinner__container">
                    <ReactLoading className="fixture-loading-spinner" type={'spin'} color={'#5a945a'} height={'10%'} width={'10%'} />
                </div>
            }
            {(!isLoading && loadedUser) &&
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active">
                        <ProfileCard user={loadedUser} currentUserId={auth.userId}/>
                    </div>
                </div>
            }
        </div>
    )

}

export default UserProfile;