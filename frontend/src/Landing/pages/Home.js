import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeBody from '../components/HomeBody';
import HomeFooter from '../components/HomeFooter';

import './Home.css';

const Home = props => {

    return (
        <div className="home__container">
            <HomeHeader onLoginHandler={props.onLoginHandler}/>
            <HomeBody />
            <HomeFooter />
        </div>
    )

}

export default Home;