import React from 'react';
import Login from './Login';
import logo from '../../../assets/img/logo.png'
import '../../../App.css';

const HomeHeader = () => {
    return (
        <div>
            <header className="App-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <div className="col-lg-6">
                            <Login />
                        </div>

                    </div>

                </div>
            </header>
        </div>
    );

}

export default HomeHeader;