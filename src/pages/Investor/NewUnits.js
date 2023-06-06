import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import NewProperty from '../../components/PageSections/Investor/NewUnits/NewProperty';
import Layout from '../../components/Layout/Layout';
import Banner from '../../components/PageSections/Investor/NewUnits/Banner';
import PropertiesComponent from '../../components/PageSections/Properties';
import Section from '../../components/Section/Section';
import { Fade } from 'react-awesome-reveal';

const NewUnits = () => {
  const location = useLocation();
  const margin = 'my-20';

  useEffect(() => {
    if (location.pathname === '/soy-inversionista/unidades-nuevas') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Unidades nuevas" />

      <section className={`${margin}`}>
        <Fade delay={300} cascade>
          <NewProperty />
        </Fade>
      </section>

      <section className={`${margin}`}>
        <Banner />
      </section>

      <Section>
        <PropertiesComponent />
      </Section>
    </Fragment>
  );
};

export default NewUnits;
