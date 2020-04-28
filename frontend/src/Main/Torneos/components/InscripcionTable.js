import React from 'react';
import Table from 'react-bootstrap/Table'

import './InscripcionTable.css';


const InscripcionTable = () => {
    return (
        <div className="inscripcion-table">
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
                    <tr>
                        <th>7:37</th>
                        <td>Disponible</td>
                        <td>Disponible</td>
                        <td>Disponible</td>
                        <td>Disponible</td>
                    </tr>
                    <tr>
                        <th>7:46</th>
                        <td>Disponible</td>
                        <td>Disponible</td>
                        <td>Disponible</td>
                        <td>Disponible</td>
                    </tr>
                    <tr>
                        <th>7:55</th>
                        <td>Disponible</td>
                        <td>Disponible</td>
                        <td>Disponible</td>
                        <td>Disponible</td>
                    </tr>
                    <tr>
                        <th>8:04</th>
                        <td>Disponible</td>
                        <td>Disponible</td>
                        <td>Disponible</td>
                        <td>Disponible</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default InscripcionTable;