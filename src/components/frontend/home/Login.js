import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import {Link} from 'react-router-dom';

import '../../../App.css';

const Login = () => {

    const [matricula, setMatricula] = useState();
    const [password, setPassword] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorLoggingIn, setErrorLoggingIn] = useState(false);
    const [users, setUsers] = useState(
        {
            nombre: 'Nicolas',
            appelido: 'Mariscotti',
            matricula: '113113',
            hcp: 5.9,
            password: '123456'
        }
    )

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(!matricula && !password){
            return;
        }
       if(users.matricula === matricula && users.password === password){
           console.log('Logged in!');
       }else{
           setErrorLoggingIn(true);
       }
       
    }

    return (
        <div className="home-main">
            <h2>Iniciar Sesión</h2>
            <hr />
            <form className="login-form" onSubmit={handleSubmitForm}>
                <div className="form-group">
                    <label htmlFor="login-matricula">Matrícula:</label>
                    <input type="text" className="form-control" id="login-matricula" placeholder="Ingrese su matrícula" onChange={(e)=>setMatricula(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="login-password">Contraseña:</label>
                    <input type="password" className="form-control" id="login-password" placeholder="Ingrese su contraseña" onChange={(e)=> setPassword(e.target.value)} />
                </div>
                {
                errorLoggingIn ? 
                    <Alert variant="danger" onClose={() => setErrorLoggingIn(false)} dismissible>
                    <p>
                        Matrícula y/o Contraseña incorrecta.
                    </p>
                    </Alert>
                    :
                    null}
                <Link to="/inicio" className="btn btn-primary">Iniciar Sesión</Link>
                {/* NO VALIDATION OR AUTHENTICATION DONE HERE!!!! JUST FOR PROTOTYPE!!! */}
                
                <span className="register-span">¿Todavía no te registraste? <Link to="/registrarme">¡Registrate!</Link></span>
            </form>
        </div>
    )

}

export default Login;