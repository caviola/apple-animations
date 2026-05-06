import { Navigate } from 'react-router-dom';

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
  try {
    return JSON.parse(window.sessionStorage.getItem('user'));
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return null;
  }
}

/**
 * Renders 'children' if user is authenticated.
 * Otherwise redirect to login page with current route as referer
 * so that after login we are redirected to this route again.
 */
function ProtectedRoute({ children }) {
  const user = useAuthenticatedUser();
  return user ? children : <Navigate to="/" replace />;
}

export { ProtectedRoute, useAuthenticatedUser, login };
