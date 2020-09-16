import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import NavBar from './components/NavBar/navbar';

const Login = lazy(() => import('./components/Auth/Login/login'));

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
