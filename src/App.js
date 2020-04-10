import React, { cloneElement } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';
import IPhone from './pages/products/IPhone';
import MacBookPro from './pages/products/MacBookPro';
import Watch from './pages/products/Watch';
import Login from './pages/Login';
import Logout from './pages/Logout';

const transitionDuration = 700; // milliseconds

const transitionGroupChildFactory = child => {
  return cloneElement(child, {
    className: ''
  });
}

// Add class to setup page-specific entering animations.
const cssTransitionEnter = elem => elem.classList.add('appear');

// Remove class so that entering animations begin.
const cssTransitionEntering = elem => elem.classList.remove('appear');

const AppRoutes = withRouter(({ location }) => {
  return (
    <TransitionGroup childFactory={transitionGroupChildFactory} className="product-page-container">
      <CSSTransition key={location.key} appear={true} timeout={transitionDuration} classNames="cross-fade" onEnter={cssTransitionEnter} onEntering={cssTransitionEntering}>
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
