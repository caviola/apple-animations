import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.module.scss';
import IPhone from './pages/products/IPhone';
import MacBookPro from './pages/products/MacBookPro';
import Watch from './pages/products/Watch';
import Login from './pages/Login';
import RegistrationForm from './pages/RegistrationForm';
import { ProtectedRoute } from './common/session';
import PageTransitionGroup from './common/PageTransitionGroup';

export function AppRoutes() {
  return (
    <PageTransitionGroup>
      <Login path="/" />
      <RegistrationForm path="/register" />
      <ProtectedRoute path="/iphone">
        <IPhone />
      </ProtectedRoute>
      <ProtectedRoute path="/macbook-pro">
        <MacBookPro />
      </ProtectedRoute>
      <ProtectedRoute path="/watch">
        <Watch />
      </ProtectedRoute>
    </PageTransitionGroup>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
