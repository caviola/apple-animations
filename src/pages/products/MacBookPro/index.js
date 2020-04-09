import React from 'react';
import PageHeader from '../../../common/PageHeader';

const MacBookPro = ({ match }) => {
  return (
    <PageHeader activePath={match.path} />
  );
}

export default MacBookPro;