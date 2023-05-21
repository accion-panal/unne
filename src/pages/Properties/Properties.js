import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PropertiesContext } from '../../context/properties/PropertiesContext';
import Section from '../../components/Section/Section';
import AdvancedSearch from '../../components/Form/AdvancedSearch';
import Pagination from '../../components/Pagination/Pagination';
import Spinner from '../../components/Spinner/Spinner';
import NotFound from '../../components/Message/NotFound';
import PropertiesTop from '../../components/Navigation/PropertiesTop';

const Properties = () => {
  const { contextData } = useContext(PropertiesContext);
  const [
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
  ] = contextData;
  const location = useLocation();
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(false);

  return (
    <Section className="relative flex flex-col md:flex-row">
      <div className="relative w-full md:w-3/4 m-2">
        <PropertiesTop
          {...{
            totalItems,
            itemsPerPage,
            isGrid,
            setIsGrid,
            isList,
            setIsList,
            properties,
          }}
        />
        {loadingOnStart && <Spinner />}
        {loading && <Spinner />}
        {notFoundMsg && <NotFound message={notFoundMsg} />}

        {/* Properties List and Pagination */}
        <Pagination
          {...{ properties, totalItems, isGrid, setIsGrid, isList, setIsList }}
        />
      </div>

      {/* Advanced search properties form */}
      <div className="w-full md:w-1/4 h-[100%] m-2 p-8 border border-gray-200 rounded-lg bg-white">
        <AdvancedSearch handleSubmit={handleSubmit} />
      </div>
    </Section>
  );
};

export default Properties;
