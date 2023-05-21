import React, { useContext, useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PropertiesContext } from './PropertiesContext';
import { company } from '../../data/company';
import { SelectsContext } from '../selects/SelectsContext';
import PropertiesServices from '../../services/PropertiesServices';

const PropertiesProvider = ({ children }) => {
  const { contextDataSelects } = useContext(SelectsContext);
  const [properties, setProperties] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [loadingOnStart, setLoadingOnStart] = useState(true);
  const [loading, setLoading] = useState(false);
  const [notFoundMsg, setNotFoundMsg] = useState('');
  const [statusIdParams, setStatusIdParams] = useSearchParams({
    statusId: company.statusId,
  });
  const [companyIdIdParams, setCompanyIdIdParams] = useSearchParams({
    companyId: company.companyId,
  });
  const [filterSearchEntry, ...rest] = contextDataSelects;
  const statusId = statusIdParams.get('statusId');
  const companyId = companyIdIdParams.get('companyId');

  const handleSubmit = async (e) => {
    e.preventDefault();

    /** Building url path */
    const urlPaths = {
      operationType:
        filterSearchEntry?.operationType?.value === undefined
          ? ''
          : `&operationType=${filterSearchEntry?.operationType?.value}`,

      typeOfProperty:
        filterSearchEntry?.typeOfProperty?.value === undefined
          ? ''
          : `&typeOfProperty=${filterSearchEntry?.typeOfProperty?.value}`,

      installmentType:
        filterSearchEntry?.installmentType?.value === undefined
          ? ''
          : `&installment_type=${filterSearchEntry?.installmentType?.value}`,

      region:
        filterSearchEntry?.region?.label === undefined
          ? ''
          : `&region=${filterSearchEntry?.region?.label}`,

      commune:
        filterSearchEntry?.commune?.label === undefined
          ? ''
          : `&commune=${filterSearchEntry?.commune?.label}`,

      surfaceM2:
        filterSearchEntry?.surfaceM2 === undefined
          ? ''
          : `&surface_m2=${filterSearchEntry?.surfaceM2}`,

      minPrice:
        filterSearchEntry?.minPrice === undefined
          ? ''
          : `&min_price=${filterSearchEntry?.minPrice}`,

      maxPrice:
        filterSearchEntry?.maxPrice === undefined
          ? ''
          : `&max_price=${filterSearchEntry?.maxPrice}`,

      bedrooms:
        filterSearchEntry?.bedrooms?.value === undefined
          ? ''
          : `&bedrooms=${filterSearchEntry?.bedrooms?.value}`,

      bathrooms:
        filterSearchEntry?.bathrooms?.value === undefined
          ? ''
          : `&bathrooms=${filterSearchEntry?.bathrooms?.value}`,

      coveredParkingLots:
        filterSearchEntry?.coveredParkingLots?.value === undefined
          ? ''
          : `&covered_parking_lots=${filterSearchEntry?.coveredParkingLots?.value}`,
    };

    const url = `${urlPaths?.operationType}${urlPaths?.typeOfProperty}${urlPaths?.installmentType}${urlPaths?.region}${urlPaths?.commune}${urlPaths?.surfaceM2}${urlPaths?.minPrice}${urlPaths?.maxPrice}${urlPaths?.bedrooms}${urlPaths?.bathrooms}${urlPaths?.coveredParkingLots}`;

    try {
      setLoading(true);
      setNotFoundMsg('');
      setProperties([]);
      const [response, metaData] = await PropertiesServices.getProperties(
        statusId,
        companyId,
        url
      );

      setProperties(response.length > 0 ? response : []);
      setLoading(false);
      setNotFoundMsg(response.length > 0 ? '' : 'Propiedades no encontradas');
    } catch (error) {
      console.error('Se produjo un error:', error);
    }
  };

  const getProperties = async (statusId, companyId, url) => {
    const [response, metaData] = await PropertiesServices.getProperties(
      statusId,
      companyId,
      url
    );
    setTotalItems(metaData?.meta?.totalItems);
    setProperties(response);
  };

  const memoizedData = useMemo(
    () => () => getProperties(statusId, companyId, ''),
    []
  );

  useEffect(() => {
    memoizedData();
  }, [memoizedData]);

  useEffect(() => {
    if (properties?.length > 0) {
      setLoadingOnStart(false);
      return;
    }
  }, [properties]);

  console.log(filterSearchEntry);

  return (
    <PropertiesContext.Provider
      value={{
        contextData: [
          statusId,
          companyId,
          totalItems,
          setTotalItems,
          itemsPerPage,
          setItemsPerPage,
          properties,
          setProperties,
          handleSubmit,
          loadingOnStart,
          setLoadingOnStart,
          loading,
          setLoading,
          notFoundMsg,
          setNotFoundMsg,
        ],
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
