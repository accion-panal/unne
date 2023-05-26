import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Head from '../../components/Head/Head';
import PropertyComponent from '../../components/PageSections/Properties/components/Property';
import PropertiesServices from '../../services/PropertiesServices';
import { company } from '../../constants/consts/company';

const Property = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});

  const getProperty = async (id, statusId, companyId) => {
    const response = await PropertiesServices.getProperty(
      id,
      statusId,
      companyId
    );
    setProperty(response);
  };

  useEffect(() => {
    getProperty(id, company?.statusId, company?.companyId);
  }, [id]);

  return (
    <Fragment>
      <Head title={`${property?.title ?? 'cargando...'}`} />
      <PropertyComponent {...{ property }} />
    </Fragment>
  );
};

export default Property;
