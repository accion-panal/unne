import React, { Fragment } from 'react';
import Head from '../components/Head/Head';
import HomeComponent from '../components/PageSections/Home';

const Home = () => {
  return (
    <Fragment>
      <Head
        title="Inicio"
        description="Unne es una plataforma de corretaje, donde los corredores puedan acceder a herramientas digitales que de otro modo seria difícil de acceder"
        keywords="unne, propiedades, plataforma de corretaje, herramientas digitales, corredores, recursos, corretaje"
      />
      <HomeComponent />
    </Fragment>
  );
};

export default Home;
