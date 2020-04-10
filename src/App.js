import React, { cloneElement, useRef, useEffect } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.scss";
import IPhone from "./pages/products/IPhone";
import MacBookPro from "./pages/products/MacBookPro";
import Watch from "./pages/products/Watch";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

const transitionDuration = 700; // milliseconds

// When a page is about to be transitioned into view, we add a class
// so that page-specific animations are setup.
const cssTransitionEnter = (elem) => elem.classList.add("appear");

// As soon as page starts transitioning into view, we remove the class
// so that entering animations begin.
const cssTransitionEntering = (elem) => elem.classList.remove("appear");

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

const AppRoutes = withRouter(({ location }) => {
  // We'll use the previous path to determine the transition to use
  // when navigating to a new product page.
  // Bellow is the transition table that we're using. Rows are 'origin' paths
  // and columns are 'destination' paths.
  //
  //               +----------+-------------+-------+
  //               | iPhone   | MacBook Pro | Watch |
  // +-------------+----------+-------------+-------+
  // | iPhone      |          | Fade        | Fade  |
  // | MacBook Pro | Slide Up |             | Fade  |
  // | Watch       | Slide Up | Slide Left  |       |
  // +-------------+----------+-------------+-------+
  //
  // In the above table we can see that, for example, the iPhone page always slides up.
  //
  const referer = usePrevious(location.pathname);

  // Used to determine which classNames to use in CSSTransition
  // depending on the origin/destination paths.
  const transitionGroupChildFactory = (child) => {
    let classNames;

    if (location.pathname === "/macbook-pro") {
      classNames = referer === "/iphone" ? "cross-fade" : "slide-from-right";
    } else if (location.pathname === "/iphone") {
      classNames = "slide-from-bottom";
    } else {
      classNames = "cross-fade";
    }

    return cloneElement(child, {
      classNames,
    });
  };

  return (
    <TransitionGroup
      childFactory={transitionGroupChildFactory}
      className="product-page-container"
    >
      <CSSTransition
        key={location.key}
        appear={true}
        timeout={transitionDuration}
        onEnter={cssTransitionEnter}
        onEntering={cssTransitionEntering}
      >
        <Switch location={location}>
          <Route exact path="/" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/iphone" component={IPhone} />
          <Route exact path="/macbook-pro" component={MacBookPro} />
          <Route exact path="/watch" component={Watch} />
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
};

export default App;
