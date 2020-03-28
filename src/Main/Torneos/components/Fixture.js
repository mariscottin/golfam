import React from 'react';
import { Link } from 'react-router-dom';
import FixtureFilters from './FixtureFilters';

import './Fixture.css';

const Fixture = ({ torneos }) => {
    
    return(
        <div className="fixture">
            <div className="fixture-controls container">
                <FixtureFilters />
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
                                <tr key={torneo.id}>
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