import React, { useContext } from 'react';
// import { PropertiesContext } from '../../../../context/properties/PropertiesContext';
import { Link } from 'react-router-dom';
import { truncateString, parseToCLPCurrency } from '../../../../utils';

const PropertyCard = ({ data, isList }) => {
  // const { contextData } = useContext(PropertiesContext);
  // const [
  //   statusId,
  //   companyId,
  //   totalItems,
  //   setTotalItems,
  //   itemsPerPage,
  //   setItemsPerPage,
  //   properties,
  //   setProperties,
  // ] = contextData;
  const { id, title, image, address, commune, city, price, types } = data;

  return (
    <div
      className={`${
        isList
          ? 'flex flex-col items-center bg-white border border-gray-200 rounded shadow md:flex-row'
          : 'w-full'
      } border rounded border-gray-200 hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out`}
    >
      <img
        className={isList ? 'xl:h-64' : 'rounded-t-lg'}
        src={image}
        alt={`top-img-${title}`}
      />

      <div className="p-5">
        <span className="uppercase text-orange-500">Cod: {id}</span>
        <h5 className="mb-2 h-20 text-lg xl:text-lg font-bold text-gray-800">
          {truncateString(title || 'Titulo de propiedad no registrado', 60)}
        </h5>

        <p className="mb-3 font-normal text-sm text-gray-400">
          {address}, {commune}, {city}
        </p>

        <p className="mb-3 font-normal text-orange-500 text-end">
          {types?.[0]}: {parseToCLPCurrency(price)}
        </p>

        <Link
          to={`/propiedades/${id}?statusId=1&companyId=1`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
        >
          Detalles
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
