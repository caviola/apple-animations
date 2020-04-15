import React, { cloneElement } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import IPhone from "./pages/products/IPhone";
import MacBookPro from "./pages/products/MacBookPro";
import Watch from "./pages/products/Watch";
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";
import { ProtectedRoute } from "./common/session";
import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
  app: {
    minHeight: "100vh",
    position: "relative",
    overflowX: "hidden",
    overflowY: "scroll",
  },

  slideFromRightEnter: {
    transform: "translateX(100%)",
    transition: ".7s all",
  },

  slideFromRightEnterActive: {
    transform: "translateX(0)",
  },

  slideFromRightExit: {
    transform: "translateX(0)",
    transition: ".7s all",
  },

  slideFromRightExitActive: {
    transform: "translateX(-100%)",
  },

  slideFromBottomEnter: {
    transform: "translateY(100%)",
    transition: ".7s all",
  },

  slideFromBottomEnterActive: {
    transform: "translateY(0)",
  },

  slideFromBottomExit: {
    transform: "translateY(0)",
    transition: ".7s all",
  },

  slideFromBottomExitActive: {
    transform: "translateY(-100%)",
  },

  crossFadeEnter: {
    opacity: 0,
    transition: ".7s all",
  },

  crossFadeEnterActive: {
    opacity: 1,
  },

  crossFadeExit: {
    opacity: 1,
    transition: ".7s all",
  },

  crossFadeExitActive: {
    opacity: 0,
  },

  noAnimEnter: {
    display: "block",
  },

  noAnimExit: {
    display: "none",
  },

  scaleDownEnter: {
    transform: "scale(2)",
    transition: ".7s all",
  },

  scaleDownEnterActive: {
    transform: "scale(1)",
  },

  scaleDownExit: {
    display: "none",
  },
});

const transitionDuration = 700; // milliseconds

// When a page is about to be transitioned into view, we add a class
// so that page-specific animations are setup.
function cssTransitionEnter(elem) {
  return elem && elem.classList.add("appear");
}

// As soon as page starts transitioning into view, we remove the class
// so that entering animations begin.
function cssTransitionEntering(elem) {
  return elem && elem.classList.remove("appear");
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
function getTransitionClassNames(fromPath, toLocation) {
  if (toLocation.state.transitionClass) {
    return toLocation.state.transitionClass;
  }

  const crossFade = {
    enter: css(styles.crossFadeEnter),
    enterActive: css(styles.crossFadeEnterActive),
    exit: css(styles.crossFadeExit),
    exitActive: css(styles.crossFadeExitActive),
  };

  if (toLocation.pathname === "/macbook-pro") {
    return fromPath === "/iphone"
      ? crossFade
      : {
          enter: css(styles.slideFromRightEnter),
          enterActive: css(styles.slideFromRightEnterActive),
          exit: css(styles.slideFromRightExit),
          exitActive: css(styles.slideFromRightExitActive),
        };
  }

  if (toLocation.pathname === "/iphone") {
    return {
      enter: css(styles.slideFromBottomEnter),
      enterActive: css(styles.slideFromBottomEnterActive),
      exit: css(styles.slideFromBottomExit),
      exitActive: css(styles.slideFromBottomExitActive),
    };
  } else {
    return crossFade;
  }
}

const AppRoutes = withRouter(function ({ location }) {
  const referer = location.state && location.state.referer;

  function transitionGroupChildFactory(child) {
    if (
      referer !== location.pathname &&
      location.state &&
      location.state.animate
    ) {
      // We were requested to animate the transition from one page to the other,
      // so setup the child element (CSSTransition) with the appropriate animation class.
      return cloneElement(child, {
        timeout: transitionDuration,
        classNames: getTransitionClassNames(referer, location),
        appear: true,
        onEnter: cssTransitionEnter,
        onEntering: cssTransitionEntering,
      });
    } else {
      // No animation.
      return cloneElement(child, {
        timeout: 0,
        appear: false,
        onEnter: null,
        onEntering: null,
        classNames: {
          enter: css(styles.noAnimEnter),
          exit: css(styles.noAnimExit),
        },
      });
    }
  }

  return (
    <TransitionGroup
      childFactory={transitionGroupChildFactory}
      className={css(styles.app)}
    >
      <CSSTransition key={location.key} timeout={0}>
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

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
