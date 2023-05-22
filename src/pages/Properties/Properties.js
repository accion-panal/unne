import React from 'react';
import Section from '../../components/Section/Section';
import PropertiesComponent from '../../components/PageSections/Properties';

const Properties = () => {
  return (
    <Section className="relative flex flex-col md:flex-row">
      <PropertiesComponent />
    </Section>
  );
};

export default Properties;
