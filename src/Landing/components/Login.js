import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import '../Landing.css';

const Login = props => {

    const [matricula, setMatricula] = useState(0);
    const [password, setPassword] = useState('');

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
    
    const onSubmitHandler = () => {
        const user = DUMMY_USERS.filter(user => user.matricula === matricula);
        if(!user[0]) {
            alert('Usuario no registrado. Regístrese para continuar');
        }else if(user[0].matricula !== matricula || user[0].password !== password){
            alert('Usuario y/o contraseña incorrecto');
        }else{
            props.loggedIn(user[0]);
            window.history.pushState({
                id: 'inicio'
            }, 'Golfam | Inicio', 'http://localhost:3000/inicio');
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
                <Link to="/inicio" className="btn btn-primary" onClick={onSubmitHandler}>Iniciar Sesión</Link>
                <span className="register-span">¿Todavía no te registraste? <Link to="/registrarme">¡Registrate!</Link></span>
            </form>
        </div>
    )

}

export default Login;