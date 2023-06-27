import React from 'react';
import { iconsList } from '../Icons/index';

export const Objetives = ({ data }) => {
  const {
    TbSquareRoundedNumber1Filled,
    TbSquareRoundedNumber2Filled,
    TbSquareRoundedNumber3Filled,
    TbSquareRoundedNumber4Filled,
  } = iconsList;
  const { id, icon, title, desc } = data;

  return (
    <div className="flex pt-14 flex-nowrap h-30 md:flex-col hover:scale-110 transition duration-500">
      <div className="h-auto">
        <span className="rounded-full py-2 px-5 relative text-3xl font-bold bg-orange-500 text-white">
          {icon}
        </span>
      </div>
      <div className="max-w-xl h-50 sm:h-auto bg-white rounded-lg overflow-hidden ">
        <div className="p-14 pt-0">
          <h2 className="text-1xl md:text-2xl font-bold text-gray-800">
            {title}
          </h2>
          <p className="text-sm pt-4 text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
};
