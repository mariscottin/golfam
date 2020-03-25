import React from 'react';
import Login from './Login';
import Logo from '../../assets/img/logo-2.png'

import '../Landing.css';

const HomeHeader = props => {
    return (
        <div>
            <header className="App-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={Logo} className="App-logo" alt="logo" />
                        </div>
                        <div className="col-lg-6">
                            <Login loggedIn={props.loggedIn}/>
                        </div>

                    </div>

                </div>
            </header>
        </div>
    );

}

export default HomeHeader;