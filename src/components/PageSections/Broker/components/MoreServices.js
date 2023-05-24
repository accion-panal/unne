import React from 'react';
import ListServices from './ListServices';
import { MoreServicesData } from '../../../../data';
import { Fade } from 'react-awesome-reveal';

const MoreServices = () => {
  function ShowSection() {
    var x = document.getElementById('MoreServices');
    if (x.style.display === 'block') {
      x.style.display = 'none';
      x.style.transition = 'all 2s';
    } else {
      x.style.display = 'block';
      x.style.transition = 'all 2s';
    }
  }

  const titleFont = 'text-3xl';
  const listFont = '';

  return (
    <div>
      <div className="flex justify-center pb-1 pt-5 mb-10">
        <button
          className="text-white text-xl py-3 px-6 bg-orange-600 border-none rounded-full hover:bg-orange-700"
          onClick={ShowSection}
        >
          Ver más servicios
        </button>
      </div>
      <Fade delay={500}>
        <div
          id="MoreServices"
          className="hidden mx-5 lg:mx-20 2xl:mx-72 mt-32 mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-0">
            {MoreServicesData?.length > 0 &&
              MoreServicesData?.map((e) => (
                <ListServices
                  key={e.id}
                  data={e}
                  titleFont={titleFont}
                  listFont={listFont}
                />
              ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default MoreServices;
