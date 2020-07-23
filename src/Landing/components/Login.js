import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { AuthContext } from '../../shared/context/auth-context';
import './Login.css';

const Login = () => {
    const auth = useContext(AuthContext);
    const [matricula, setMatricula] = useState(0);
    const [emptyMatricula, setEmptyMatricula] = useState(false);
    const [password, setPassword] = useState('');
    const [emptyPassword, setEmptyPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


    const matriculaInputHandler = event => {
        setMatricula(+event.target.value);
    };

    const passwordInputHandler = event => {
        setPassword(+event.target.value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setEmptyMatricula(false);
        setEmptyMatricula(false);
        if (!matricula && !password) {
            setEmptyMatricula(true);
            setEmptyPassword(true);
        } else if (!matricula) {
            setEmptyMatricula(true);
        } else if (!password) {
            setEmptyPassword(true);
        }
        else {
            try {
                setIsLoading(true);
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        matricula: matricula,
                        password: password.toString()
                    })
                });
                setIsLoading(false);
                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                auth.login(responseData.userId, responseData.token, responseData.name, responseData.profileImg, responseData.club);
            } catch (err) {
                console.log(err);
                setError(err.message);
            }
        }
    }

    return (
        <div className="home-main">
            <h2>Iniciar Sesión</h2>
            <hr />
            <form className="login-form" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="login-matricula">Matrícula:</label>
                    <input type="text" className={`form-control ${emptyMatricula && 'invalid'}`} id="login-matricula" placeholder="Ingrese su matrícula" onChange={matriculaInputHandler} />
                    {emptyMatricula &&
                        <div className="invalid-feedback">
                            Por favor, completar la Matrícula.
                        </div>
                    }                   
                </div>
                <div className="form-group">
                    <label htmlFor="login-password">Contraseña:</label>
                    <input type="password" className={`form-control ${emptyPassword && 'invalid'}`} id="login-password" placeholder="Ingrese su contraseña" onChange={passwordInputHandler} />
                    {emptyPassword &&
                        <div className="invalid-feedback">
                            Por favor, completar la Contraseña.
                        </div>
                    } 
                </div>
                {error === "User not registered" &&
                    <p className="alert alert-danger">Usuario no registrado, por favor, ¡<Link to="/registrarme">Registrate</Link> para ingresar!</p>
                }
                {error === "Invalid Password" &&
                    <p className="alert alert-danger">La contraseña no coincide con la matrícula.</p>
                }
                {isLoading ?
                    <div className="login-loading-spinner__container">
                        <ReactLoading className="login-loading-spinner" type={'spin'} color={'#5a945a'} height={'10%'} width={'10%'} />
                    </div>
                    :
                    <div>
                        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                        <span className="register-span">¿Todavía no te registraste? <Link to="/registrarme">¡Registrate!</Link></span>
                    </div>
                }
            </form>
        </div>
    )

}

export default Login;