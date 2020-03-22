import React from 'react';
import Navbar from '../components/Navbar';
import HomeHeader from '../components/HomeHeader';
import HomeBody from '../components/HomeBody';
import HomeFooter from '../components/HomeFooter';

import '../Landing.css';

const Home = () => {

    return (
        <div>
            <Navbar />
            <HomeHeader />
            <HomeBody />
            <HomeFooter />
        </div>
    )

}

export default Home;