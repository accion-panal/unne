import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import LegalServicesComponent from '../../components/PageSections/Broker/LegalServicesComponent';

const LegalServices = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/eres-corredor/servicios-legales') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Servicios legales" />

      <LegalServicesComponent />
    </Fragment>
  );
};

export default LegalServices;
