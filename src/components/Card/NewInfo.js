import React from 'react';
import { iconsList } from '../Icons';

const NewInfo = ({ data }) => {
  const { title, desc, icon, href, children } = data;

  const { BsFillHouseAddFill, BiBookOpen, AiTwotoneGold, AiOutlineShareAlt } =
    iconsList;

  const renderIcon = () => {
    const colorIcon = '#6b7280';
    const sizeIcon = '5rem';
    const mapIcon = {
      BsFillHouseAddFill: (
        <BsFillHouseAddFill size={sizeIcon} color={colorIcon} />
      ),
      BiBookOpen: <BiBookOpen size={sizeIcon} color={colorIcon} />,
      AiTwotoneGold: <AiTwotoneGold size={sizeIcon} color={colorIcon} />,
      AiOutlineShareAlt: (
        <AiOutlineShareAlt size={sizeIcon} color={colorIcon} />
      ),
    };

    return mapIcon[data.icon];
  };

  return (
    <div
      className="relative h-[400px] w-[250px]
            bg-white overflow-hidden rounded-xl
            group border-slate-300 border
            shadow-lg"
    >
      <div className="overflow-hidden flex justify-center items-center flex-col text-center mt-24">
        <div className="w-20 h-20 text-white">{renderIcon()}</div>
        <h2 className="text-2xl text-orange-500 font-bold">{title}</h2>
      </div>

      <div
        className="absolute left-0 bottom-0 w-full bg-gray-100 
                translate-y-[110%] transition-all duration-500
                group-hover:translate-y-0
                rounded-xl h-full p-4
                flex flex-col justify-between"
      >
        <div>
          <p className="pb-3 text-base ">{desc}</p>
          <ul className="px-3 pt-2 font-semibold tracking-tight">
            {children?.map(({ id, name }) => (
              <li
                key={id}
                className='py-1 
                    before:content-[""] before:w-5 before:h-10 before:border-l-2 before:border-b-2
                    before:-top-6 before:-left-2 before:relative before:inline-block before:border-slate-300
                    flex'
              >
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {href && (
            <div className="flex justify-center">
              <button className="py-1 px-7 text-white bg-orange-400 hover:bg-orange-500 border-none rounded-full ">
                Mas Informacion
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewInfo;
