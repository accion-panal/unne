import React from 'react';
import { useState, useEffect } from 'react';
import { iconsList } from '../../../../components/Icons/index';
import { Fade } from 'react-awesome-reveal';

const AuctionProcess = () => {
  const {
    IoIosArrowDown,
    RiUserSearchFill,
    BsBarChartFill,
    GiMoneyStack,
    TbPigMoney,
    TbArrowBigRightFilled,
    TbArrowBigDownFilled,
  } = iconsList;

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1535) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Fade delay={300} direction="right">
      <div className="">
        <div className="flex flex-wrap flex-row items-center justify-center  w-full">
          <div className="w-full sm:w-1/3 lg:w-max mb-8 sm:mb-0 hover:scale-105 transition duration-500">
            <div className="max-w-xl h-50 sm:h-auto bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-14">
                <h2 className="text-3xl md:text-2xl font-bold text-gray-800">
                  Nuestro modelo de Inversión Remate seguro
                </h2>
                <p className="text-sm text-gray-600">
                  Nuestro modelo de Inversión Remate seguro Único en el mercado
                  que genera hasta un 15% de rentabilidad por operación.
                </p>
              </div>
            </div>
          </div>

          <div className="w-80 sm:max-2xl:w-full flex-row 2xl:w-max lg:px-4 mb-8 sm:mb-4 flex items-center justify-center hover:scale-110 transition duration-500">
            {isMobile ? (
              <TbArrowBigDownFilled size={'8rem'} color="orange" />
            ) : (
              <TbArrowBigRightFilled size={'8rem'} color="orange" />
            )}
          </div>

          <div className="w-full sm:w-1/3  lg:w-max mb-8 sm:mb-0 hover:scale-105 transition duration-500">
            <div className="max-w-xl h-50 sm:h-auto bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-14">
                <h2 className="text-3xl md:text-2xl font-bold text-gray-800">
                  Esto es una asociación con True Capital
                </h2>
                <p className="text-sm">
                  Invierte de manera segura, y cuenta con la asesoría de
                  expertos que te guiaran según tus objetivos, desde la elección
                  del inmueble hasta la capitalización de tu inversión.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center p-10 m-2  text-center items-end">
            <div className="card w-80 min-h-[23.5rem] m-6  bg-gray-200 shadow-xl hover:scale-110 transition duration-500">
              <div>
                <figure className="px-10 pt-10">
                  <RiUserSearchFill size="6rem" color="grey" />
                </figure>
              </div>
              <div className="card-body items-center text-center">
                <div>
                  <h2 className="card-title text-gray-800">Transparente</h2>
                </div>

                <div>
                  <p className="text-gray-600">
                    La propiedad siempre está a nombre del Cliente, desde la
                    firma de compra hasta la firma de venta
                  </p>
                </div>
              </div>
            </div>

            <div className="card w-80 min-h-[23.5rem]  m-6 bg-gray-200 shadow-xl hover:scale-110 transition duration-500">
              <div>
                <figure className="px-10 pt-10">
                  <BsBarChartFill size="6rem" color="grey" />
                </figure>
              </div>

              <div className="card-body items-center text-center">
                <div>
                  <h2 className="card-title text-gray-800">Rentable</h2>
                </div>

                <div>
                  <p className="text-gray-600">
                    Rentabilidad del 15% asegurada en escritura publica
                  </p>
                </div>
              </div>
            </div>

            <div className="card w-80 min-h-[23.5rem] m-6 bg-gray-200 shadow-xl hover:scale-110 transition duration-500">
              <div>
                <figure className="px-10 pt-10">
                  <GiMoneyStack size="6rem" color="grey" />
                </figure>
              </div>
              <div className="card-body items-center text-center">
                <div>
                  <h2 className="card-title text-gray-800">Seguro</h2>
                </div>
                <div>
                  <p className="text-gray-600">
                    El Cliente entregará el capital asociado a la compra del
                    inmueble una vez se haya acreditado la adjudicación a su
                    nombre, a la instancia que corresponda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AuctionProcess;
