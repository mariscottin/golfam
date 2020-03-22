import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/HomeFooter';
import RegisterForm from '../components/RegisterForm';

import '../Landing.css';

class Register extends Component {
    render() {
        return (
            <div className="register-main">
                <Navbar />
                <br/>
                <div className="container App-register">
                    <RegisterForm />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Register;