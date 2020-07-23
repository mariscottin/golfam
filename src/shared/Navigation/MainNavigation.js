import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'

import NavLinks from './NavLinks';
import BackDrop from '../Backdrop/Backdrop';
import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';
import { AuthContext } from '../context/auth-context';

import './MainNavigation.css';

const MainNavigation = props => {
  const auth = useContext(AuthContext);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [searchBarData, setSearchBarData] = useState();

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  }


  const searchHandler = async (e) => {
    if(e.target.value.length > 0){
      try{
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/search/${e.target.value}`);
        const responseData = await response.json();
        setSearchBarData(responseData.users);
        if(!response.ok){
          throw new Error(responseData.message);
        }
      }catch(err){
        console.log(err);
      }
    }else{
      setSearchBarData(null);
    }
  }

  const handleSearchBarClick = () => {
    setSearchBarData(null);
  }

  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={closeDrawerHandler} />}
      {auth.isLoggedIn &&
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <div className="main-drawer__search-container">
              <input type="search" className="form-control" placeholder="Buscar..." />
            </div>
            <NavLinks />
          </nav>
        </SideDrawer>
      }
      <MainHeader>
        {auth.isLoggedIn &&
          <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
            <span />
            <span />
            <span />
          </button>
        }
        <div className="main-navigation__title">
          {auth.isLoggedIn ? <Link to="/inicio"><img src={Logo} alt="Logo Golfam" className="" /></Link> : <h1>GOLFAM</h1>}
        </div>

        {auth.isLoggedIn &&
          <React.Fragment>
            <div className="form-inline main-navigation__search-container">
              <input 
              type="search" 
              className="form-control" 
              placeholder="Buscar..." 
              onChange={searchHandler} 
              />
              {searchBarData &&
                <div className="search-results">
                  <ul>
                    {searchBarData.map(data => {
                      return(
                        <li key={data.matricula}>
                          <Link to={`/perfil/${data.id}`} onClick={handleSearchBarClick}>
                            <div className="search-results__img-container">
                              <img src={`${process.env.REACT_APP_ASSET_URL}/${data.profileImg}`} alt={`${data.name} ${data.lastName} Foto`} />
                            </div>
                            <div className="search-results__name-container">
                              {`${data.name} ${data.lastName} (${data.matricula})`}
                            </div>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              }
            </div>
            <nav className="main-navigation__header-nav">
              <NavLinks />
            </nav>
          </React.Fragment>
        }
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
