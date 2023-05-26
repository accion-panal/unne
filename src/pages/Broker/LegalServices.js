import React, { Fragment } from 'react';
import Head from '../../components/Head/Head';
import LegalServicesComponent from '../../components/PageSections/Broker/LegalServicesComponent';

const LegalServices = () => {
  return (
    <Fragment>
      <Head title="Servicios legales" />

      <LegalServicesComponent />
    </Fragment>
  );
};

export default LegalServices;
