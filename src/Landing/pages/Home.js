import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeBody from '../components/HomeBody';
import HomeFooter from '../components/HomeFooter';

import '../Landing.css';

const Home = props => {

    return (
        <div>
            <HomeHeader loggedIn={props.loggedIn}/>
            <HomeBody />
            <HomeFooter />
        </div>
    )

}

export default Home;