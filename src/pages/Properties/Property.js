import React from 'react';
import { useParams } from 'react-router-dom';

const Property = () => {
  const { id } = useParams();

  return <div>Property: {id} </div>;
};

export default Property;
