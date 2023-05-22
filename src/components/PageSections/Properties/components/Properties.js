import React, { useContext } from 'react';
import PropertyCard from './PropertyCard';
import Pagination from '../../../Pagination';
import { PropertiesContext } from '../../../../context/properties/PropertiesContext';
import AdvancedSearch from '../../../Form/AdvancedSearch';

const Properties = () => {
  const { contextData } = useContext(PropertiesContext);
  const {
    properties,
    setProperties,
    page,
    totalPages,
    handlePageChange,
    isLoading,
    notFoundMsg,
  } = contextData;

  return (
    <div className="flex relative flex-col w-[100%]">
      <div className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-4/5 bg-gray-200 mb-48">
          <ul>
            {properties.map((character) => (
              <PropertyCard key={character.id} data={character} />
            ))}
          </ul>

          <div className="bg-red-500">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>

        <div className="w-full md:w-1/5 bg-white border ml-0 xl:ml-2">
          <AdvancedSearch {...{ setProperties }} />
        </div>
      </div>
    </div>

    // <div>
    //   <h2>Todas las Propiedades</h2>
    //   {isLoading && <p>cargando todos los resultados...</p>}
    //   {notFoundMsg && <p>{notFoundMsg}</p>}
    //   <ul
    //   // className={`${
    //   //   isGrid
    //   //     ? 'grid grid-cols-1 sm:grid-cols-3 gap-4 p-2'
    //   //     : 'flex flex-col gap-4 p-2'
    //   // }`}
    //   >
    //     {properties.map((character) => (
    //       <PropertyCard key={character.id} data={character} />
    //     ))}
    //   </ul>

    //   {/* ADVANCED SEARCH FORM */}
    //   <AdvancedSearch {...{ setProperties }} />

    //   {/* PROPERTIES PAGINATION */}
    //   <Pagination
    //     currentPage={page}
    //     totalPages={totalPages}
    //     onPageChange={handlePageChange}
    //   />
    // </div>
  );
};

export default Properties;
