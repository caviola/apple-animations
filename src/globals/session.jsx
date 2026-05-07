const FAKE_LOGIN_LATENCY = 1000; // milliseconds

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
    }, FAKE_LOGIN_LATENCY);
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

export { useAuthenticatedUser, login };
