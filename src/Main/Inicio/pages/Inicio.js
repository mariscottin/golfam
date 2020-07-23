import React, { useState, useEffect, useContext, useCallback } from 'react';
import ReactLoading from 'react-loading';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddPost from '../components/AddPost';
import Posts from '../components/Posts';
import InicioHeader from '../components/InicioHeader';
import { AuthContext } from '../../../shared/context/auth-context';
import './Inicio.css';

const Inicio = (props) => {
    const auth = useContext(AuthContext);
    const [weather, setWeather] = useState({
        name: '',
        temperature: null,
        wind: null,
        description: '',
        icon: '',
        isWeather: false
    });
    const [loadedPosts, setLoadedPosts] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [newPostIsLoading, setNewPostIsLoading] = useState(false);

    //Fetch weather from weather API
    const loadWeatherData = useCallback(async () => {
        try {
            const weatherResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/clubs/${auth.clubId}`)
            .then(response => response.json())
            .then(clubData => {
                const coord = clubData.club.coordinates;
                return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lng}&lang=es&units=metric&APPID=60b9e5dce86db6f6f64e9a05c9f861d7`)
            })
            const weatherData = await weatherResponse.json();
            setWeather({
                name: weatherData.name,
                temperature: weatherData.main.temp,
                wind: weatherData.wind.speed,
                description: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon,
                isWeather: true
            });
        } catch (err) {
            console.log(err);
        }
    },[auth.clubId])

    const loadPostsData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`);
            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData.message)
            }
            setLoadedPosts(responseData.posts);
        } catch (err) {
            console.log(err);
            setError(err.message);
            setShowErrorModal(true);
        }
        setIsLoading(false);
    }

    const handleAddPost = async (body, user) => {
        try {
            setNewPostIsLoading(true);
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                },
                body: JSON.stringify({
                    body: body
                })
            });
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setLoadedPosts(state => [responseData, ...state])
        } catch (err) {
            console.log(err);
        }
        setNewPostIsLoading(false);
    }

    useEffect(() => {
        loadWeatherData();
        loadPostsData();
    }, [loadWeatherData])

    const handleCloseErrorModal = () => setShowErrorModal(false);

    return (
        <div>
            <div className="Main-body">
                <InicioHeader weather={weather} />
                <AddPost handleAddPost={handleAddPost} />

                <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>¡Error!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{error}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseErrorModal}>
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Modal>

                {isLoading &&
                    <div className="posts-loading-spinner__container">
                        <ReactLoading className="posts-loading-spinner" type={'spin'} color={'#5a945a'} height={'10%'} width={'10%'} />
                    </div>
                }
                {(!isLoading && loadedPosts) &&
                    <div>
                        {newPostIsLoading &&
                            <div className="posts-loading-spinner__container">
                                <ReactLoading className="posts-loading-spinner" type={'spin'} color={'#5a945a'} height={'10%'} width={'10%'} />
                            </div>
                        }
                        <Posts posts={loadedPosts} handleLike={props.handleLike} />
                    </div>
                
                }
                
            </div>
        </div>
    )
}

export default Inicio;