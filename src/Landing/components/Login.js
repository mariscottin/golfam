import React from 'react';
import {Link} from 'react-router-dom';

import '../Landing.css';

const Login = () => {

    return (
        <div className="home-main">
            <h2>Iniciar Sesión</h2>
            <hr />
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="login-matricula">Matrícula:</label>
                    <input type="text" className="form-control" id="login-matricula" placeholder="Ingrese su matrícula" />
                </div>
                <div className="form-group">
                    <label htmlFor="login-password">Contraseña:</label>
                    <input type="password" className="form-control" id="login-password" placeholder="Ingrese su contraseña" />
                </div>
                <Link to="/inicio" className="btn btn-primary">Iniciar Sesión</Link>
                <span className="register-span">¿Todavía no te registraste? <Link to="/registrarme">¡Registrate!</Link></span>
            </form>
        </div>
    )

}

export default Login;