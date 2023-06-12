import React from 'react';

const StepsPlan = ({ backgroundColor, data }) => {
  const { id, span, desc } = data;
  return (
    <div
      className={`${backgroundColor} text-center py-6 px-4 xl:my-5 xl:mx-10 rounded-lg cursor-pointer trasition duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 rounded-full font-bold bg-orange-500 flex items-center justify-center">
          <span className="text-white text-lg font-bold">{id}</span>
        </div>
      </div>

      <p className="mt-4 mb-2 text-lg xl:text-xl text-gray-700">
        <span className="font-bold">{span}</span> {desc}
      </p>
    </div>
  );
};

export default StepsPlan;
