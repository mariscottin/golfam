import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeBody from '../components/HomeBody';
import HomeFooter from '../components/HomeFooter';

import '../Landing.css';

const Home = () => {

    return (
        <div>
            <HomeHeader />
            <HomeBody />
            <HomeFooter />
        </div>
    )

}

export default Home;