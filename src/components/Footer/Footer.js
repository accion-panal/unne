import React from 'react';
import Button from '../Button/Button';

const Footer = () => (
  <footer className="bg-gray-100 pt-10 pb-20 xl:px-32">
    <div className="flex flex-wrap mx-4 lg:mx-0">
      <div className="w-full flex justify-center sm:justify-start items-center sm:items-start flex-col sm:w-1/2 lg:w-4/12">
        <div className="w-5/6">
          <Button
            href="/"
            className="w-96 py-2 px-3 text-xl text-center my-6 bg-orange-500 hover:bg-orange-600 hover:shadow-md"
          >
            ¿Quiénes somos?
          </Button>
          <div className="h-48">
            <p className="text-md text-gray-900 mt-5">
              Unne es una plataforma de corretaje, donde los corredores puedan
              acceder a herramientas digitales que de otro modo seria difícil de
              acceder.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center sm:justify-start items-center sm:items-start flex-col sm:w-1/2 lg:w-4/12">
        <div className="w-5/6">
          <Button
            href="/"
            className="w-96 py-2 px-3 text-xl text-center my-6 bg-orange-500 hover:bg-orange-600 hover:shadow-md"
          >
            Contacto
          </Button>
          <div className="h-56">
            <p className="text-md text-gray-800 mt-5">
              <span className="font-bold text-gray-900">Dirección:</span>{' '}
              Asturias 171, Of. 101, Las Condes, Santiago
            </p>
            <p className="text-md text-gray-800 mt-1">
              <span className="font-bold text-gray-900">Teléfono:</span> +56
              264653732
            </p>
            <p className="text-md text-gray-800 mt-1">
              <span className="font-bold text-gray-900">Correo:</span>{' '}
              contacto@unne.cl
            </p>
            <div className="d-flex flex-col text-md text-gray-800 mt-1">
              <span className="font-bold uppercase text-gray-900">
                SÍGUENOS EN:
              </span>
              <div className="flex justify-start items-center my-3">
                <a
                  href="/"
                  className="text-dark bg-orange-400 text-white hover:bg-orange-600 hover:border-orange-600 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    className="fill-current"
                  >
                    <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-dark bg-orange-400 text-white hover:bg-orange-600 hover:border-orange-600 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    className="fill-current"
                  >
                    <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-dark bg-orange-400 text-white hover:bg-orange-600 hover:border-orange-600 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    className="fill-current"
                  >
                    <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center sm:justify-start items-center sm:items-start flex-col sm:w-1/2 lg:w-4/12">
        <div className="w-5/6">
          <Button
            href="/"
            className="w-96 py-2 px-3 text-xl text-center my-6 bg-orange-500 hover:bg-orange-600 hover:shadow-md"
          >
            Menú
          </Button>
          <div className="h-48">
            <ul className="text-md text-gray-900 mt-5">
              <li>
                <a
                  href="#"
                  className="hover:underline underline-offset-4 decoration-orange-500"
                >
                  Soy propietario
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline underline-offset-4 decoration-orange-500"
                >
                  ¿Eres corredor?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline underline-offset-4 decoration-orange-500"
                >
                  Quiero invertir
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline underline-offset-4 decoration-orange-500"
                >
                  Intranet
                </a>
              </li>
            </ul>
            <p className="text-md text-gray-900 mt-5">
              Quiero saber más sobre los
              <a href="#" className="text-orange-500 hover:text-yellow-500">
                {' '}
                términos y condiciones
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
