import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IPhone from './pages/products/IPhone';
import MacBookPro from './pages/products/MacBookPro';
import Watch from './pages/products/Watch';
import Login from './pages/Login';
import Logout from './pages/Logout';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/iphone' component={IPhone} />
        <Route exact path='/macbook-pro' component={MacBookPro} />
        <Route exact path='/watch' component={Watch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
