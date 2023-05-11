import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropertiesContext } from '../../context/properties/PropertiesContext';
import AdvancedSearch from '../../components/Form/AdvancedSearch';
import PropertiesServices from '../../services/PropertiesServices';

const Properties = () => {
  const { contextData } = useContext(PropertiesContext);
  const [statusId, companyId] = contextData;
  const [properties, setProperties] = useState([]);

  // filters
  const [operationType, setOperationType] = useState(''); //null

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('sending...');

    /** Building url path */
    const urlPaths = {
      operationType:
        operationType?.value === undefined
          ? ''
          : `&operationType=${operationType?.value}`,
    };

    /** Handle Url */
    const url = `${urlPaths?.operationType}`;

    setProperties([]);
    const res = await PropertiesServices.getProperties(
      statusId,
      companyId,
      url
    );
    setProperties(res);

    // const res = await axios.get(url);
    // const data = res.data.data;
  };

  const getProperties = async (statusId, companyId, url) => {
    const res = await PropertiesServices.getProperties(
      statusId,
      companyId,
      url
    );
    setProperties(res);
  };

  const memoizedData = useMemo(
    () => () => getProperties(statusId, companyId, ''),
    []
  );

  useEffect(() => {
    memoizedData();
  }, [memoizedData]);

  console.log(properties);

  return (
    <div>
      Properties
      <div>
        {properties.map((property) => (
          <div key={property.id}>
            {property?.id}.- {property?.title}
          </div>
        ))}
        {/* <Link
          to={`/properties/343/?statusId=${statusId}&companyId=${companyId}`}
        >
          Ver detalle
        </Link> */}
      </div>
      <div>
        <h3>Busqueda avanzada</h3>
        <AdvancedSearch
          handleSubmit={handleSubmit}
          operationType={operationType}
          setOperationType={setOperationType}
        />
      </div>
    </div>
  );
};

export default Properties;
