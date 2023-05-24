import React, { useState } from 'react';
import Button from '../Button/Button';
import { iconsList } from '../Icons';
import ContactFormServices from '../../services/ContactFormServices';
import ToastifyComponent from '../Toastify/ToastifyComponent';
import { toast } from 'react-toastify';
import { realtorData } from '../../constants/consts/realtor';

const reasons = [
  {
    id: 1,
    name: 'Soy Inversionista',
  },
  {
    id: 2,
    name: 'Soy Corredor',
  },
  {
    id: 3,
    name: 'Soy Propietario',
  },
];

const Contact = () => {
  const { FaUserAlt, FiMail } = iconsList;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
    terms: false,
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    allFieldRequierd: '',
    serverEmailError: '',
  });

  /** Handle Form Data inputs */
  /** Update Name */
  const handleName = (name) => {
    setFormData({
      ...formData,
      name: name,
    });
  };

  /** Update Email */
  const handleEmail = (email) => {
    setFormData({
      ...formData,
      email: email,
    });
  };

  /** Update Reason */
  const handleReason = (ev) => {
    setFormData({
      ...formData,
      reason: ev.target.value,
    });
  };

  const handleMessage = (ev) => {
    setFormData({
      ...formData,
      message: ev.target.value,
    });
  };

  /** Update CHECKBOX */
  const handleVerification = (ev) => {
    setFormData({
      ...formData,
      terms: ev.target.checked,
    });
  };

  /** On toast success */
  const showToastSuccessMsg = (msg) => {
    toast.success(msg, {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  /** On toast error */
  const showToastErrorMsg = (msg) => {
    toast.error(msg, {
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  console.log(formData);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (
      [
        formData?.name,
        formData?.email,
        formData?.reason,
        formData?.message,
      ].includes('') ||
      formData.terms === false
    ) {
      showToastErrorMsg(
        'Todos los campos son obligatorios, y debes aceptar los terminos y condiciones'
      );
      return;
    }

    try {
      setLoading(true);
      const response = await ContactFormServices.sendContactAboutForm(
        formData?.name,
        formData?.email,
        formData?.reason,
        formData?.message,
        realtorData?.email
      );

      if ((await response.success) === 'true') {
        setLoading(false);
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError: '',
        });
        showToastSuccessMsg(
          `Solicitud enviada exitosamente, dentro de poco de contactaremos`
        );
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      }
    } catch (error) {
      showToastErrorMsg('Ha ocurrido un error al enviar el formulario');
      console.log('error', error);
    }
  };

  return (
    <div className="bg-gray-200 rounded-[50px] p-4 my-10 xl:py-5 xl:px-10 xl:m-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 py-3">
          Contáctanos para más información
        </h2>
      </div>
      <form name="FormData" onSubmit={handleSubmit} className="py-10">
        <div className="flex mb-5">
          <div className="w-1/5 flex justify-start items-center">
            <i className="p-4 rounded-full bg-white ml-2 xl:ml-8">
              <FaUserAlt className="text-xl text-gray-300" />
            </i>
          </div>

          <div className="w-4/6 flex justify-center items-center flex-col">
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              id="name"
              value={formData?.name}
              onChange={(ev) => handleName(ev.target.value)}
              className="w-full p-3 rounded-full bg-white text-lg text-gray-900 placeholder:text-gray-500 placeholder:font-bold outline-none focus:outline-none"
            />
          </div>
        </div>

        <div className="flex mb-5">
          <div className="w-1/5 flex justify-start items-center">
            <i className="p-4 rounded-full bg-white ml-2 xl:ml-8">
              <FiMail className="text-xl text-gray-300" />
            </i>
          </div>
          <div className="w-4/6 flex justify-center items-center flex-col">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo electrónico"
              className=" w-full p-3 rounded-full bg-white text-lg text-gray-900 placeholder:text-gray-500 placeholder:font-bold outline-none"
              value={formData?.email}
              onChange={(ev) => handleEmail(ev.target.value)}
            />
          </div>
        </div>

        <div className="my-5 py-3 flex justify-center items-center">
          {reasons.map((reason) => (
            <label key={reason.id} className="flex items-center mx-1">
              <input
                type="checkbox"
                id="reason"
                name="reason"
                value={reason.name}
                checked={formData?.reason === reason.name}
                onChange={handleReason}
                className="h-[1.125rem] mx-2 w-[1.125rem] mr-2 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-orange-500 dark:checked:bg-orange-500"
              />
              {reason.name}
            </label>
          ))}
        </div>

        <div className="flex mb-5">
          <div className="flex justify-start items-center"></div>
          <div className="w-[90%] mx-auto flex justify-center items-center flex-col">
            <textarea
              name="message"
              id="message"
              placeholder="Escriba su mensaje"
              value={formData?.message}
              onChange={handleMessage}
              className="textarea textarea-bordered  bg-white textarea-lg w-full h-full rounded-[20px] outline-none focus:outline-none"
            ></textarea>
          </div>
        </div>

        <div className="w-5/6 mx-auto my-14 mb-10 flex items-center justify-center">
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-orange-500 dark:checked:bg-orange-500"
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData?.terms}
              onChange={handleVerification}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="terms"
            >
              Al continuar estás aceptando los términos y condiciones y la
              política de privacidad
            </label>
          </div>
        </div>

        <div className="flex mb-5 justify-center items-center">
          <Button
            value="Send"
            type="submit"
            className="bg-orange-400  text-white pl-2 pr-4 py-2 hover:bg-orange-600 w-2/4 rounded-lg"
          >
            <div className="text-xl font-medium capitalize w-5/6 mx-auto text-center">
              Enviar
            </div>
          </Button>
        </div>
        <ToastifyComponent />
      </form>
    </div>
  );
};

export default Contact;
