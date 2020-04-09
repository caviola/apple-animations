import React from 'react';
import { withRouter } from 'react-router-dom';
import PageHeader from '../PageHeader';
import './styles.scss';

const ProductPage = withRouter(({ match }) => {
  return (
    <div className="product-page">
      <PageHeader activePath={match.path} />
    </div>    
  );
});

export default ProductPage;