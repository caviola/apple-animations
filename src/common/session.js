import React from "react";
import { Route, Redirect } from "react-router-dom";

const loginLatency = 1000; // milliseconds

/**
 * Simulate login operation that takes some time to complete.
 * Always returns resolved Promise.
 *
 * @param {string} email
 * @param {string} pwd
 */
const login = (email, pwd) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        email,
      };

      global.sessionStorage.setItem("user", JSON.stringify(user));

      resolve(user);
    }, loginLatency);
  });
};

/**
 * Fake hook that returns the user in sessionStorage.
 */
const useAuthenticatedUser = () => {
  return JSON.parse(global.sessionStorage.getItem("user"));
};

/**
 * Renders a route if user is authenticated.
 * Otherwise redirect to login page with current route as referer
 * so that after login we are redirected to this route again.
 *
 * @param {object} props
 */
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useAuthenticatedUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { referer: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

export { ProtectedRoute, useAuthenticatedUser, login };
