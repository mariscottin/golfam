import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainNavigation from './shared/Navigation/MainNavigation';
import Home from './Landing/pages/Home';
import Inicio from './Main/Inicio/pages/Inicio';

import ReactLoading from 'react-loading';

// import Register from './Landing/pages/Register';
// import UserProfile from './Main/Profile/UserProfile/pages/UserProfile';
// import UserScorecards from './Main/Profile/Scorecards/pages/UserScorecards';
// import UserActivity from './Main/Profile/Actividad/pages/UserActivity';
// import ClubProfile from './Main/Profile/ClubProfile/pages/ClubProfile';
// import Torneos from './Main/Torneos/pages/Torneos';
// import Inscripcion from './Main/Torneos/pages/Inscripcion';
// import Resultados from './Main/Torneos/pages/Resultados';

import { AuthContext } from './shared/context/auth-context';

const Register = React.lazy(() => import('./Main/Profile/UserProfile/pages/UserProfile'));
const UserProfile = React.lazy(() => import('./Main/Profile/UserProfile/pages/UserProfile'));
const UserScorecards = React.lazy(() => import('./Main/Profile/Scorecards/pages/UserScorecards'));
const UserActivity = React.lazy(() => import('./Main/Profile/Actividad/pages/UserActivity'));
const ClubProfile = React.lazy(() => import('./Main/Profile/ClubProfile/pages/ClubProfile'));
const Torneos = React.lazy(() => import('./Main/Torneos/pages/Torneos'));
const Inscripcion = React.lazy(() => import('./Main/Torneos/pages/Inscripcion'));
const Resultados = React.lazy(() => import('./Main/Torneos/pages/Resultados'));

let logoutTimer;

const App = () => {

  const [token, setToken] = useState();
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(null);
  const [clubId, setClubId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userProfileImg, setUserProfileImg] = useState(null);


  const login = useCallback((uid, token, uname, uimg, cid, expirationDate) => {
    setToken(token);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
        userName: uname,
        userProfileImg: uimg,
        clubId: cid,
        expiration: tokenExpirationDate.toISOString()
      })
    );
    setUserId(uid);
    setUserName(uname);
    setUserProfileImg(uimg);
    setClubId(cid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setClubId(null);
    setUserName(null);
    setUserProfileImg(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
      login(storedData.userId, storedData.token, storedData.userName, storedData.userProfileImg, storedData.clubId, new Date(storedData.expiration));
    }
  }, [login]);


  const handlePostLike = async (id, num) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/like/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({
          user: userId,
          type: num
        })
      })
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/inicio" exact>
          <Inicio handleLike={handlePostLike} />
        </Route>

        <Route path="/perfil/:id" exact>
          <UserProfile />
        </Route>

        <Route path="/perfil/:id/tarjetas" exact>
          <UserScorecards />
        </Route>

        <Route path="/perfil/:id/actividad" exact>
          <UserActivity handleLike={handlePostLike} />
        </Route>

        <Route path="/club/:id" exact>
          <ClubProfile />
        </Route>

        <Route path="/torneos" exact>
          <Torneos />
        </Route>

        <Route path="/torneos/resultados" exact>
          <Resultados />
        </Route>

        <Route path="/torneos/inscripcion/:id">
          <Inscripcion />
        </Route>

        <Redirect to="/inicio" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/registrarme" exact>
          <Register />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        userName: userName,
        userProfileImg: userProfileImg,
        clubId: clubId,
        login: login,
        logout: logout
      }}>
      <Router>
        <div className="App">
          <MainNavigation />
          <main>
            <Suspense fallback={<div className="absolute-center"><ReactLoading type={'spin'} color={'#5a945a'} width={80} height={80} /></div>}>
              {routes}
            </Suspense>
          </main>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
