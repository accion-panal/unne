import React, { Fragment } from 'react';
import CarouselSection from './components/CarouselSection';
import SearchPropertiesSection from './components/SearchPropertiesSection';

const HomeComponent = () => {
  return (
    <Fragment>
      <CarouselSection />
      <SearchPropertiesSection />
    </Fragment>
  );
};

export default HomeComponent;
