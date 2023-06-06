import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import Section from '../../components/Section/Section';
import PropertiesComponent from '../../components/PageSections/Properties';

const Properties = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/propiedades') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Section className="relative flex flex-col md:flex-row">
      <Head title="Propiedades" />
      <PropertiesComponent />
    </Section>
  );
};

export default Properties;
