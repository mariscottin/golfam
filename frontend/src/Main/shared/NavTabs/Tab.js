import React from 'react';
import { Link } from 'react-router-dom';

import './Tab.css';

const Tab = props => {
    return ( 
        <Link to={props.to} className={`nav-item nav-link ${props.active && 'active'}`}>{props.title}</Link>
    )
}

export default Tab;