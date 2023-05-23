import React from 'react';
import Section from '../../../Section/Section';
import ReactSlickComponent from '../../../Carousel/ReactSlickComponent';
import ImgCarouselCard from '../../../Card/ImgCarouselCard';
import { BankData } from '../../../../data';

const Alliances = () => {
  return (
    <Section>
      <div className="flex justify-center text-center mb-10">
        <h2 className="text-2xl xl:text-3xl font-bold text-gray-800">
          Nuestras Alianzas
        </h2>
      </div>

      <ReactSlickComponent
        data={BankData}
        RenderComponent={ImgCarouselCard}
        slidesToShow={4}
        xl={1}
      />
    </Section>
  );
};

export default Alliances;
