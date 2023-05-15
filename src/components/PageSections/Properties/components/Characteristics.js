import React, { useState, useEffect } from 'react';
import { iconsList } from '../../../Icons';

const Characteristics = ({ property }) => {
  const {
    title,
    description,
    company,
    price,
    surface_m2,
    bedrooms,
    bathrooms,
    coveredParkingLots,
    status,
  } = property;
  const {
    RiPencilRulerLine,
    FaBed,
    FaBath,
    BsFillCalendarCheckFill,
    GiHomeGarage,
    BsCheckCircle,
  } = iconsList;

  return (
    <div className="flex flex-col p-5 mt-5 md:xl:mt-24 lg:xl:mt-24 xl:mt-24">
      <div className="flex w-full flex-col xl:flex-row xl:w-4/6 justify-between">
        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <RiPencilRulerLine />
          </span>
          Superficie útil: {surface_m2 ?? 0}m<sup>2</sup> útiles
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <FaBath />
          </span>
          Baños: {bathrooms ?? 0}
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <BsFillCalendarCheckFill />
          </span>
          Fecha de entrega: {'Pendiente'}
        </div>
      </div>
      <div className="flex w-full flex-col xl:flex-row xl:w-4/6 justify-between">
        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <FaBed />
          </span>
          Dormitorios: {bedrooms ?? 0}
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <GiHomeGarage />
          </span>
          Estacionamientos: {coveredParkingLots ?? 0}
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-500">
          <span className="text-gray-400 mr-1">
            <BsCheckCircle />
          </span>
          Estado del proyecto: {status ?? 'Desabilitado'}
        </div>
      </div>

      <div className="my-5">
        <h3>Características</h3>
        <h5 className="text-sm text-gray-500">Descripción</h5>
        <p className="text-gray-600 mt-2">
          {title ?? 'Propiedad sin titulo registrado'}
        </p>
        <br />
        <p className="text-gray-600">
          {description ?? 'Propiedad sin descripción registrado'}
        </p>
      </div>
    </div>
  );
};

export default Characteristics;
