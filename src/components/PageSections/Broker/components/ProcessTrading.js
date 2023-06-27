import React from 'react';

const ProcessTrading = ({ data }) => {
  const { title, doc, uf, process } = data;

  const titleFont = 'text-3xl';
  const subtitleFont = 'text-lg';
  const listFont = '';
  const ufFont = 'text-4xl';

  return (
    <div className="cursor-default">
      <div className="flex justify-center items-center gap-5 flex-wrap">
        <div className="max-w-xs text-center">
          <h2 className={`font-bold ${titleFont} text-gray-800`}>{title}</h2>
          <p className={`${subtitleFont} text-gray-600`}>{doc}</p>
        </div>
        <div className="">
          <ul className="py-1 flex justify-center flex-col font-semibold max-w-[550px]">
            {process &&
              process.map((process, idx) => (
                <li
                  key={idx}
                  className={`before:content-[""] before:w-2 before:h-4 before:border-r-2 before:border-b-2 before:border-orange-400
                                before:-left-4 before:relative before:inline-block before:rotate-45
                                flex pb-1 ml-7 text-gray-600 ${listFont}`}
                >
                  {process}
                </li>
              ))}
          </ul>
        </div>
        <div className="">
          <h2 className={`${ufFont} font-bold text-orange-500`}>UF. {uf}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProcessTrading;
