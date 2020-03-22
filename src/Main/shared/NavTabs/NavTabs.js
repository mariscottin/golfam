import React from 'react';

import './NavTabs.css';

const NavTabs = props => {
    return(
        <nav className="nav nav-tabs" id="nav-tab" role="tablist">
            {props.children}
        </nav>
    )
}

export default NavTabs;