import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const loginLatency = 1000; // milliseconds

/**
 * Simulate login operation that takes some time to complete.
 * Always returns resolved Promise.
 *
 * @param {string} email
 * @param {string} pwd
 */
// eslint-disable-next-line no-unused-vars
function login(email, pwd) {
  return new Promise(resolve => {
    setTimeout(() => {
      const user = {
        email,
      };

      window.sessionStorage.setItem('user', JSON.stringify(user));

      resolve(user);
    }, loginLatency);
  });
}

/**
 * Fake hook that returns the user in sessionStorage.
 */
function useAuthenticatedUser() {
  return JSON.parse(window.sessionStorage.getItem('user'));
}

/**
 * Renders 'children' if user is authenticated.
 * Otherwise redirect to login page with current route as referer
 * so that after login we are redirected to this route again.
 */
function ProtectedRoute({ children }) {
  const user = useAuthenticatedUser();
  const location = useLocation();

  return user ? children : <Navigate to="/" state={{ referer: location.pathname }} />;
}

export { ProtectedRoute, useAuthenticatedUser, login };
