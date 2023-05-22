import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { PropertiesContext } from '../../context/properties/PropertiesContext';
// import { SelectsContext } from '../../context/selects/SelectsContext';
import PropertiesServices from '../../services/PropertiesServices';

const SearchByCode = ({ propertyId, setPropertyId }) => {
  // const { contextData } = useContext(PropertiesContext);
  // const { contextDataSelects } = useContext(SelectsContext);
  // const [filterSearchEntry, ...restSelects] = contextDataSelects;
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
  const [loading, setLoading] = useState(false);
  const [notFoundMsg, setNotFoundMsg] = useState('');

  const CLASSES =
    'block w-full my-4 text-gray-500 focus:outline-none bg-white rounded-full border border-gray-300';

  const handlePropertyId = (ev) => setPropertyId(Number(ev.target.value));

  // const handleSubmit = async (ev) => {
  //   ev.preventDefault();
  //   /** Building url path */
  //   const urlPaths = {
  //     operationType:
  //       filterSearchEntry?.operationType?.value === undefined
  //         ? ''
  //         : `&operationType=${filterSearchEntry?.operationType?.value}`,

  //     typeOfProperty:
  //       filterSearchEntry?.typeOfProperty?.value === undefined
  //         ? ''
  //         : `&typeOfProperty=${filterSearchEntry?.typeOfProperty?.value}`,

  //     installmentType:
  //       filterSearchEntry?.installmentType?.value === undefined
  //         ? ''
  //         : `&installment_type=${filterSearchEntry?.installmentType?.value}`,

  //     region:
  //       filterSearchEntry?.region?.label === undefined
  //         ? ''
  //         : `&region=${filterSearchEntry?.region?.label}`,

  //     commune:
  //       filterSearchEntry?.commune?.label === undefined
  //         ? ''
  //         : `&commune=${filterSearchEntry?.commune?.label}`,

  //     surfaceM2:
  //       filterSearchEntry?.surfaceM2 === undefined
  //         ? ''
  //         : `&surface_m2=${filterSearchEntry?.surfaceM2}`,

  //     minPrice:
  //       filterSearchEntry?.minPrice === undefined
  //         ? ''
  //         : `&min_price=${filterSearchEntry?.minPrice}`,

  //     maxPrice:
  //       filterSearchEntry?.maxPrice === undefined
  //         ? ''
  //         : `&max_price=${filterSearchEntry?.maxPrice}`,

  //     bedrooms:
  //       filterSearchEntry?.bedrooms?.value === undefined
  //         ? ''
  //         : `&bedrooms=${filterSearchEntry?.bedrooms?.value}`,

  //     bathrooms:
  //       filterSearchEntry?.bathrooms?.value === undefined
  //         ? ''
  //         : `&bathrooms=${filterSearchEntry?.bathrooms?.value}`,

  //     coveredParkingLots:
  //       filterSearchEntry?.coveredParkingLots?.value === undefined
  //         ? ''
  //         : `&covered_parking_lots=${filterSearchEntry?.coveredParkingLots?.value}`,
  //   };

  //   const url = `${urlPaths?.operationType}${urlPaths?.typeOfProperty}${urlPaths?.installmentType}${urlPaths?.region}${urlPaths?.commune}${urlPaths?.surfaceM2}${urlPaths?.minPrice}${urlPaths?.maxPrice}${urlPaths?.bedrooms}${urlPaths?.bathrooms}${urlPaths?.coveredParkingLots}`;

  //   try {
  //     setLoading(true);
  //     setNotFoundMsg('');
  //     // setProperties([]);
  //     const [response, metaData] = await PropertiesServices.getProperties(
  //       // statusId,
  //       // companyId,
  //       url
  //     );
  //     // setProperties(response.length > 0 ? response : []);
  //     setLoading(false);
  //     setNotFoundMsg(response.length > 0 ? '' : 'Propiedades no encontradas');
  //   } catch (error) {
  //     console.error('Se produjo un error:', error);
  //   }

  //   console.log('Buscando... propiedad por codigo');
  // };

  return (
    <Fragment>
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="number"
            id="search-property"
            value={propertyId}
            onChange={handlePropertyId}
            className={`${CLASSES} p-3 pl-10 text-MD`}
            placeholder="Código: 00001"
          />

          <button
            // onClick={handleSubmit}
            className="text-white absolute pt-2 top-[0px] right-[1px] bottom-[0px] bg-gray-400 hover:bg-gray-500 py-2.5 px-4 xl:px-7 rounded-r-full"
          >
            Buscar propiedad
          </button>

          {/* <Link
            to={`/propiedades/${propertyId}?statusId=${statusId}&companyId=${companyId}`}
            className="text-white absolute pt-3 top-[0px] right-[1px] bottom-[0px] bg-gray-400 hover:bg-gray-500 py-2.5 px-4 xl:px-7 rounded-r-full"
          >
            Buscar
          </Link> */}
        </div>
      </form>
    </Fragment>
  );
};

export default SearchByCode;
