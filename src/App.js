import React, { cloneElement } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import IPhone from './pages/products/IPhone';
import MacBookPro from './pages/products/MacBookPro';
import Watch from './pages/products/Watch';
import Login from './pages/Login';
import Logout from './pages/Logout';
import './App.scss';

const transitionGroupChildFactory = child => {
  return cloneElement(child);
}

const AppRoutes = withRouter(({ location }) => {
  return (
    <TransitionGroup childFactory={transitionGroupChildFactory} className="app-route-container">
      <CSSTransition key={location.key} timeout={700} classNames="slide-from-right" >
        <Switch location={location}>
          <Route exact path='/' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/iphone' component={IPhone} />
          <Route exact path='/macbook-pro' component={MacBookPro} />
          <Route exact path='/watch' component={Watch} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
