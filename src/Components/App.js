// import './App.css';
import React, {useEffect, useState} from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './Home';
import Library from './Library';
import Search from './Search';
import NavBar from './NavBar';


function App() {
  const [songs, setSongs] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:3000/songs`)
      .then(r => r.json())
      .then(jsonSongs => setSongs(jsonSongs))
  }, [])


  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path ="/library">
          <Library/>
        </Route>
        <Route path ="/search">
          <Search/>
        </Route>
        <Route exact path ="/">
          <Home songs={songs}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;