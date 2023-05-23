import React from 'react';
import Button from '../Button/Button';
import { iconsList } from '../Icons';

const Contact = () => {
  const { FaUserAlt, FiMail } = iconsList;
  return (
    <div className="bg-gray-200 rounded-[50px] p-4 my-10 xl:py-5 xl:px-10 xl:m-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 py-3">
          Contáctanos para más información
        </h2>
      </div>
      <form className="py-10">
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
              name="user_name"
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
              name="user_email"
              placeholder="Correo electrónico"
              className="w-full p-3 rounded-full bg-white text-lg text-gray-900 placeholder:text-gray-500 placeholder:font-bold outline-none focus:outline-none"
              // onChange={(e) => handleEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-5/6 mx-auto my-14 mb-10">
          <div className="w-full flex justify-center gap-10">
            <label>
              <input
                className="h-[1.125rem] w-[1.125rem] mr-2 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-orange-500 dark:checked:bg-orange-500"
                type="checkbox"
                name="toolmakerID"
                value="inversionista"
                id="toolmakerID"
                // checked={selectedCheckbox === 'inversionista'}
                // onChange={handleCheckboxChange}
              />
              Soy inversionista
            </label>

            <label>
              <input
                className="h-[1.125rem] w-[1.125rem] mr-2 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-orange-500 dark:checked:bg-orange-500"
                type="checkbox"
                name="toolmakerID"
                value="Corredor"
                id="toolmakerID"
                // checked={selectedCheckbox === 'Corredor'}
                // onChange={handleCheckboxChange}
              />
              Soy Corredor
            </label>

            <label>
              <input
                className="h-[1.125rem] w-[1.125rem] mr-2 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-orange-500 dark:checked:bg-orange-500"
                type="checkbox"
                name="toolmakerID"
                value="propietario"
                id="toolmakerID"
                // checked={selectedCheckbox === 'propietario'}
                // onChange={handleCheckboxChange}
              />
              Soy propietario
            </label>
          </div>
        </div>

        <div className="flex mb-5">
          <div className="flex justify-start items-center"></div>
          <div className="w-[90%] mx-auto flex justify-center items-center flex-col">
            <textarea
              name="message"
              placeholder="Escriba su mensaje"
              className="textarea textarea-bordered  bg-white textarea-lg w-full h-full rounded-[20px] outline-none focus:outline-none"
              // onChange={(e) => handleMessage(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="w-5/6 mx-auto my-14 mb-10 flex items-center justify-center">
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-orange-500 dark:checked:bg-orange-500"
              type="checkbox"
              id="checkboxTerms"
              // value={termsCheck}
              // onChange={handleVerification}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="checkboxTerms"
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
        {/* <ToastComponent /> */}
      </form>
    </div>
  );
};

export default Contact;
