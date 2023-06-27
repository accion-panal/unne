import React from 'react';
const BasicCard = ({ backgroundColor, data }) => {
  const { title, desc } = data;
  return (
    <div
      className={`${backgroundColor} border-l-4 border-l-amber-100 text-center py-6 px-4 my-5 xl:my-14 rounded-lg cursor-pointer hover:shadow-lg trasition duration-300 ease-in-out`}
    >
      <h3 className="text-xl font-bold text-gray-800 uppercase">{title}</h3>
      <p className="text-md mt-4 mb-2 xl:text-lg text-gray-700 w-[90%] mx-auto">
        {desc}
      </p>
    </div>
  );
};

export default BasicCard;
