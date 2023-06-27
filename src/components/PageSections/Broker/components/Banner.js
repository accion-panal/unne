import React from 'react';
import Section from '../../../Section/Section';
import { PortalData } from '../../../../data';
import ReactSlickComponent from '../../../Carousel/ReactSlickComponent';
import ImgCarouselCard from '../../../Card/ImgCarouselCard';

const Banner = () => {
  const titleFont = 'text-xl lg:text-2xl xl:text-4xl';

  return (
    <Section>
      <div className="flex justify-center my-24 text-center">
        <h2 className={`${titleFont} font-semibold text-gray-800`}>
          Publicamos en los portales más importantes del país
        </h2>
      </div>
      <div className="px-4 xl:px-32 2xl:px-48">
        <ReactSlickComponent
          RenderComponent={ImgCarouselCard}
          data={PortalData}
          slidesToShow={3}
          xl={1}
        />
      </div>
    </Section>
  );
};

export default Banner;
