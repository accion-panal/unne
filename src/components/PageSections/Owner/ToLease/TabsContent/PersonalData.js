import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import ToastComponent from '../../../../Toastify/ToastifyComponent';
import Alert from '../../../../Alert/Alert';
import Button from '../../../../Button/Button';
import { useValue } from '../../../../../context/ContextProvider';
import ContactFormServices from '../../../../../services/ContactFormServices';
import { generateValidationCode } from '../../../../../utils';

const PersonalData = ({
  formData,
  setFormData,
  sendCodeStatus,
  setSendCodeStatus,
}) => {
  const { state, dispatch } = useValue();
  const form = useRef();
  const [isDisabled, setIsDisabled] = useState(true);
  const [verificationCode, setVerificationCode] = useState(0);

  const [errorMsg, setErrorMsg] = useState({
    allFieldRequierd: '',
    serverEmailError: '',
    networkError: '',
  });
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  /** Handle Form Data inputs */
  /** Update Name */
  const handleName = (name) => {
    setFormData({
      ...formData,
      personalData: {
        ...formData.personalData,
        name: name,
      },
    });
  };

  /** Update Email */
  const handleEmail = (email) => {
    setFormData({
      ...formData,
      personalData: {
        ...formData.personalData,
        email: email,
      },
    });
  };

  /** Update Phone */
  const handlePhone = (phone) => {
    setFormData({
      ...formData,
      personalData: {
        ...formData.personalData,
        phone: phone,
      },
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

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      setLoading(true);
      const response = await ContactFormServices.sendFormToUser(
        formData?.personalData?.name,
        formData?.personalData.email,
        formData?.personalData?.phone,
        state.verificationCode.code
      );

      if (response.success === 'false') {
        showToastErrorMsg(
          'Tu correo necesita activación, enviaremos un link de activación de tu email'
        );
        setLoading(false);
        return;
      }

      if (response.success === 'true') {
        setLoading(false);
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError: '',
        });
        showToastSuccessMsg('Se enviara un código de validación a su email')
        setSendCodeStatus(true);
        setTimeout(() => {
          setSuccessMsg('');
        }, 4000);
      }
    } catch (error) {
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    dispatch({
      type: 'UPDATE_VERIFICATION_CODE',
      payload: {
        code: generateValidationCode(),
      },
    });
  }, []);

  useEffect(() => {
    if (isDisabled) {
      setIsDisabled(false);
    }
  }, [isDisabled]);

  return (
    <div className="w-full">
      <ToastComponent />

      <div className="bg-gray-200 px-4 xl:px-10 rounded-sm w-full py-3.5 border-b border-gray-200">
        <h3 className="text-lg xl:text-lg font-bold text-gray-500">
          Datos personales
        </h3>
      </div>

      <form
        name="FormSubmit"
        onSubmit={handleSubmit}
        className="w-full px-4 xl:px-10"
      >
        <div className="w-full my-7">
          <label className="text-gray-500 font-bold">Nombre y Apellidos</label>
          <div className="flex mt-3">
            <input
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
              type="text"
              placeholder="Ingres tu nombre y apellidos"
              id="name"
              name="name"
              value={formData?.personalData?.name}
              onChange={(ev) => handleName(ev.target.value)}
            />
          </div>
        </div>
        <div className="w-full my-7">
          <label className="text-gray-500 font-bold">Email</label>
          <div className="flex mt-3">
            <input
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
              type="email"
              placeholder="Ej: mi.correo@email.com"
              id="email"
              name="email"
              value={formData?.personalData?.email}
              onChange={(ev) => handleEmail(ev.target.value)}
            />
          </div>
        </div>
        <div className="w-full my-7">
          <label className="text-gray-500 font-bold">Teléfono</label>
          <div className="flex mt-3">
            <input
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
              type="phone"
              placeholder="Ej: 569 XXXXXXXX"
              id="phone"
              name="phone"
              maxLength={9}
              value={formData?.personalData?.phone}
              onChange={(ev) => handlePhone(ev.target.value)}
            />
          </div>
        </div>

        <div
          style={{
            display: 'none',
          }}
        >
          <input
            type="text"
            id="verificationCode"
            name="verificationCode"
            value={state.verificationCode.code}
            onChange={() => setVerificationCode(state.verificationCode.code)}
          />
        </div>

        {successMsg && (
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
            role="alert"
          >
            {successMsg}
          </div>
        )}

        <div className="w-full flex items-center justify-center my-10">
          <div className="mt-8 flex justify-center">
            <Button
              type="submit"
              className="block w-[200px] p-4 my-1 uppercase font-semibold text-md rounded-full hover:shadow-sm transition ease-in-out duration-300 text-white bg-orange-500 hover:bg-orange-600"
            >
              <span className="max-h-10">
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-4 h-4 text-gray-100 animate-spin fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Cargando...</span>
                  </div>
                ) : (
                  'Enviar código'
                )}
              </span>
            </Button>
          </div>
          {/* <p>{state.verificationCode.code}</p> */}
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
