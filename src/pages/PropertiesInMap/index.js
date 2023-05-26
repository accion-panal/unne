import React, { Fragment } from 'react';
import Head from '../../components/Head/Head';
import PropertiesInMapComponent from '../../components/PageSections/PropertiesInMap';

const PropertiesInMap = () => {
  return (
    <Fragment>
      <Head title="Propiedades en mapa" />

      <PropertiesInMapComponent />
    </Fragment>
  );
};

export default PropertiesInMap;
