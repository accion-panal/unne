import React from 'react';
import WhyUnneList from './WhyUnneList';

const whyUnneSection = ({ data }) => {
  const { title, benefits } = data;

  const marginTitle = 'mb-10';
  const TitleFont = 'text-4xl md:text-5xl text-gray-800';
  const subFont = 'text-lg';

  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className={`${marginTitle} text-center ${TitleFont} font-bold`}>
        {title}
      </h3>
      <div className=" justify-center flex flex-wrap gap-10 max-w-6xl">
        {benefits &&
          benefits.map((benefit, idx) => (
            <WhyUnneList
              key={idx}
              data={benefit}
              subFont={subFont}
            ></WhyUnneList>
          ))}
      </div>
    </div>
  );
};

export default whyUnneSection;
