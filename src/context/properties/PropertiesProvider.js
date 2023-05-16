import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PropertiesContext } from './PropertiesContext';
import { company } from '../../data/company';

const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [statusIdParams, setStatusIdParams] = useSearchParams({
    statusId: company.statusId,
  });
  const [companyIdIdParams, setCompanyIdIdParams] = useSearchParams({
    companyId: company.companyId,
  });

  const statusId = statusIdParams.get('statusId');
  const companyId = companyIdIdParams.get('companyId');

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
          // properties,
          // setProperties,
        ],
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
