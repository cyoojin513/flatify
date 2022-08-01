// import './App.css';
import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './Home';
import Library from './Library';
import Search from './Search';
import NavBar from './NavBar';



function App() {
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
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

{/* <NavBar/>
<Switch>
  <Route>
    <Library/>
  </Route>
  <Route>
    <Search/>
  </Route>
  <Route>
    <Home/>
  </Route>
</Switch> */}