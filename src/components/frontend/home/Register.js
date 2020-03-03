import React, {Component} from 'react';
import Navbar from './Navbar';
import Footer from './HomeFooter';
import RegisterForm from './RegisterForm';
import '../../../App.css';

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