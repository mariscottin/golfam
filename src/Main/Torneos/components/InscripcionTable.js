import React from 'react';

import './InscripcionTable.css';


const InscripcionTable = ({ tournament }) => {
    return(
        <div className="inscripcion-table">
            <table className="table">
                    <thead>
                        <th scope="col">Horario</th>
                        <th scope="col">Jugador 1</th>
                        <th scope="col">Jugador 2</th>
                        <th scope="col">Jugador 3</th>
                        <th scope="col">Jugador 4</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">7:37</th>
                            <td>Disponible</td>
                            <td>Disponible</td>
                            <td>Disponible</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <th scope="row">7:46</th>
                            <td>Disponible</td>
                            <td>Disponible</td>
                            <td>Disponible</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <th scope="row">7:55</th>
                            <td>Disponible</td>
                            <td>Disponible</td>
                            <td>Disponible</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <th scope="row">8:04</th>
                            <td>Disponible</td>
                            <td>Disponible</td>
                            <td>Disponible</td>
                            <td>Disponible</td>
                        </tr>
                    </tbody>
            </table>
        </div>
    )
}

export default InscripcionTable;