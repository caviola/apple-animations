import React from 'react';
import PageHeader from '../../../common/PageHeader';

const Watch = ({ match }) => {
  return (
    <PageHeader activePath={match.path} />
  );
}

export default Watch;