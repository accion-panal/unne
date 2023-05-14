import React, { useState, useContext } from 'react';
import { PropertiesContext } from '../../context/properties/PropertiesContext';
import PropertyCard from '../PageSections/Properties/components/PropertyCard';

const Pagination = ({ properties }) => {
  const { contextData } = useContext(PropertiesContext);
  const [, , , , itemsPerPage, ,] = contextData;
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllPages, setShowAllPages] = useState(false);

  const propertiesPerPage = itemsPerPage; // 10
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;

  const currentProperties = properties.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const getPageNumbers = () => {
    const pageNumbers =
      totalPages <= 5 || showAllPages
        ? Array.from({ length: totalPages }, (_, i) => i + 1)
        : [
            1,
            currentPage <= 3 || currentPage >= totalPages - 2 ? '...' : null,
            ...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i).filter(
              (pageNumber) => pageNumber > 1 && pageNumber < totalPages
            ),
            currentPage >= totalPages - 2 ? '...' : null,
            totalPages,
          ].filter(Boolean);

    return pageNumbers;
  };

  return (
    <React.Fragment>
      <div className="relative mb-48">
        <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 g-4">
          {currentProperties?.reverse()?.map((property) => (
            <PropertyCard key={property?.id} data={property} />
          ))}
        </ul>
      </div>

      <div className="absolute bottom-0 flex justify-center items-center border border-gray-200 w-[100%] p-5">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-200'
          } p-3 border rounded-l-lg`}
        >
          Volver
        </button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={currentPage === pageNumber || pageNumber === '...'}
            className={`${
              currentPage === pageNumber || pageNumber === '...'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-black'
            } p-3 border`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400'
              : 'bg-gray-200'
          } p-3 border rounded-r-lg`}
        >
          Siguiente
        </button>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
