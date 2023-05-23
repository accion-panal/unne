import React, { Fragment } from 'react';
import CarouselSection from './components/CarouselSection';
import SearchPropertiesSection from './components/SearchPropertiesSection';
import HighlightedProjects from './components/HighlightedProjects';
import ServicesContactSection from './components/ServicesContactSection';

const HomeComponent = () => {
  return (
    <Fragment>
      <CarouselSection />
      <SearchPropertiesSection />
      <HighlightedProjects />
      <ServicesContactSection />
    </Fragment>
  );
};

export default HomeComponent;
