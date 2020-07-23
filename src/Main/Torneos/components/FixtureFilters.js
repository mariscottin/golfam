import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import './FixtureFilters.css';

const FixtureFilters = props => {
    return(
        <div className="row">
            <div className="col-lg-6 fixture-control-club">
                <label forhtml="clubFixture">Club: </label>
                <select id="clubFixture"  className='form-control'> 
                    <option>Club Nautico San Isidro</option>
                    <option>Club 2</option>
                    <option>Club 3</option>
                    <option>Club 4</option>
                </select>
            </div>
            <div className="col-lg-6 fixture-control-filters">
                <label forhtml="filterFixture" ><FontAwesomeIcon icon={faFilter} />Filtros:</label>
                <select id="filterFixture"  className='form-control'>
                    <option>Sin Filtros</option>
                    <option>Filtro 1</option>
                    <option>Filtro 2</option>
                    <option>Filtro 3</option>
                </select>
            </div>
        </div>
    )
}

export default FixtureFilters;