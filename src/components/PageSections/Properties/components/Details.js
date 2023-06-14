import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseToCLPCurrency, clpToUf } from '../../../../utils';
import ExchangeRateServices from '../../../../services/ExchangeRateServices';
import { iconsList } from '../../../Icons';

const Details = ({ property }) => {
  const [ufCurrentValue, setUfCurrentValue] = useState(0);
  const { company, price, surface_m2, bedrooms, bathrooms } = property;
  const { RiPencilRulerLine, FaBed, FaBath } = iconsList;

  const getExchangeRateUF = async () => {
    try {
      const response = await ExchangeRateServices.getExchangeRateUF();
      const ufValue = response?.UFs[0]?.Valor;
      const ufValueAsNumber = parseFloat(ufValue.replace(',', '.'));
      setUfCurrentValue(ufValueAsNumber);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getExchangeRateUF();
  }, [ufCurrentValue]);

  return (
    <div className="border rounded-sm p-4 xl:p-8">
      <h3 className="border-b pb-1 text-gray-800">Empresa {company}</h3>

      <p className="text-sm text-gray-400 my-2">
        Publicado por:{' '}
        <span className="text-gray-800">
          {company ?? 'Empresa no registrada'}
        </span>
      </p>

      <div className="text-sm text-gray-400 my-3">
        <p className="text-gray-400">Desde</p>
        <h4 className="text-xl text-gray-700 font-semibold">
          UF {clpToUf(price || 0, ufCurrentValue)}
        </h4>
        <h4 className="text-sm text-gray-500">
          {parseToCLPCurrency(price || 0)}
        </h4>
      </div>

      <div className="my-5 text-sm text-gray-500">
        <div className="flex items-center my-1">
          <span className="text-gray-400 mr-1">
            <RiPencilRulerLine />
          </span>
          {surface_m2 ?? 0}m<sup>2</sup> útiles
        </div>

        <div className="flex items-center my-1">
          <span className="text-gray-400 mr-1">
            <FaBed />
          </span>
          {bedrooms ?? 0} dorms.
        </div>

        <div className="flex items-center my-1">
          <span className="text-gray-400 mr-1">
            <FaBath />
          </span>
          {bathrooms ?? 0} baños
        </div>
      </div>

      <div className="w-full">
        <Link
          to="/soy-inversionista/unidades-nuevas"
          className="flex w-full items-center justify-center rounded-full py-2 text-sm font-medium text-center text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
        >
          Cotizar
        </Link>
      </div>
    </div>
  );
};

export default Details;
