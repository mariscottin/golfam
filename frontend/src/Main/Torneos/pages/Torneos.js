import React from 'react';
import Fixture from '../components/Fixture';
import NavTabs from '../../shared/NavTabs/NavTabs';
import Tab from '../../shared/NavTabs/Tab';

import './Torneos.css';

//STATIC TOURNAMENTS DATA!! FETCH FROM DB!!
const DUMMY_TOURNAMENTS =
    [
        {
            id: 11111,
            date: '12/03/2020',
            name: 'Torneo los Teros',
            mod: 'Medal Play',
            cat: '0-36',
            state: 'Abierto'
        },
        {
            id: 11112,
            date: '13/03/2020',
            name: 'Torneo los Patos',
            mod: 'Fourball Americana',
            cat: '0-36',
            state: 'Abierto'
        },
        {
            id: 11113,
            date: '19/03/2020',
            name: 'Torneo las Palomas',
            mod: 'Laguneada',
            cat: '0-18, 18-36',
            state: 'Cerrado'
        },
        {
            id: 11114,
            date: '20/03/2020',
            name: 'Gran Premio',
            mod: 'Medal Play',
            cat: 'Scratch, 0-9, 10-16',
            state: 'Cerrado'
        },
        {
            id: 11115,
            date: '26/03/2020',
            name: 'Sweepstake',
            mod: 'Medal Play',
            cat: '0-36',
            state: 'Cerrado'
        }
    ]
  

const Torneos = () => {
    return(
        <div>
            <div>
                <NavTabs>
                    <Tab to={`/torneos`} title='Fixture' active/>
                    <Tab to={`/torneos/resultados`} title='Resultados'/>
                </NavTabs>
                <div className="tab-content torneos__container">
                    <div className="tab-pane fade show active">
                        <Fixture torneos={DUMMY_TOURNAMENTS}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Torneos;