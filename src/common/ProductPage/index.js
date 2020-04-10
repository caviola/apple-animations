import React from 'react';
import { withRouter } from 'react-router-dom';
import PageHeader from '../PageHeader';
import './styles.scss';

const ProductPage = withRouter(({ match, children }) => {
  return (
    <div className="product-page">
      <PageHeader activePath={match.path} />
      {children}
    </div>
  );
});

export default ProductPage;