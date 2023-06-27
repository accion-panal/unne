import React, { useContext, useEffect } from 'react';
import { ClientsContext } from '../../../../context/clients/ClientsContext';
import Section from '../../../Section/Section';
import PartnersCard from '../../../Card/PartnersCard';
import ReactSlickComponent from '../../../Carousel/ReactSlickComponent';

const OurPartners = () => {
  const { contextData } = useContext(ClientsContext);
  const [clients, , getClientList] = contextData;

  useEffect(() => {
    getClientList();
  }, []);

  const titleFont = 'text-xl lg:text-2xl xl:text-4xl';

  return (
    <Section className="mt-[200px] bg-gray-50 py-10">
      <div className="flex flex-col items-center justify-center">
        <div className="pb-5 text-center">
          <h2 className={`font-bold text-gray-800 ${titleFont}`}>
            Nuestros asociados cuentan su experiencia Unne
          </h2>
        </div>
      </div>
      <div className="px-4">
        <ReactSlickComponent
          RenderComponent={PartnersCard}
          data={clients}
          slidesToShow={3}
          xl={1}
        />
      </div>
    </Section>
  );
};

export default OurPartners;
