import React, { Fragment } from 'react';
import MainInformation from './components/MainInformation';
import Banner from './components/Banner';
import InfoCardSection from '../../Form/InfoCardSection';
import OurPartners from './components/OurPartners';

const BrokerComponent = () => {
  return (
    <Fragment>
      <MainInformation />
      <Banner />
      <InfoCardSection />
      <OurPartners />
    </Fragment>
  );
};

export default BrokerComponent;
