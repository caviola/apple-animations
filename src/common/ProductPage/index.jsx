import React from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../PageHeader';

const ProductPage = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <PageHeader activePath={location.pathname} />
      {children}
    </>
  );
};

export default ProductPage;
