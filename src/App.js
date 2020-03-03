import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/frontend/home/Home';
import Register from './components/frontend/home/Register';
import Main from './components/frontend/main/Main';
import MyProfile from './components/frontend/main/MyProfile';
import Profile from './components/frontend/main/Profile';

import './App.css';

const App = ()=> {

  //Once authenticated, pass the current user to profile
  const [currentUser, setCurrentUser] = useState({
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
  const [users, setUsers] = useState([
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
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/registrarme" component={Register} />
          <Route path="/inicio" render={(props) => <Main {...props} currentUser={currentUser}/>} />
          <Route path="/miperfil" render={(props) => <MyProfile {...props} currentUser={currentUser}/>} />
          <Route path="/perfil/:id" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
