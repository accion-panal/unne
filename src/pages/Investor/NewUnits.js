import React, { Fragment } from 'react';
import NewProperty from '../../components/PageSections/Investor/NewUnits/NewProperty';
import Layout from '../../components/Layout/Layout';
import Banner from '../../components/PageSections/Investor/NewUnits/Banner';
import { Fade } from 'react-awesome-reveal';

const NewUnits = () => {
  const margin = 'my-20';
  return(
    <Fragment>
        <section className={`${margin}`}>
          <Fade delay={300} cascade>
            <NewProperty />
          </Fade>
        </section>

        <section className={`${margin}`}>
          <Banner />
        </section>
    </Fragment>
  )
};

export default NewUnits;
