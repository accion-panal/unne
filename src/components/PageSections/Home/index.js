import React, { Fragment } from 'react';
import CarouselSection from './components/CarouselSection';
import SearchPropertiesSection from './components/SearchPropertiesSection';
import HighlightedProjects from './components/HighlightedProjects';

const HomeComponent = () => {
  return (
    <Fragment>
      <CarouselSection />
      <SearchPropertiesSection />
      <HighlightedProjects />
    </Fragment>
  );
};

export default HomeComponent;
