import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo-2.png'
import '../../../App.css';

const RegisterForm = ()=> {

    const[name, setName] = useState();
    const[lastName, setLastName] = useState();
    const[matricula, setMatricula] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(!name && !lastName && !matricula && !email && !password){
            return
        }else if(!name || !lastName || !matricula || !email || !password){
            console.log("completar todos los campos");
        }else{
            console.log("Registrado con exito!");
        }
    }


    return(
        <div className="jumbotron">
            <img src={Logo} className="register-logo"/>
            <h3>Registrarme:</h3>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                    <label forhtml="registerName">Nombre: </label>
                    <input type="text" className="form-control" id="registerName" placeholder="Ingrese su nombre..." onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label forhtml="registerLastName">Apellido: </label>
                    <input type="text" className="form-control" id="registerLastName" placeholder="Ingrese su Apellido..." onChange={(e)=>setLastName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label forhtml="registerMatricula">Matrícula: </label>
                    <input type="text" className="form-control" id="registerMatricula" placeholder="Ingrese su Matricula..." onChange={(e)=>setMatricula(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label forhtml="registerEmail">Email: </label>
                    <input type="email" className="form-control" id="registerEmail" placeholder="Ingrese su Email..." onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label forhtml="registerPassword">Contraseña: </label>
                    <input type="password" className="form-control" id="registerPassword" placeholder="Cree una contraseña..." onChange={(e)=>setPassword(e.target.value)}/>     
                </div>
                <button type="submit" className="btn btn-primary">Registrarme</button>
                <Link to="/" className="btn btn-danger">Cancelar</Link>

            </form>
        </div>
    )
}

export default RegisterForm;