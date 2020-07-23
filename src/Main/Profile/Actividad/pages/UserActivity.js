import React, { useContext, useEffect, useState, useCallback } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../shared/context/auth-context';
import NavTabs from '../../../shared/NavTabs/NavTabs';
import Tab from '../../../shared/NavTabs/Tab';
import Posts from '../../../Inicio/components/Posts';
import './UserActivity.css';

const UserActivity = props => {
    const auth = useContext(AuthContext);
    const userId = useParams().id;
    const [userPosts, setUserPosts] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const loadUserPosts = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/user/${userId}`);
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setUserPosts(responseData.posts)
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
    }, [userId]);

    useEffect(() => {
        loadUserPosts();
    }, [loadUserPosts]);


    return (
        <div className="user-activity__container">
            <div className="user-activity__navbar">
                {auth.userId === userId ?
                    <NavTabs>
                        <Tab to={`/perfil/${auth.userId}`} title={'Mi Perfil'} />
                        <Tab to={`/perfil/${auth.userId}/tarjetas`} title={'Mis Tarjetas'} />
                        <Tab to={`/perfil/${auth.userId}/actividad`} title={'Mi Actividad'} active />
                        {/* <Tab to={`/perfil/${auth.userId}/consumos`} title={'Mis Consumos'} /> */}
                    </NavTabs>
                    :
                    <NavTabs>
                        <Tab to={`/perfil/${userId}`} title={'Perfil'} />
                        <Tab to={`/perfil/${userId}/tarjetas`} title={'Tarjetas'} />
                        <Tab to={`/perfil/${userId}/actividad`} title={'Actividad'} active />
                    </NavTabs>
                }
            </div>
            {isLoading &&
                <div className="fixture-loading-spinner__container">
                    <ReactLoading className="fixture-loading-spinner" type={'spin'} color={'#5a945a'} height={'10%'} width={'10%'} />
                </div>
            }
            {(!isLoading && userPosts) &&
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active">
                        <Posts posts={userPosts} handleLike={props.handleLike}/>
                    </div>
                </div>
            }

        </div>
    )
}

export default UserActivity;