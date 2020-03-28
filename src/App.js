import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainNavigation from './shared/Navigation/MainNavigation';
import Home from './Landing/pages/Home';
import Register from './Landing/pages/Register';
import Inicio from './Main/Inicio/pages/Inicio';
import UserProfile from './Main/Profile/UserProfile/pages/UserProfile';
import UserScorecards from './Main/Profile/Scorecards/pages/UserScorecards';
import Torneos from './Main/Torneos/pages/Torneos';
import Inscripcion from './Main/Torneos/pages/Inscripcion';
import Resultados from './Main/Torneos/pages/Resultados';

const App = () => {

  //Once authenticated, pass the current user to profile
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const currentUser =
    {
        id: 123456,
        name: "Nicolas",
        lastName: "Mariscotti",
        matricula: 113113,
        club: "Club Nautico San Isidro",
        age: 26,
        handicap: 5.9,
        country: "Argentina",
        profileImg: 'https://imagizer.imageshack.com/img921/627/FLY9pC.jpg',
        followers: 12932,
        following: 1993
    }

    const onLoginHandler = (isLogin) => {
      setIsLoggedIn(isLogin);
    }


  return (
    <Router>
      <div className="App">
        <MainNavigation currentUser={currentUser} isLoggedIn={isLoggedIn}/>
        <main>
          <Switch>
              <Route path="/" exact>
                <Home onLoginHandler={onLoginHandler}/>
              </Route>
            
              <Route path="/registrarme">
                <Register />
              </Route>

              <Route path="/inicio">
                <Inicio currentUser={currentUser} />
              </Route>

              <Route path="/perfil/:id" exact>
                <UserProfile currentUser={currentUser} />
              </Route>

              <Route path="/perfil/:id/tarjetas" exact>
                <UserScorecards currentUser={currentUser} />
              </Route>

              <Route path="/torneos" exact>
                <Torneos />
              </Route>

              <Route path="/torneos/resultados">
                <Resultados />
              </Route>

              <Route path="/torneos/inscripcion/:id">
                <Inscripcion />
              </Route>

              <Redirect to="/" />
            
          </Switch>

        </main>
      </div>
    </Router>
  );
}

export default App;
