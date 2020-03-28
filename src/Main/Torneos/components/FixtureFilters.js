import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import './FixtureFilters.css';

const FixtureFilters = props => {
    return(
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
                <label forhtml="filterFixture"><FontAwesomeIcon icon={faFilter} />Filtros:</label>
                <select id="filterFixture">
                    <option></option>
                    <option>Filtro 1</option>
                    <option>Filtro 2</option>
                    <option>Filtro 3</option>
                </select>
            </div>
        </div>
    )
}

export default FixtureFilters;