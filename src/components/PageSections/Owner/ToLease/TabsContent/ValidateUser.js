import React, { useEffect, useRef, useState } from 'react';
import ToastComponent from '../../../../Toastify/ToastifyComponent';
import Button from '../../../../Button/Button';
import { toast } from 'react-toastify';
import { useValue } from '../../../../../context/ContextProvider';
import ContactFormServices from '../../../../../services/ContactFormServices';
import { realtorData } from '../../../../../constants/consts/realtor';
import ContactApiFormServices from '../../../../../services/ContactApiForm';
import { companyForm } from '../../../../../constants/consts/company';

function ValidateUser({
  formData,
  setFormData,
  sendCodeStatusValidation,
  setSendCodeStatusValidation,
}) {
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
        formData?.personalData?.email,
        formData?.personalData?.phone,
        formData?.propertyData?.propertyType,
        formData?.propertyData?.bedrooms,
        formData?.propertyData?.bathrooms,
        formData?.propertyData?.surfaceM2,
        formData?.propertyData?.commonExpenses,
        formData?.propertyData?.parkingLots,
        formData?.propertyData?.haveWarehouse ? 'Si' : 'No',
        formData?.propertyData?.address,
        realtorData?.email
      );

      const formDataFormatted = {
        companyId: companyForm.id,
        typeProperty: formData?.propertyData?.propertyType,
        action: 'Quiero Arrendar',
        fullName: formData?.personalData?.name,
        email: formData?.personalData?.email,
        phone: formData?.personalData?.phone,
        region: formData?.propertyData?.address,
        commune: formData?.propertyData?.address,
        address: formData?.propertyData?.address,
        landArea: 'No definida...',
        termsAndConditions: true,
      };

      const apiResponse = await ContactApiFormServices.addContactForm2(
        formDataFormatted
      );

      if (response?.success === 'false') {
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError:
            'Se necesita activación de email del administrador/a',
        });
        setLoading(false);
        return;
      }

      if (response.success === 'true' && apiResponse.status === 'ok') {
        setSendCodeStatusValidation(true);
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
                'Enviar Solicitud'
              )}
            </Button>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default ValidateUser;
