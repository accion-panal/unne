import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { iconsList } from '../Icons';

const PropertiesTop = ({
  totalItems,
  itemsPerPage,
  isGrid,
  setIsGrid,
  isList,
  setIsList,
  properties,
}) => {
  const { pathname } = useLocation();
  const { BsFillGridFill, FaThList, FaMapMarkerAlt } = iconsList;

  const getTitle = (pathname) => {
    switch (pathname) {
      case '/propiedades':
        return 'Propiedades';
      case '/soy-inversionista/unidades-nueva':
        return 'Unidades nuevas';
      default:
        return 'Unne';
    }
  };

  useEffect(() => {
    document.title = getTitle(pathname);
  }, [pathname]);

  return (
    <div className=" py-5 px-3 border mb-4 bg-white w-full">
      <div className="flex justify-between items-center my-4">
        <div className="flex flex-col justify-start">
          <h1 className="text-2xl font-ligth">{getTitle(pathname)}</h1>
        </div>
        <div>
          <ul className="flex">
            <li
              onClick={() => {
                setIsGrid(true);
                setIsList(false);
              }}
              className={`${
                isGrid
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-500'
              } mx-1 p-2.5 cursor-pointer `}
            >
              <BsFillGridFill />
            </li>
            <li
              onClick={() => {
                setIsList(true);
                setIsGrid(false);
              }}
              className={`${
                isList
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 cursor-pointer text-gray-500'
              } mx-1 p-2.5 cursor-pointer`}
            >
              <FaThList />
            </li>

            <li className="mx-1 p-2.5 bg-gray-100 cursor-pointer text-gray-500">
              <Link to="/maps-propiedades">
                <FaMapMarkerAlt />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center bg-gray-50 text-gray-500">
        <small className="text-sm p-1 rounded">
          Encontradas: {properties?.length ?? 0}
        </small>
        <span className="text-gray-300 mx-3">|</span>
        <small className="text-sm p-1 rounded">
          Proyectos: {totalItems ?? 0}
        </small>
        <span className="text-gray-300 mx-3">|</span>
        <small className="text-sm p-1 rounded">
          Por página: {itemsPerPage ?? 0}
        </small>
      </div>
    </div>
  );
};

export default PropertiesTop;
