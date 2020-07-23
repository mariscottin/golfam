import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context';
import ReactLoading from 'react-loading';
import DatePicker from 'react-datepicker';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactPasswordStrength from 'react-password-strength';

import Logo from '../../assets/img/logo-2.png';
import ImageUpload from '../../shared/Image-Upload/ImageUpload'
import './RegisterForm.css';

const RegisterForm = () => {
    const auth = useContext(AuthContext);
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [matricula, setMatricula] = useState();
    const [email, setEmail] = useState();
    const [birthDate, setBirthDate] = useState();
    const [password, setPassword] = useState();
    const [passwordsMatch, setPasswordsMatch] = useState();
    const [profileImg, setProfileImg] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !lastName || !matricula || !email || !birthDate || !password || !passwordsMatch || !profileImg) {
            setError('Por favor, complete todos los campos');
            setShowErrorModal(true);
        } else {
            try {
                const formData = new FormData();
                formData.append('name', name);
                formData.append('lastName', lastName);
                formData.append('matricula', matricula);
                formData.append('birthDate', birthDate.toString());
                formData.append('country', 'Argentina');
                formData.append('image', profileImg);
                formData.append('email', email);
                formData.append('password', password);
                setIsLoading(true);
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/register`, {
                    method: 'POST',
                    body: formData
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
                setShowErrorModal(true);
            }
        }
    }

    const onImageInput = (id, file, isValid) => {
        setProfileImg(file);
    }

    const handlePasswordChange = (pswd) => {
        setPassword(pswd.password);
    }

    const handleRepetePasswordChange = (e) => {
        if (e.target.value === '') {
            setPasswordsMatch(null)
        } else if (e.target.value === password) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    }

    const handleCloseErrorModal = () => setShowErrorModal(false);

    return (
        <div className="jumbotron">
            <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
                <Modal.Header closeButton>
                    <Modal.Title>¡Error!</Modal.Title>
                </Modal.Header>
                <Modal.Body>{error}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseErrorModal}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
            <img src={Logo} alt="golfam-logo" className="register-logo" />
            <h3 className="register-title">Registrarme:</h3>
            {isLoading
                ?
                <div className="register-loading-spinner__container">
                    <ReactLoading className="register-loading-spinner" type={'spin'} color={'#5a945a'} height={'20%'} width={'20%'} />
                </div>
                :
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-row">
                        <div className="col-lg mb-2">
                            <input type="text" className="form-control" id="registerName" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="col-lg mb-2">
                            <input type="text" className="form-control" id="registerLastName" placeholder="Apellido" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg mb-2">
                            <input type="email" className="form-control" id="registerEmail" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg mb-2">
                            <input type="text" className="form-control" id="registerMatricula" placeholder="Matricula" onChange={(e) => setMatricula(e.target.value)} />
                        </div>
                        <div className="col-lg mb-2">
                            <DatePicker
                                className="form-control"
                                selected={birthDate}
                                onChange={date => setBirthDate(date)}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                placeholderText="Fecha de Nacimiento"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg mb-2">
                            <ReactPasswordStrength
                                minLength={6}
                                minScore={2}
                                scoreWords={['muy débil', 'débil', 'aceptable', 'fuerte', 'muy fuerte']}
                                changeCallback={handlePasswordChange}
                                inputProps={{ name: "password_input", autoComplete: "off", className: "form-control", placeholder: "Cree una contraseña..." }}
                                tooShortWord={'muy corta'}
                            />
                        </div>
                    </div>
                    <div className="form-row repete-password__container">
                        <div className="col-lg">
                            <input
                                type="password"
                                className={`form-control ${passwordsMatch === false && 'passwords-not-match'} ${passwordsMatch === true && 'passwords-match'}`}
                                id="repetePassword"
                                placeholder="Repita la contraseña..."
                                onChange={handleRepetePasswordChange} />
                        </div>
                        <p
                            className={`repete-password-feedback  ${passwordsMatch === false && 'no-match'} ${passwordsMatch === true && 'match'}`}>
                            {passwordsMatch === false && 'Las contraseñas no coinciden'}
                            {passwordsMatch === true && 'Las contraseñas coinciden!'}

                        </p>
                    </div>
                    <div className="pick-profile-img__container">
                        <ImageUpload id="image" center onInput={onImageInput} />
                    </div>
                    <div className="register-buttons__container center">
                        <Link to="/inicio" className="btn btn-primary" onClick={handleSubmit}>Registrarme</Link>
                        <Link to="/" className="btn btn-danger">Cancelar</Link>
                    </div>

                </form>
            }
        </div>
    )
}

export default RegisterForm;