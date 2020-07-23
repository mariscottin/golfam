import React from 'react';
import { Link } from 'react-router-dom';
import FixtureFilters from './FixtureFilters';
import Table from 'react-bootstrap/Table';

import './Fixture.css';

const Fixture = ({ torneos }) => {


    return (
        <div className="fixture">
            <div className="fixture-controls container">
                <FixtureFilters />
            </div>
            {torneos.length === 0 &&
                <div className="center mt-3">No se encontraron torneos para el club seleccionado</div>
            }
            {torneos.length > 0 &&
                <Table responsive striped bordered>
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Torneo</th>
                            <th scope="col">Modalidad</th>
                            <th scope="col">Categorías</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Inscripción</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            torneos.map(tournament => {
                                return (
                                    <tr key={tournament.id}>
                                        <td title={tournament.date.round1}>
                                            {tournament.date.round1}
                                        </td>
                                        <td title={tournament.name}>
                                            {tournament.name}
                                        </td>
                                        <td title={`${tournament.type}-${tournament.subtype}`}>
                                            {tournament.type}-{tournament.subtype}
                                        </td>
                                        <td>
                                            {tournament.categories.cab.selected &&
                                                <p>
                                                    Caballeros: {tournament.categories.cab.cat.map(
                                                    (c, i) => {
                                                        return (
                                                            <span key={i}>{c}; </span>
                                                        )
                                                    }
                                                )}
                                                </p>
                                            }
                                            {tournament.categories.dam.selected &&
                                                <p>
                                                    Damas: {tournament.categories.dam.cat.map(
                                                    (c, i) => {
                                                        return (
                                                            <span key={i}>{c}; </span>
                                                        )
                                                    }
                                                )}
                                                </p>
                                            }
                                            {tournament.categories.mix.selected &&
                                                <p>
                                                    Mixto: {tournament.categories.mix.cat.map(
                                                    (c, i) => {
                                                        return (
                                                            <span key={i}>{c}; </span>
                                                        )
                                                    }
                                                )}
                                                </p>
                                            }
                                        </td>
                                        <td title={tournament.status}>
                                            {tournament.status}
                                        </td>
                                        {new Date(`${tournament.inscriptionDate} ${tournament.inscriptionTime}`) > new Date() ?
                                            <td title={`${tournament.inscriptionDate} - ${tournament.inscriptionTime}`}>
                                                {`${tournament.inscriptionDate} - ${tournament.inscriptionTime}hs`}
                                            </td>
                                            :
                                            <td title='Inscripción Abierta'>
                                                <Link to={`torneos/inscripcion/${tournament.id}`}>Inscripción Abierta</Link>
                                            </td>

                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            }
        </div>
    )
}

export default Fixture;