import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { navigationRoutes } from '../data/routes';

const AppRoutes = () => {
  return (
    <Routes>
      {navigationRoutes.map(({ id, name, path, element }) => (
        <Route key={id} name={name} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
