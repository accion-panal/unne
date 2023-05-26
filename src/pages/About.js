import React, { Fragment } from 'react';
import Head from '../components/Head/Head';
import AboutComponent from '../components/PageSections/About';

const About = () => {
  return (
    <Fragment>
      <Head title="¿Quiénes somos?" />

      <AboutComponent />
    </Fragment>
  );
};

export default About;
