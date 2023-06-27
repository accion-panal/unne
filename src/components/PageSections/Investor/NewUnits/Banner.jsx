import React from 'react';
import MeetingForm from '../../../../components/Form/MeetingForm';

const banner = () => {
  /*   const DataEmailJS = [
          {
              ServiceID: "service_j0tf7sp",
              TemplateID: "template_nm2o4an",
              PublicKEY: "ZWanVNmLr-iX_Op5K",
          },
      ]; */

  const titleFont = 'text-3xl';
  const subTitleFont = '';

  return (
    <div id="meeting-section" className="flex justify-center py-5 mr-4 ml-4">
      <div className="collapse trasition duration-300 ease-in-out">
        <input type="checkbox" className="peer" />
        <div className="collapse-title px-0 py-0 w-full bg-[#FEF4DE] max-w-4xl overflow-hidden flex flex-col sm:flex-row">
          <div className="bg-[url('https://fastly.picsum.photos/id/445/1920/1080.jpg?hmac=44gXMs9bLf5UIfUbqBaNQYr0ry9r2a9Tbj8OLYhcbx0')] max-w-xs w-96 h-full bg-cover"></div>
          <div className="flex flex-col items-center px-5 pt-6 pb-4 text-center max-w-xl">
            <h3 className={` ${titleFont} font-bold text-gray-800`}>
              Te ayudamos con el financiamiento para tu credito Hipotecario
            </h3>
            <p
              className={`${subTitleFont} font-semibold max-w-sm text-gray-600`}
            >
              Dejanos tus datos y trabajaremos juntos para encontrar la mejor
              alternativa para ti
            </p>
            <button className="peer bg-orange-400 w-max mt-5 text-white py-2 px-6 rounded-full hover:cursor-pointer hover:bg-orange-300 hover:shadow-xl trasition duration-300 ease-in-out">
              Agenda un reunion
            </button>
          </div>
        </div>
        <div className="collapse-content pt-4">
          {/*  {DataEmailJS?.length > 0 && DataEmailJS?.map((e) => (<MeetingForm key={e.ServiceID} title="¿Quieres agendar una reunión con nosotros?" subtitle="Un equipo de expertos se pondra en contacto contigo" DataEmail={e} />))} */}
          <MeetingForm
            title="¿Quieres agendar una reunión con nosotros?"
            subtitle="Un equipo de expertos se pondra en contacto contigo"
          />
        </div>
      </div>
    </div>
  );
};

export default banner;
