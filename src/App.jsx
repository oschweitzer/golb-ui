import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Auth/Login/login';
import Home from './components/Home/home';
import NavBar from './components/NavBar/nav-bar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
