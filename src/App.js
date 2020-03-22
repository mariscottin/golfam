import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './shared/Navbar';
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
  const [currentUser] = useState({
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
  })

  //STATIC DATA --> THIS NEEDS TO BE FETCHED FROM DB
  const [users] = useState([
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
    },
    {
      id: 654321,
      name: "Guillermo",
      lastName: "Ferrari",
      matricula: 115115,
      club: "Club Nautico San Isidro",
      age: 27,
      handicap: '+1.0',
      country: "Argentina",
      profileImg: 'https://imagizer.imageshack.com/img923/9435/q28BmG.jpg',
      followers: 1023,
      following: 912
    },
    {
      id: 13243546,
      name: "Federico",
      lastName: "Prieto",
      matricula: 109537,
      club: "Club Nautico San Isidro",
      age: 33,
      handicap: '7.2',
      country: "Argentina",
      profileImg: 'https://imagizer.imageshack.com/img924/6154/QVl4IV.jpg',
      followers: 755,
      following: 892
    },
    {
      id: 64534231,
      name: "Ezequiel",
      lastName: "Diez Peña",
      matricula: 110736,
      club: "Club Nautico San Isidro",
      age: 32,
      handicap: '4.6',
      country: "Argentina",
      profileImg: 'https://imagizer.imageshack.com/img923/5321/d6FUTM.jpg',
      followers: 229,
      following: 596
    }
  ]);


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          <Route path="/" exact>
            <Home />
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
            <UserScorecards currentUser={currentUser}/>
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
      </div>
    </Router>
  );
}

export default App;
