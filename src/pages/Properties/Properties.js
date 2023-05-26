import React from 'react';
import Head from '../../components/Head/Head';
import Section from '../../components/Section/Section';
import PropertiesComponent from '../../components/PageSections/Properties';

const Properties = () => {
  return (
    <Section className="relative flex flex-col md:flex-row">
      <Head title="Propiedades" />
      <PropertiesComponent />
    </Section>
  );
};

export default Properties;
