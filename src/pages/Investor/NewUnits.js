import React, { Fragment } from 'react';
import NewProperty from '../../components/Card/InvestToday';
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

   
    </Fragment>
  )
};

export default NewUnits;
