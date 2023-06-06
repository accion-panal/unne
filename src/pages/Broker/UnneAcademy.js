import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Head from '../../components/Head/Head';
import AcademyComponent from '../../components/PageSections/Broker/Academy';

const UnneAcademy = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/eres-corredor/academia-unne') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Academia Unne" />

      <AcademyComponent />
    </Fragment>
  );
};

export default UnneAcademy;
