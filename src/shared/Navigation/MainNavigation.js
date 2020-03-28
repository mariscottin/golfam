import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'

import NavLinks from './NavLinks';
import BackDrop from '../Backdrop/Backdrop';
import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';

import './MainNavigation.css';

const MainNavigation = props => {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  }
  
  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={closeDrawerHandler}/>}
      {props.isLoggedIn &&
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      }
      <MainHeader>
        {props.isLoggedIn &&
          <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
            <span />
            <span />
            <span />
          </button>
        }
        <div className="main-navigation__title">
          {props.isLoggedIn ? <Link to="/inicio"><img src={Logo} alt="Logo Golfam" className=""/></Link> : <h1>GOLFAM</h1>}
        </div>
        {props.isLoggedIn && 
          <nav className="main-navigation__header-nav">
            <NavLinks currentUserId={props.currentUser.id} />
          </nav>
        }
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
