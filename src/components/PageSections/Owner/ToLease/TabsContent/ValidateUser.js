import React, { useEffect, useRef, useState } from 'react';
import ToastComponent from '../../../../Toastify/ToastifyComponent';
import Button from '../../../../Button/Button';
import { toast } from 'react-toastify';
import { useValue } from '../../../../../context/ContextProvider';
import ContactFormServices from '../../../../../services/ContactFormServices';
import { realtorData } from '../../../../../constants/consts/realtor';

function ValidateUser({ formData, setFormData,sendCodeStatusValidation,setSendCodeStatusValidation }) {
  const { state } = useValue();
  const form = useRef();
  const formToEjecutive = useRef();
  const [inputValues, setInputValues] = useState(formData.validateUser);
  const [isValidCode, setIsValidCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    allFieldRequierd: '',
    serverEmailError: '',
  });

  const handleInputChange = (event, index) => {
    const newValues = [...inputValues];
    newValues[index] = event.target.value;
    setInputValues(newValues);
    setFormData({
      ...formData,
      validateUser: newValues,
    });
    if (index < 3 && event.target.value !== '') {
      document.getElementById(`input-${index + 1}`).focus();
    }
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

  const handleVerificationCode = () => {
    const validationCodeString = `${inputValues[0]}${inputValues[1]}${inputValues[2]}${inputValues[3]}`;
    const isValidCode = validationCodeString === state?.verificationCode?.code;
    setIsValidCode(isValidCode);
    return isValidCode;
  };

  const validateVerificationCode = (ev) => {
    ev.preventDefault();

    handleVerificationCode()
      ? showToastSuccessMsg(`Verificacion realizada con exito`)
      : showToastErrorMsg('Código no válido');
  };

  const sendForm = async (ev) => {
    ev.preventDefault();

    try {
      setLoading(true);
      const response = await ContactFormServices.sendFormToRealtor(
        'Unne',
        formData?.personalData?.name,
        formData?.personalData?.phone,
        formData?.personalData?.email,
        realtorData?.email,
        formData?.propertyData?.propertyType,
        formData?.propertyData?.bedrooms,
        formData?.propertyData?.bathrooms,
        formData?.propertyData?.surfaceM2,
        formData?.propertyData?.commonExpenses,
        formData?.propertyData?.parkingLots,
        formData?.propertyData?.haveWarehouse ? 'Si' : 'No',
        formData?.propertyData?.address
      );

      if ((await response.success) === 'true') {
        setSendCodeStatusValidation(true)
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
      console.log('error', error);
    }
  };

  useEffect(() => {
    isValidCode ? setIsValidCode(true) : setIsValidCode(false);
  }, [isValidCode]);

  return (
    <div className="w-full xl:w-4/6 mx-auto my-14">
      <ToastComponent />
      <h3 className="text-2xl xl:text-4xl font-bold text-center mb-5">
        ¡Excelente! Solo falta validar Tu email!
      </h3>
      <form ref={form} onSubmit={validateVerificationCode}>
        <div className="grid grid-cols-4 g-0">
          <div className="p-2.5 xl:p-1.5 mx-auto w-full flex justify-center items-center">
            <input
              type="text"
              id="input-0"
              value={inputValues[0]}
              onChange={(event) => handleInputChange(event, 0)}
              autoFocus
              className="w-full py-4 xl:py-8 text-center text-xl xl:text-3xl bg-white rounded-2xl border-gray-300 outline-none focus:outline-none"
            />
          </div>

          <div className="p-2.5 xl:p-1.5 mx-auto w-full flex justify-center items-center">
            <input
              type="text"
              id="input-1"
              value={inputValues[1]}
              onChange={(event) => handleInputChange(event, 1)}
              className="w-full py-4 xl:py-8 text-center text-xl xl:text-3xl bg-white rounded-2xl border-gray-300 outline-none focus:outline-none"
            />
          </div>

          <div className="p-2.5 xl:p-1.5 mx-auto w-full flex justify-center items-center">
            <input
              type="text"
              id="input-2"
              value={inputValues[2]}
              onChange={(event) => handleInputChange(event, 2)}
              className="w-full py-4 xl:py-8 text-center text-xl xl:text-3xl bg-white rounded-2xl border-gray-300 outline-none focus:outline-none"
            />
          </div>

          <div className="p-2.5 xl:p-1.5 mx-auto w-full flex justify-center items-center">
            <input
              type="text"
              id="input-3"
              value={inputValues[3]}
              onChange={(event) => handleInputChange(event, 3)}
              className="w-full py-4 xl:py-8 text-center text-xl xl:text-3xl bg-white rounded-2xl border-gray-300 outline-none focus:outline-none"
            />
          </div>
        </div>

        {isValidCode ? null : (
          <div className="w-full mx-auto flex justify-center my-10">
            <Button
              type="submit"
              id="submit-button"
              className="bg-orange-500 hover:bg-orange-600 text-white w-4/6 text-2xl text-center rounded-full py-1 pb-2 px-4"
            >
              Validar código
            </Button>
          </div>
        )}
      </form>

      {/* SEND FORM TO REALTOR */}
      <form name="FormSubmit" ref={formToEjecutive} onSubmit={sendForm}>
        <div className="w-full mx-auto justify-center my-10">
          {isValidCode ? (
            <Button
              type="submit"
              id="submit-button"
              className="mx-auto flex justify-center my-10 bg-orange-500 w-4/6 text-white text-2xl text-center rounded-full py-1 pb-2 px-4 hover:bg-orange-600"
            >
              Enviar Solicitud
            </Button>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default ValidateUser;
