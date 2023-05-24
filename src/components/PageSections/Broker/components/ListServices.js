import React from 'react';

const ListServices = ({ data, titleFont, listFont }) => {
  const { id, title, process } = data;

  return (
    <div className="cursor-default">
      <h2 className={`${titleFont} text-orange-500 font-bold`}>{title}</h2>
      <ul className="py-1 flex justify-center flex-col font-semibold">
        {process &&
          process.map((process, idx) => (
            <li key={idx} className="mx-7 list-disc text-orange-500">
              <p className={`${listFont} text-black`}>{process}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListServices;
