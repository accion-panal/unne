import React, { useState, useEffect } from 'react';
import { PropertiesContext } from './PropertiesContext';
import PropertiesServices from '../../services/PropertiesServices';
import { paginationTopLimit } from '../../constants/consts/company';

const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundMsg, setNotFoundMsg] = useState('');

  const getProperties = async (
    currentPage,
    limit = paginationTopLimit.limit
  ) => {
    try {
      setNotFoundMsg('');
      setIsLoading(true);
      const { data, meta } = await PropertiesServices.getProperties(
        currentPage,
        limit
      );
      setProperties(data);
      setTotalPages(Math.ceil(meta.totalItems / limit + 0.5));
      setNotFoundMsg(
        data.length === 0
          ? 'Lo sentimos, tu busqueda no coincide con nuestros registros'
          : ''
      );
      setIsLoading(false);
    } catch (error) {
      console.log('Bad server request', error);
    }
  };

  const handlePageChange = (newPage) => {
    setProperties([]);
    setPage(newPage);
  };

  useEffect(() => {
    getProperties(page);
  }, [page]);

  return (
    <PropertiesContext.Provider
      value={{
        contextData: {
          properties,
          setProperties,
          page,
          totalPages,
          handlePageChange,
          isLoading,
          setIsLoading,
          notFoundMsg,
          setNotFoundMsg,
        },
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
