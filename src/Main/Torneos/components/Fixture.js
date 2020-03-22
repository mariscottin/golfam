import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './Fixture.css';

const Fixture = ({ torneos }) => {
    
    return(
        <div className="fixture">
            <div className="fixture-controls container">
                <div className="row">
                    <div className="col-lg-6 fixture-control-club">
                        <label forhtml="clubFixture">Seleccionar Club: </label>
                        <select id="clubFixture">
                            <option>Club Nautico San Isidro</option>
                            <option>Jockey Club de San Isidro</option>
                            <option>San Isidro Golf Club</option>
                        </select>
                    </div>
                    <div className="col-lg-6 fixture-control-filters">
                        <label forhtml="filterFixture"><FontAwesomeIcon icon={faFilter}/>Filtros:</label>
                        <select id="filterFixture">
                            <option></option>
                            <option>Filtro 1</option>
                            <option>Filtro 2</option>
                            <option>Filtro 3</option>
                        </select>
                    </div>
                </div>
            </div>
            <table className="table fixture-table">
                <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Torneo</th>
                        <th scope="col">Modalidad</th>
                        <th scope="col">Categorias</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        torneos.map(torneo => {
                            return(
                                <tr>
                                    {torneo.state==='Abierto' ? <td><Link to={`/torneos/inscripcion/${torneo.id}`}>{torneo.date}</Link></td> : <td>{torneo.date}</td>} 
                                    {torneo.state==='Abierto' ? <td title={torneo.name}><Link to={`/torneos/inscripcion/${torneo.id}`}>{torneo.name}</Link></td> : <td title={torneo.name}>{torneo.name}</td>}
                                    {torneo.state==='Abierto' ? <td><Link to={`/torneos/inscripcion/${torneo.id}`}>{torneo.mod}</Link></td> : <td>{torneo.mod}</td>} 
                                    {torneo.state==='Abierto' ? <td><Link to={`/torneos/inscripcion/${torneo.id}`}>{torneo.cat}</Link></td> : <td>{torneo.cat}</td>} 
                                    {torneo.state==='Abierto' ? <td><Link to={`/torneos/inscripcion/${torneo.id}`}>{torneo.state}</Link></td> : <td>{torneo.state}</td>} 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Fixture;