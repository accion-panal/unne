import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropertiesContext } from '../../context/properties/PropertiesContext';
import { SelectsContext } from '../../context/selects/SelectsContext';
import AdvancedSearch from '../../components/Form/AdvancedSearch';
import PropertiesServices from '../../services/PropertiesServices';
import Pagination from '../../components/Pagination/Pagination';

const Properties = () => {
  const { contextData } = useContext(PropertiesContext);
  const { contextDataSelects } = useContext(SelectsContext);
  const [statusId, companyId] = contextData;
  const [
    filterSearchEntry,
    setFilterSearchEntry,
    getSelects,
    selects,
    communes,
    getCommunesByRegion,
    regions,
    operationType,
    typeOfProperty,
    installmentType,
  ] = contextDataSelects;

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingOnStart, setLoadingOnStart] = useState(true);
  const [notFoundMsg, setNotFoundMsg] = useState([]);

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
    };

    const url = `${urlPaths?.operationType}${urlPaths?.typeOfProperty}`;

    try {
      setNotFoundMsg('');
      setLoading(true);
      setProperties([]);
      const res = await PropertiesServices.getProperties(
        statusId,
        companyId,
        url
      );

      setLoading(false);
      setProperties(res.length > 0 ? res : []);
      setNotFoundMsg(
        res.length > 0 ? '' : 'No coincide ninguna propiedad con tu busqueda'
      );
    } catch (error) {
      console.error('Se produjo un error:', error);
    }

    // if (res.length > 0) {
    //   setProperties(res);
    //   setLoading(false);
    // } else {
    //   setLoading(false);
    //   setNotFoundMsg('No hay');
    // }
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

  return (
    <div>
      <div>
        <div>
          <div>
            {loading && <p>cargando...</p>}
            {/* {properties.length <= 0 ? <p>NO HAY...</p> : ''} */}
            {notFoundMsg}

            {/* {properties.map((property) => (
              <div key={property.id}>
                {property?.id}.- {property?.title}
                <Link
                  to={`/propiedades/${property.id}/?statusId=${statusId}&companyId=${companyId}`}
                >
                  Ver detalle
                </Link>
              </div>
            ))} */}
          </div>
          <Pagination {...{ properties }} />
          {/* {properties.length > 0
            ? properties.map((property) => (
                <div key={property.id}>
                  {property?.id}.- {property?.title}
                  <Link
                    to={`/properties/${property.id}/?statusId=${statusId}&companyId=${companyId}`}
                  >
                    Ver detalle
                  </Link>
                </div>
              ))
            : null} */}
        </div>
      </div>

      <div>
        <AdvancedSearch handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Properties;
