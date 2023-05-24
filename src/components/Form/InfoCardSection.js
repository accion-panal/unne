import React from 'react';
import Section from '../Section/Section';
import NewInfo from '../Card/NewInfo';
import { AssociateCardData } from '../../data';

const InfoCardSection = () => {
  return (
    <Section>
      <div
        className="grid grid-cols-[repeat(1,250px)] sm:grid-cols-[repeat(2,250px)] xl:grid-cols-[repeat(4,250px)] place-content-center
                    gap-8"
      >
        {AssociateCardData?.length > 0 &&
          AssociateCardData?.map((e) => <NewInfo key={e.id} data={e} />)}
      </div>
    </Section>
  );
};

export default InfoCardSection;
