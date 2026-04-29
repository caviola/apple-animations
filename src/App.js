import React, { cloneElement, createRef, useEffect, useRef } from "react";
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

/**
 * Given origin/destination paths, returns which class name to use for CSSTransition.
 * We use the previous path to determine the transition to use
 * when navigating to a new product page.
 * Bellow is the transition table that we're using. Rows are 'origin' paths
 * and columns are 'destination' paths.
 *
 * ```
 *               +----------+-------------+-------+
 *               | iPhone   | MacBook Pro | Watch |
 * +-------------+----------+-------------+-------+
 * | iPhone      |          | Fade        | Fade  |
 * | MacBook Pro | Slide Up |             | Fade  |
 * | Watch       | Slide Up | Slide Left  |       |
 * +-------------+----------+-------------+-------+
 * ```
 * In the above table we can see that, for example, the iPhone page always slides up,
 * and Watch always fades in.
 *
 * @param {string} fromPath
 * @param {string} toLocation
 */
function getTransitionClassName(fromPath, toLocation) {
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
  const transitionKey = location.key;

  const refs = useRef(new Map());

  const getNodeRef = (key) => {
    if (!refs.current.has(key)) {
      refs.current.set(key, createRef());
    }

    return refs.current.get(key);
  };

  const nodeRef = getNodeRef(transitionKey);

  // We need custom childFactory to override the `classNames` of the "exiting" page,
  // given that the way it entered may be different from the way it will exit (depends on the referer).
  // The only way to update the exiting page is through the childFactory,
  // as the exiting page exists only in a "detached state" in the TransitionGroup internal data.
  const transitionGroupChildFactory = (child) => {
    if (referer !== location.pathname && location.state?.animate) { // should animate?
      return cloneElement(child, {
        timeout: TRANSITION_DURATION,
        classNames: getTransitionClassName(referer, location)
      });
    }

    return cloneElement(child, {
      timeout: 0,
      classNames: "no-anim"
    });
  }

  return (
    <TransitionGroup className={styles.container} childFactory={transitionGroupChildFactory}>
      <CSSTransition key={transitionKey} nodeRef={nodeRef}>
        <div ref={nodeRef} className={styles.page}>
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
        </div>
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
