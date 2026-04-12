import React, { cloneElement } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./App.module.scss";
import IPhone from "./pages/products/IPhone";
import MacBookPro from "./pages/products/MacBookPro";
import Watch from "./pages/products/Watch";
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";
import { ProtectedRoute } from "./common/session";

const TRANSITION_DURATION = 700; // milliseconds

// When a page is about to be transitioned into view, we add a class
// so that page-specific animations are setup.
const cssTransitionEnter = (elem) => elem?.classList.add("appear");

// As soon as page starts transitioning into view, we remove the class
// so that entering animations begin.
const cssTransitionEntering = (elem) => elem?.classList.remove("appear");

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
function getTransitionClassNames(fromPath, toLocation) {
  if (toLocation.state?.transitionClass) {
    return toLocation.state.transitionClass;
  }

  if (toLocation.pathname === "/macbook-pro") {
    return fromPath === "/iphone" ? "cross-fade" : "slide-from-right";
  }

  if (toLocation.pathname === "/iphone") {
    return "slide-from-bottom";
  }

  return "cross-fade";
}

const AppRoutes = () => {
  const location = useLocation();
  const referer = location.state?.referer;
  const shouldAnimate =
    referer !== location.pathname && location.state?.animate;

  const transitionGroupChildFactory = (child) => {
    if (shouldAnimate) {
      // We were requested to animate the transition from one page to the other,
      // so setup the child element (CSSTransition) with the appropriate animation class.
      return cloneElement(child, {
        timeout: TRANSITION_DURATION,
        classNames: getTransitionClassNames(referer, location),
        appear: true,
        onEnter: cssTransitionEnter,
        onEntering: cssTransitionEntering,
      });
    }

    // No animation.
    return cloneElement(child, {
      timeout: 0,
      classNames: "no-anim",
      appear: false,
      onEnter: null,
      onEntering: null,
    });
  };

  return (
    <TransitionGroup
      childFactory={transitionGroupChildFactory}
      className={styles.container}
    >
      <CSSTransition key={location.key}>
        <Routes location={location}>
          <Route path="/" element={
            <Login />
          } />
          <Route path="/register" element={
            <RegistrationForm />
          } />
          <Route path="/iphone" element={
            <ProtectedRoute>
              <IPhone />
            </ProtectedRoute>
          } />
          <Route path="/macbook-pro" element={
            <ProtectedRoute>
              <MacBookPro />
            </ProtectedRoute>
          } />
          <Route path="/watch" element={
            <ProtectedRoute>
              <Watch />
            </ProtectedRoute>
          } />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
