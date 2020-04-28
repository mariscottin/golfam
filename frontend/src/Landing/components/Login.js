import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context';
import './Login.css';

const Login = () => {
    const auth = useContext(AuthContext);
    const [matricula, setMatricula] = useState(0);
    const [password, setPassword] = useState('');
    const [notRegistered, setNotRegistered] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const DUMMY_USERS = [
        {
            id: 123456,
            name: "Nicolas",
            lastName: "Mariscotti",
            matricula: 113113,
            password: 113113,
            club: "Club Nautico San Isidro",
            age: 26,
            handicap: 5.9,
            country: "Argentina",
            profileImg: 'https://imagizer.imageshack.com/img921/627/FLY9pC.jpg',
            followers: 12932,
            following: 1993
        },
        {
            id: 654321,
            name: "Guillermo",
            lastName: "Ferrari",
            matricula: 115115,
            password: 115115,
            club: "Club Nautico San Isidro",
            age: 27,
            handicap: '+1.0',
            country: "Argentina",
            profileImg: 'https://imagizer.imageshack.com/img923/9435/q28BmG.jpg',
            followers: 1023,
            following: 912
        },
        {
            id: 13243546,
            name: "Federico",
            lastName: "Prieto",
            matricula: 109537,
            password: 109537,
            club: "Club Nautico San Isidro",
            age: 33,
            handicap: '7.2',
            country: "Argentina",
            profileImg: 'https://imagizer.imageshack.com/img924/6154/QVl4IV.jpg',
            followers: 755,
            following: 892
        },
        {
            id: 64534231,
            name: "Ezequiel",
            lastName: "Diez Peña",
            matricula: 110736,
            password: 110736,
            club: "Club Nautico San Isidro",
            age: 32,
            handicap: '4.6',
            country: "Argentina",
            profileImg: 'https://imagizer.imageshack.com/img923/5321/d6FUTM.jpg',
            followers: 229,
            following: 596
        },
    
    ];

    const matriculaInputHandler = event => {
        setMatricula(+event.target.value);
    };

    const passwordInputHandler = event => {
        setPassword(+event.target.value);
    }
    
    const onSubmitHandler = (event) => {
        setNotRegistered(false);
        setLoginError(false);
        const user = DUMMY_USERS.filter(user => user.matricula === matricula);
        if(!user[0]) {
            event.preventDefault();
            setNotRegistered(true);
        }else if(user[0].matricula !== matricula || user[0].password !== password){
            event.preventDefault();
            setLoginError(true);
        }else{
            auth.login();
        }
    }

    return (
        <div className="home-main">
            <h2>Iniciar Sesión</h2>
            <hr />
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="login-matricula">Matrícula:</label>
                    <input type="text" className="form-control" id="login-matricula" placeholder="Ingrese su matrícula" onChange={matriculaInputHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="login-password">Contraseña:</label>
                    <input type="password" className="form-control" id="login-password" placeholder="Ingrese su contraseña" onChange={passwordInputHandler}/>
                </div>
                    {notRegistered &&
                        <p className="alert alert-danger">Usuario no registrado, por favor, ¡<Link to="/registrarme">Registrate</Link> para ingresar!</p>
                    }
                    {loginError &&
                        <p className="alert alert-danger">La contraseña no coincide con la matrícula.</p>
                    }
                <Link to="/inicio" className="btn btn-primary" onClick={onSubmitHandler}>Iniciar Sesión</Link>
                <span className="register-span">¿Todavía no te registraste? <Link to="/registrarme">¡Registrate!</Link></span>
            </form>
        </div>
    )

}

export default Login;