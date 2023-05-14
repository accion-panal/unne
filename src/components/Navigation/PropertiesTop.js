import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PropertiesTop = ({ totalItems, itemsPerPage }) => {
  const { pathname } = useLocation();

  function getTitle(pathname) {
    switch (pathname) {
      case '/propiedades':
        return 'Propiedades';
      case '/soy-inversionista/unidades-nueva':
        return 'Unidades nuevas';
      default:
        return 'Unne';
    }
  }

  useEffect(() => {
    document.title = getTitle(pathname);
  }, [pathname]);

  return (
    <div className=" py-5 px-3 border mb-4 bg-white w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-start">
          <h1 className="text-2xl font-ligth">{getTitle(pathname)}</h1>
        </div>
        <div>
          <ul>Navehacion</ul>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center bg-gray-50 text-gray-400">
        <small className="text-sm p-1 rounded">Proyectos: {totalItems}</small>
        <span className="text-gray-300 mx-3">|</span>
        <small className="text-sm p-1 rounded">
          Por página: {itemsPerPage}
        </small>
      </div>
    </div>
  );
};

export default PropertiesTop;
