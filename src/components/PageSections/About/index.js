import React, { Fragment } from 'react';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Alliances from './components/Alliances';

const AboutComponent = () => {
  return (
    <Fragment>
      <About />
      <ContactUs />
      <Alliances />
    </Fragment>
  );
};

export default AboutComponent;
