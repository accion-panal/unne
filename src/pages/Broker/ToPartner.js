import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import BrokerComponent from '../../components/PageSections/Broker';

const ToPartner = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/eres-corredor/asociate') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Asociate" />

      <BrokerComponent />
    </Fragment>
  );
};

export default ToPartner;
