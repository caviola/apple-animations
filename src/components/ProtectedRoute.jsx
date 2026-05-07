import { Navigate } from 'react-router-dom';
import { useAuthenticatedUser } from '../globals/session';

/**
 * Renders 'children' if user is authenticated.
 * Otherwise redirect to login page with current route as referer
 * so that after login we are redirected to this route again.
 */
export default function ProtectedRoute({ children }) {
  const user = useAuthenticatedUser();
  return user ? children : <Navigate to="/" replace />;
}
