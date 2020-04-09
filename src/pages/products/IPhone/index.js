import React from 'react';
import PageHeader from '../../../common/PageHeader';

const IPhone = ({ match }) => {
  return (
    <>
      <PageHeader activePath={match.path} />
    </>
  );
}

export default IPhone;