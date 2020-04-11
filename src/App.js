import React, { cloneElement, useRef, useEffect } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.scss";
import IPhone from "./pages/products/IPhone";
import MacBookPro from "./pages/products/MacBookPro";
import Watch from "./pages/products/Watch";
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";
import { ProtectedRoute } from "./common/session";

const transitionDuration = 700; // milliseconds

// When a page is about to be transitioned into view, we add a class
// so that page-specific animations are setup.
const cssTransitionEnter = (elem) => elem && elem.classList.add("appear");

// As soon as page starts transitioning into view, we remove the class
// so that entering animations begin.
const cssTransitionEntering = (elem) => elem && elem.classList.remove("appear");

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

/**
 * Given origin/destination paths, returns which class name to use for CSSTransition.
 * We use the previous path to determine the transition to use
 * when navigating to a new product page.
 * Bellow is the transition table that we're using. Rows are 'origin' paths
 * and columns are 'destination' paths.
 *
 *               +----------+-------------+-------+
 *               | iPhone   | MacBook Pro | Watch |
 * +-------------+----------+-------------+-------+
 * | iPhone      |          | Fade        | Fade  |
 * | MacBook Pro | Slide Up |             | Fade  |
 * | Watch       | Slide Up | Slide Left  |       |
 * +-------------+----------+-------------+-------+
 *
 * In the above table we can see that, for example, the iPhone page always slides up,
 * and Watch always fades in.
 *
 * @param {string} fromPath
 * @param {string} toLocation
 */
const getTransitionClassNames = (fromPath, toLocation) => {
  if (toLocation.state.transitionClass) {
    return toLocation.state.transitionClass;
  }

  if (toLocation.pathname === "/macbook-pro") {
    return fromPath === "/iphone" ? "cross-fade" : "slide-from-right";
  }

  if (toLocation.pathname === "/iphone") {
    return "slide-from-bottom";
  } else {
    return "cross-fade";
  }
};

const AppRoutes = withRouter(({ location }) => {
  const referer = usePrevious(location.pathname);

  const transitionGroupChildFactory = (child) => {
    if (location.state && location.state.animate) {
      // We were requested to animate the transition from one page to the other,
      // so setup the child element (CSSTransition) with the appropriate animation class.
      return cloneElement(child, {
        timeout: transitionDuration,
        classNames: getTransitionClassNames(referer, location),
      });
    } else {
      // No animation.
      return cloneElement(child, {
        timeout: 0,
        classNames: "no-anim",
      });
    }
  };

  return (
    <TransitionGroup
      childFactory={transitionGroupChildFactory}
      className="product-page-container"
    >
      <CSSTransition
        key={location.key}
        appear={true}
        timeout={0}
        onEnter={cssTransitionEnter}
        onEntering={cssTransitionEntering}
      >
        <Switch location={location}>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={RegistrationForm} />
          <ProtectedRoute exact path="/iphone" component={IPhone} />
          <ProtectedRoute exact path="/macbook-pro" component={MacBookPro} />
          <ProtectedRoute exact path="/watch" component={Watch} />
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
