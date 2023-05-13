import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ properties }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 10;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;

  const currentProperties = properties.slice(startIndex, endIndex);

  console.log(currentProperties);

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
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <ul>
        {currentProperties.map((property) => (
          <li key={property.id}>
            {property.title}
            <Link to="/">ver detalles</Link>
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
