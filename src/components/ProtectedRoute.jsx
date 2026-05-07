import { Navigate, useLocation } from 'react-router-dom';
import { useAuthenticatedUser } from '../globals/session';

/**
 * Renders 'children' if user is authenticated.
 * Otherwise redirect to login page with current route as referer
 * so that after login we are redirected to this route again.
 */
export default function ProtectedRoute({ children }) {
  const user = useAuthenticatedUser();
  const location = useLocation();

  if (user) {
    return children;
  }

  // At this point user is not authenticated and we want to redirect to login page.
  // But since we're using PageTransitionGroup and both the exiting (this ProtectedRoute)
  // and the entering pages (Login) are kept in the DOM until the transition is finished,
  // this component would be rerendered and redirect to '/' again while already at '/'.
  // That would cause an infinite loop of redirects in the test suites
  // which are using `createMemoryRouter`.
  // In the browser the referer would be lost and the user would be redirected to '/'
  // instead of the original ProtectedPage after login.
  // So we render/do nothing if already at '/'.
  if (location.pathname === '/') {
    return null;
  }

  return <Navigate to="/" replace state={{ referer: location.pathname }} />;
}
