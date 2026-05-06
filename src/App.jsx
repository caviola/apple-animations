import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IPhone from './pages/products/IPhone';
import MacBookPro from './pages/products/MacBookPro';
import Watch from './pages/products/Watch';
import Login from './pages/Login';
import RegistrationForm from './pages/RegistrationForm';
import { ProtectedRoute } from './common/session';
import PageTransitionGroup from './common/PageTransitionGroup';
import './App.module.scss';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PageTransitionGroup />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: 'register',
          element: <RegistrationForm />,
        },
        {
          path: 'iphone',
          element: (
            <ProtectedRoute>
              <IPhone />
            </ProtectedRoute>
          ),
        },
        {
          path: 'macbook-pro',
          element: (
            <ProtectedRoute>
              <MacBookPro />
            </ProtectedRoute>
          ),
        },
        {
          path: 'watch',
          element: (
            <ProtectedRoute>
              <Watch />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ],
  { initialEntries: [{ pathname: '/' }] }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
