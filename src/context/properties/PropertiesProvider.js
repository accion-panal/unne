import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PropertiesContext } from './PropertiesContext';
import PropertiesServices from '../../services/PropertiesServices';
import { paginationTopLimit } from '../../constants/consts/company';

const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [propertyId, setPropertyId] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundMsg, setNotFoundMsg] = useState('');
  const { pathname } = useLocation();

  const getProperties = async (
    currentPage,
    limit = paginationTopLimit.limit
  ) => {
    try {
      setNotFoundMsg('');
      setIsLoading(true);
      const { data, newUnitiesData, meta } =
        await PropertiesServices.getProperties(currentPage, limit);
      setProperties(
        pathname === '/soy-inversionista/unidades-nuevas'
          ? newUnitiesData
          : pathname === '/propiedades'
          ? data
          : data
      );
      setTotalItems(meta.totalItems);
      setTotalPages(Math.ceil(meta.totalItems / limit)); // + 0.5
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
          totalItems,
          handlePageChange,
          isLoading,
          setIsLoading,
          notFoundMsg,
          setNotFoundMsg,
          propertyId,
          setPropertyId,
        },
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
