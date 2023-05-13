import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ properties }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllPages, setShowAllPages] = useState(false);

  const propertiesPerPage = 10;
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
    <div>
      <ul>
        {currentProperties?.reverse()?.map((property) => (
          <li key={property.id}>
            {property?.id} - {property.title}
            <Link to={`/propiedades/${property?.id}?statusId=1&companyId=1`}>
              ver detalles
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={currentPage === pageNumber || pageNumber === '...'}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Pagination;
