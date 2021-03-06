import React from 'react';
import Leaderboards from '../components/Leaderboards';
import NavTabs from '../../shared/NavTabs/NavTabs';
import Tab from '../../shared/NavTabs/Tab';


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
  

const Resultados = () => {
    return(
        <div>
            <div className="Main-body">
                <NavTabs>
                    <Tab to={`/torneos`} title='Fixture' />
                    <Tab to={`/torneos/resultados`} title='Resultados' active/>
                </NavTabs>
                <div className="tab-content">
                    <div className="tab-pane fade show active">
                        <Leaderboards torneos={DUMMY_TOURNAMENTS}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resultados;