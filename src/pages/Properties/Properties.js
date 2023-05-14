import React, { useContext, useEffect, useMemo, useState } from 'react';
import { PropertiesContext } from '../../context/properties/PropertiesContext';
import { SelectsContext } from '../../context/selects/SelectsContext';
import Section from '../../components/Section/Section';
import AdvancedSearch from '../../components/Form/AdvancedSearch';
import PropertiesServices from '../../services/PropertiesServices';
import Pagination from '../../components/Pagination/Pagination';
import Spinner from '../../components/Spinner/Spinner';
import NotFound from '../../components/Message/NotFound';
import PropertiesTop from '../../components/Navigation/PropertiesTop';

const Properties = () => {
  const { contextData } = useContext(PropertiesContext);
  const { contextDataSelects } = useContext(SelectsContext);
  const [statusId, companyId, totalItems, setTotalItems, itemsPerPage, ,] =
    contextData;
  const [filterSearchEntry, ...rest] = contextDataSelects;
  const [properties, setProperties] = useState([]);
  const [loadingOnStart, setLoadingOnStart] = useState(true);
  const [loading, setLoading] = useState(false);
  const [notFoundMsg, setNotFoundMsg] = useState('');

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

  return (
    <Section className="relative flex flex-col md:flex-row">
      <div className="relative w-full md:w-3/4 m-2">
        <PropertiesTop {...{ totalItems, itemsPerPage }} />
        {loadingOnStart && <Spinner />}
        {loading && <Spinner />}
        {notFoundMsg && <NotFound message={notFoundMsg} />}

        {/* Properties List and Pagination */}
        <Pagination {...{ properties, totalItems }} />
      </div>

      {/* Advanced search properties form */}
      <div className="w-full md:w-1/4 h-[100%] m-2 p-8 border border-gray-200 rounded-lg bg-white">
        <AdvancedSearch handleSubmit={handleSubmit} />
      </div>
    </Section>
  );
};

export default Properties;
