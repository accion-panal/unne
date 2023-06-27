import React from 'react';

const Info = ({ data, titleFont, listFont, spanFont }) => {
  const { title, children } = data;
  return (
    <div>
      <h2 className={`pb-3 text-orange-500 ${titleFont} font-bold`}>{title}</h2>

      <ul className="">
        {children?.map(({ id, name, status }) => (
          <li
            key={id}
            className={`py-2 font-semibold list-none text-gray-600 ${listFont}`}
          >
            - {name}{' '}
            {status && (
              <span
                className={`animate-heart text-white ${spanFont}
                         bg-orange-500 rounded-full mx-1 px-2 uppercase inline-block`}
              >
                {' '}
                {status}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
