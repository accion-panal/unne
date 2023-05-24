import React from 'react';

const ClientCard = ({ item }) => {
  const { first_name, avatar, last_name, email } = item;

  const bgColors = ['bg-orange-50', 'bg-yellow-50', 'bg-gray-50', 'bg-pink-50'];
  const getRadmonColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  return (
    <div
      className={`${getRadmonColor} flex justify-center items-center w-[95%] mx-auto rounded-[50px] h-[500px] xl:h-[600px] cursor-pointer`}
    >
      <div className="">
        <div className="flex justify-center items-center mb-12">
          <img
            src={avatar}
            alt={`avatar-${first_name}`}
            className="rounded-full"
            width={130}
            height={130}
          />
        </div>

        <div className="text-center w-4/6 mx-auto">
          <p className="text-md font-semibold">
            "En mi experiencia, encuentro que son ecientes solucionando
            cualquier problema o duda que uno tenga. cálidos y profesionales en
            su accionar. Es una Empresa 100% recomendable. Estoy muy contenta
            con su trabajo"
          </p>
        </div>

        <div className="text-center mt-10 flex justify-center items-center flex-col">
          <h4 className="text-lg font-bold">
            {first_name} {last_name}
          </h4>
          <p className="text-md text-gray-700">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
