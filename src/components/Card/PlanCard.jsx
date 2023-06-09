import React from 'react';

const PlanCard = ({ data }) => {
  const { title, commission, benefits } = data;

  return (
    <div className="block max-w-full xl:max-w-md p-6 rounded-[50px] shadow bg-orange-500 border border-gray-200 hover:bg-amber-400 hover:shadow-xl transition ease-in-out hover:-translate-y-1 xl:hover:scale-100 duration-300">
      <h5 className="mb-5 text-xl md:text-2xl xl:text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
        {title}
      </h5>

      <div className="flex justify-center items-center py-2 font-bold rounded-full w-5/6 xl:w-5/6 mx-auto bg-white">
        <span className="text-lg xl:text-xl font-extrabold text-center w-1/2 ml-2 text-orange-500">
          {commission}
        </span>
        <span className="text-sm lg:text-md xl:text-xl text-slate-500">
          de comisión por corretaje
        </span>
      </div>

      <ul className="pb-8 pt-5 flex justify-center flex-col mx-10 lg:mx-14 xl:mx-2">
        {benefits &&
          benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="mx:4 xl:mx-14 py-2 text-lg xl:text-xl font-semibold list-disc text-gray-100"
            >
              {benefit}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PlanCard;
