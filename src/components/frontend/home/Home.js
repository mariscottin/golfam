import React from 'react';
import Navbar from './Navbar';
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';
import HomeFooter from './HomeFooter';

import '../../../App.css';

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