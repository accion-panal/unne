import React from 'react';

const ContainerSimple = ({ title, desc }) => {
  return (
    <div className="mb-4">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
};

export default ContainerSimple;
