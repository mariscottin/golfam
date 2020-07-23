import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

import './InscripcionTable.css';


const InscripcionTable = ({ tournament, registeredHandler }) => {
    const [showModal, setShowModal] = useState(false); //First modal, where it asks how many players to register
    const [showInscriptionModal, setShowInscriptionModal] = useState(false); //Second modal, where the search bars show up
    const [selectedTime, setSelectedTime] = useState(); //Time selected to register in. Should it be SpotSelected???
    const [lineId, setLineId] = useState(); //The line ID selected by the user.
    const [freeSpots, setFreeSpots] = useState(); //Available spots in the line selected
    const [playersToRegister, setPlayersToRegister] = useState(); //How many players to register? Selected with the radio buttons
    const [playersFound, setPlayersFound] = useState(); //Players found in the backend with the searchbar
    const [searchingPlayer, setSearchingPlayer] = useState(); //1, 2, 3 or 4. Which player am I searching for?
    const [selectedPlayer1, setSelectedPlayer1] = useState();
    const [selectedPlayer2, setSelectedPlayer2] = useState();
    const [selectedPlayer3, setSelectedPlayer3] = useState();
    const [selectedPlayer4, setSelectedPlayer4] = useState();
    const [isLoading, setIsLoading] = useState(false);


    //Handle when user selects a spot to register on --> Open first modal with options of how many players to register
    const handleTimeSelect = (time, line, spotId) => {
        setSelectedTime(time); //Delete afterward, duplicate data
        setLineId(line);
        setShowModal(true);
        console.log(line);
        const freeSpots = line.spots.filter(spot => spot.status === 'free')
        setFreeSpots(freeSpots);
    }


    //Handle when first modal is passed (radio btn of how many players to registered is selected)
    const handleSelectedPlayers = () => {
        setShowModal(false);
        setShowInscriptionModal(true);
    }

    //Fetch golfista by ID in backend.
    //SHOULD FILTER FOR PLAYERS ONLY IN MY CLUB IF STATUS IS CLOSED
    const handleSearchGolfista = async (e, n) => {
        setSearchingPlayer(n);
        if (e.target.value === '') {
            setPlayersFound();
            return;
        }
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/golfistas/${e.target.value}`);
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setPlayersFound(responseData.golfistas)
        } catch (err) {
            console.log(err);
        }
    }

    //Change from searchbar to div with selected player in it. For all four players
    const selectPlayer = (num, player) => {
        if (num === 1) {
            setSelectedPlayer1({
                id: player.id,
                name: player.nombre,
                matricula: player.matricula,
                handicap: player.std
            });
            setPlayersFound(null);
            setSearchingPlayer('');
        }
        if (num === 2) {
            setSelectedPlayer2({
                id: player.id,
                name: player.nombre,
                matricula: player.matricula,
                handicap: player.std
            });
            setPlayersFound(null);
            setSearchingPlayer('');
        }
        if (num === 3) {
            setSelectedPlayer3({
                id: player.id,
                name: player.nombre,
                matricula: player.matricula,
                handicap: player.std
            });
            setPlayersFound(null);
            setSearchingPlayer('');
        }
        if (num === 4) {
            setSelectedPlayer4({
                id: player.id,
                name: player.nombre,
                matricula: player.matricula,
                handicap: player.std
            });
            setPlayersFound(null);
            setSearchingPlayer('');
        }
    }

    //Close first modal
    const closeModalHandler = () => {
        setShowModal(false);
        setPlayersToRegister();
        setLineId();
        setSelectedTime(); //Delete afterwards, duplicate data with LineId

    };

    //Close second modal and reset all states
    const closeInscriptionModal = () => {
        setShowInscriptionModal(false);
        setSelectedPlayer1();
        setSelectedPlayer2();
        setSelectedPlayer3();
        setSelectedPlayer4();
        setSearchingPlayer();
        setPlayersToRegister();
        setLineId();
        setSelectedTime(); //Delete afterwards, duplicate data with LineId
    }

    //When user clicks on "Aceptar" to register players on the second modal
    const handleRegisterPlayers = async () => {
        closeInscriptionModal();
        setIsLoading(true);

        let spots = [];

        //FETCH A CADA SPOT PARA VER SI EL GOLFISTA EXISTE EN GOLFAM O NO
        const findSpotToRegister = () => {
            let spot;
            console.log(lineId);
            for(let i = 0; i < 4; i++){
                if(lineId.spots[i].status === 'free'){
                    setLineId([...lineId.spots, lineId.spots[i].status = 'registered'])
                    spot = lineId.spots[i].id;
                    break;
                }
            }

            return spot;    
        }
        try {
            const p1Response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/matricula/${selectedPlayer1.matricula}`);
            const p1ResponseData = await p1Response.json();
            if (!p1Response.ok) {
                throw new Error(p1ResponseData.message);
            }
            if (p1ResponseData.length > 0) {
                spots.push({
                    player: {
                        golfistaId: p1ResponseData[0]._id,
                        matricula: p1ResponseData[0].matricula,
                        name: `${p1ResponseData[0].name} ${p1ResponseData[0].lastName}`,
                        handicap: p1ResponseData[0].handicap,
                        profileImg: p1ResponseData[0].profileImg
                    }, spotId: findSpotToRegister()
                });
            } else {
                spots.push({
                    player: {
                        golfistaId: selectedPlayer1.id,
                        matricula: selectedPlayer1.matricula,
                        name: selectedPlayer1.name,
                        handicap: selectedPlayer1.handicap
                    }, spotId: findSpotToRegister()
                });
            }
        } catch (err) {
            console.log(err);
        }

        //Second player
        if (playersToRegister > 1) {
            try {
                const p2Response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/matricula/${selectedPlayer2.matricula}`);
                const p2ResponseData = await p2Response.json();
                if (!p2Response.ok) {
                    throw new Error(p2ResponseData.message);
                }
                if (p2ResponseData.length > 0) {
                    spots.push({
                        player: {
                            golfistaId: p2ResponseData[0]._id,
                            matricula: p2ResponseData[0].matricula,
                            name: `${p2ResponseData[0].name} ${p2ResponseData[0].lastName}`,
                            handicap: p2ResponseData[0].handicap,
                            profileImg: p2ResponseData[0].profileImg
                        }, spotId: findSpotToRegister()
                    });
                } else {
                    spots.push({
                        player: {
                            golfistaId: selectedPlayer2.id,
                            matricula: selectedPlayer2.matricula,
                            name: selectedPlayer2.name,
                            handicap: selectedPlayer2.handicap,
                            profileImg: null
                        }, spotId: findSpotToRegister()
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }


        //Third player
        if (playersToRegister > 2) {
            try {
                const p3Response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/matricula/${selectedPlayer3.matricula}`);
                const p3ResponseData = await p3Response.json();
                if (!p3Response.ok) {
                    throw new Error(p3ResponseData.message);
                }
                if (p3ResponseData.length > 0) {
                    spots.push({
                        player: {
                            golfistaId: p3ResponseData[0]._id,
                            matricula: p3ResponseData[0].matricula,
                            name: `${p3ResponseData[0].name} ${p3ResponseData[0].lastName}`,
                            handicap: p3ResponseData[0].handicap,
                            profileImg: p3ResponseData[0].profileImg
                        }, spotId: lineId.spots[2].id
                    });
                } else {
                    spots.push({
                        player: {
                            golfistaId: selectedPlayer3.id,
                            matricula: selectedPlayer3.matricula,
                            name: selectedPlayer3.name,
                            handicap: selectedPlayer3.handicap,
                            profileImg: null
                        }, spotId: lineId.spots[2].id
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }
        //Fourth player
        if (playersToRegister > 3) {
            try {
                const p4Response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/matricula/${selectedPlayer4.matricula}`);
                const p4ResponseData = await p4Response.json();
                if (!p4Response.ok) {
                    throw new Error(p4ResponseData.message);
                }
                if (p4ResponseData.length > 0) {
                    spots.push({
                        player: {
                            golfistaId: p4ResponseData[0]._id,
                            matricula: p4ResponseData[0].matricula,
                            name: `${p4ResponseData[0].name} ${p4ResponseData[0].lastName}`,
                            handicap: p4ResponseData[0].handicap,
                            profileImg: p4ResponseData[0].profileImg
                        }, spotId: lineId.spots[3].id
                    });
                } else {
                    spots.push({
                        player: {
                            golfistaId: selectedPlayer4.id,
                            matricula: selectedPlayer4.matricula,
                            name: selectedPlayer4.name,
                            handicap: selectedPlayer4.handicap,
                            profileImg: null
                        }, spotId: lineId.spots[3].id
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }

        //Send request to register players!! Moment of truth!!
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tournaments/register/${tournament.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    time: lineId.time,
                    spots: spots
                })
            });
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message);
            }
            console.log(responseData);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
        registeredHandler();
        spots = [];
    }

    return (
        <React.Fragment>
            <Modal show={showModal} onHide={closeModalHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Inscripción a las {selectedTime}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h6>¿Cuántos lugares deseas inscribir en esta línea?</h6>
                        {freeSpots &&
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" onChange={(e) => setPlayersToRegister(e.target.value)} />
                                <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                            </div>
                            {freeSpots.length > 1 &&
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" onChange={(e) => setPlayersToRegister(e.target.value)} />
                                <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                            </div>
                            }
                            {freeSpots.length > 2 &&
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" onChange={(e) => setPlayersToRegister(e.target.value)} />
                                <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                            </div>
                            }
                            {freeSpots.length > 3 &&
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" onChange={(e) => setPlayersToRegister(e.target.value)} />
                                <label className="form-check-label" htmlFor="inlineRadio4">4</label>
                            </div>
                            }
                        </div>
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSelectedPlayers}>
                        Aceptar
                    </Button>
                    <Button variant="secondary" onClick={closeModalHandler}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showInscriptionModal} onHide={closeInscriptionModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Inscripción a las {selectedTime}, {playersToRegister} {playersToRegister > 1 ? 'lugares' : 'lugar'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group inscripcion-search-player">
                        <label htmlFor="player1">Jugador 1:</label>
                        <input type="search" className={`form-control ${selectedPlayer1 && 'player-was-selected'}`} id="player1" onChange={(e) => handleSearchGolfista(e, 1)} />
                        {(playersFound && searchingPlayer === 1) &&
                            <div className="players-search-result">
                                <ul>
                                    {playersFound.map(player => {
                                        return (
                                            <li key={player.matricula} onClick={() => selectPlayer(1, player)}>
                                                {player.nombre} ({player.matricula})
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        }
                        {selectedPlayer1 &&
                            <div className="selected-player">
                                {`${selectedPlayer1.name} (${selectedPlayer1.matricula})`}
                            </div>
                        }
                    </div>
                    {playersToRegister > 1 &&
                        <div className="form-group inscripcion-search-player">
                            <label htmlFor="player2">Jugador 2:</label>
                            <input type="search" className={`form-control ${selectedPlayer2 && 'player-was-selected'}`} id="player2" onChange={(e) => handleSearchGolfista(e, 2)} />
                            {(playersFound && searchingPlayer === 2) &&
                                <div className="players-search-result">
                                    <ul>
                                        {playersFound.map(player => {
                                            return (
                                                <li key={player.matricula} onClick={() => selectPlayer(2, player)}>
                                                    {player.nombre} ({player.matricula})
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            }
                            {selectedPlayer2 &&
                                <div className="selected-player">
                                    {`${selectedPlayer2.name} (${selectedPlayer2.matricula})`}
                                </div>
                            }
                        </div>
                    }
                    {playersToRegister > 2 &&
                        <div className="form-group inscripcion-search-player">
                            <label htmlFor="player3">Jugador 3:</label>
                            <input type="search" className={`form-control ${selectedPlayer3 && 'player-was-selected'}`} id="player3" onChange={(e) => handleSearchGolfista(e, 3)} />
                            {(playersFound && searchingPlayer === 3) &&
                                <div className="players-search-result">
                                    <ul>
                                        {playersFound.map(player => {
                                            return (
                                                <li key={player.matricula} onClick={() => selectPlayer(3, player)}>
                                                    {player.nombre} ({player.matricula})
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            }
                            {selectedPlayer3 &&
                                <div className="selected-player">
                                    {`${selectedPlayer3.name} (${selectedPlayer3.matricula})`}
                                </div>
                            }
                        </div>
                    }
                    {playersToRegister > 3 &&
                        <div className="form-group inscripcion-search-player">
                            <label htmlFor="player4">Jugador 4:</label>
                            <input type="search" className={`form-control ${selectedPlayer4 && 'player-was-selected'}`} id="player4" onChange={(e) => handleSearchGolfista(e, 4)} />
                            {(playersFound && searchingPlayer === 4) &&
                                <div className="players-search-result">
                                    <ul>
                                        {playersFound.map(player => {
                                            return (
                                                <li key={player.matricula} onClick={() => selectPlayer(4, player)}>
                                                    {player.nombre} ({player.matricula})
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            }
                            {selectedPlayer4 &&
                                <div className="selected-player">
                                    {`${selectedPlayer4.name} (${selectedPlayer4.matricula})`}
                                </div>
                            }
                        </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleRegisterPlayers}>
                        Aceptar
                    </Button>
                    <Button variant="secondary" onClick={closeInscriptionModal}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="inscripcion-table">
                {isLoading &&
                    <div className="register-loading-spinner__container">
                        <ReactLoading className="register-loading-spinner" type={'spin'} color={'#5a945a'} height={'20%'} width={'20%'} />
                    </div>
                }
                {!isLoading &&
                    <Table responsive striped bordered>
                        <thead>
                            <tr>
                                <th>Horario</th>
                                <th>Jug. 1</th>
                                <th>Jug. 2</th>
                                <th>Jug. 3</th>
                                <th>Jug. 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!tournament.registered &&
                                <div>Loading...</div>
                            }
                            {tournament.registered &&
                                tournament.registered.map((line, i) => {
                                    return (
                                        <tr key={i} className="time-row">
                                            <th>{line.time}</th>
                                            {line.spots.map((spot, i) => {
                                                return (
                                                    spot.status === 'free' ? <td key={i} className="td-disponible" onClick={() => handleTimeSelect(line.time, line, spot.id)}>Disponible</td>
                                                        :
                                                        spot.status === 'selected' ? <td key={i} className="td-inscribiendo">Inscribiendo</td>
                                                            :
                                                            <td key={i} className="td-registered">
                                                                <div className="registered-avatar__container">
                                                                    <div className="registered-avatar__img">
                                                                        {spot.profileImg ?
                                                                            <img src={`${process.env.REACT_APP_ASSET_URL}/${spot.profileImg}`} alt={`Foto ${spot.name}`} />
                                                                            :
                                                                            <img src={`${process.env.REACT_APP_ASSET_URL}/uploads/images/default.jpeg`} alt={`Foto ${spot.name}`} />
                                                                        }
                                                                    </div>
                                                                    <div className="registered-avatar__info">
                                                                        {spot.profileImg ?
                                                                        <Link to={`/perfil/${spot.golfistaId}`}>{spot.name}</Link>
                                                                        :
                                                                        <p className="registered-avatar__name">{spot.name}</p>
                                                                        }
                                                                        <p className="registered-avatar__matricula">{`(${spot.matricula})`}</p>
                                                                        <p className="registered-avatar__hcp">{`Hcp: ${spot.handicap}`}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                }
            </div>
        </React.Fragment>
    )
}

export default InscripcionTable;