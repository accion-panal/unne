import React from 'react';

const ServicesCard = ({ data }) => {
  const { id, title, desc, color } = data;

  return (
    <div
      className={`${color} max-w-[280px] pt-4 pb-6 px-5 rounded-2xl cursor-default 
                        hover:shadow-xl hover:scale-105 transition-all`}
    >
      <h3 className="text-2xl font-bold pb-4 uppercase">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ServicesCard;
