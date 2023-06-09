import React from 'react';
import HeadingSection from '../../../HeadingSection/HeadingSection';
import Button from '../../../Button/Button';

const ServicesContactSection = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-50 pb-16">
      <HeadingSection title="Para más información de nuestros servicios" />
      <Button
        href="/soy-inversionista/unidades-nuevas"
        className="p-2 text-xl xl:p-3 text-center xl:text-2xl bg-amber-400 hover:bg-amber-500 hover:shadow-md 
        w-48 sm:w-96"
      >
        Contáctanos
      </Button>
    </div>
  );
};

export default ServicesContactSection;
