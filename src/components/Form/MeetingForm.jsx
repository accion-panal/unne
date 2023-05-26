import React, { useState, useRef } from 'react';
import Button from '../Button/Button';
import ContactFormServices from '../../services/ContactFormServices';
import ToastifyComponent from '../Toastify/ToastifyComponent';
import { toast } from 'react-toastify';
import { realtorData } from '../../constants/consts/realtor';


const MeetingForm = ({ title, subtitle, DataEmail }) => {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        date: '',
        time: '',
    });

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState({
        allFieldRequierd: '',
        serverEmailError: '',
    });


    const handleName = (name) => {
        setFormData({
            ...formData,
            name: name,
        });
    };

    const handleLastname = (lastname) => {
        setFormData({
            ...formData,
            lastname: lastname,
        });
    };

    const handleEmail = (email) => {
        setFormData({
            ...formData,
            email: email,
        });
    };


    const handlePhone = (phone) => {
        setFormData({
            ...formData,
            phone: phone,
        });
    };

    const handleDate = (date) => {
        setFormData({
            ...formData,
            date: date,
        });
    };

    const handleTime = (time) => {
        setFormData({
            ...formData,
            time: time,
        });
    };

    const handleVerification = (ev) => {
        setFormData({
            ...formData,
            terms: ev.target.checked,
        });
    };

    const onSubmit = (data) => {
        // console.log(data);
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

        if (
            [
                formData?.name,
                formData?.lastname,
                formData?.email,
                formData?.phone,
                formData?.date,
                formData?.time,
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
            const response = await ContactFormServices.sendContactUnidad(
                formData?.name,
                formData?.lastname,
                formData?.email,
                formData?.phone,
                formData?.date,
                formData?.time,
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
        <div className="bg-gray-200 rounded-[25px] p-4 my-10 xl:py-5 xl:px-10 xl:m-0 w-full ">{/* xl:w-3/5 */}
            <div className="text-center">
                <h2 className="text-4xl font-bold py-2">{title}</h2>
                {subtitle && (
                    <p className="text-xl font-semibold text-gray-700">{subtitle}</p>
                )}
            </div>
            <form name='FormsData' onSubmit={handleSubmit} className="py-6 px-4">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-3 py-5 max-sm:divide-y-2 max-sm:divide-[#d8d8da]'>
                    <div className="max-sm:py-2">
                        <label htmlFor="name" className='block text-base font-semibold'>Nombre:</label>
                        <input
                            className="block w-full rounded-xl bg-slate-50 py-2 px-2 outline-none"
                            type="text"
                            placeholder="Nombre"
                            name='user_name'
                            id="name"
                            value={formData?.name}
                            onChange={(ev) => handleName(ev.target.value)}
                        />

                    </div>

                    <div className="max-sm:py-2">
                        <label htmlFor="lastname" className='block text-base font-semibold'>Apellido:</label>
                        <input
                            className="block w-full rounded-xl bg-slate-50 py-2 px-2 outline-none"
                            type="text"
                            placeholder="Apellido"
                            name='user_lastname'
                            id="lastname"
                            value={formData?.lastname}
                            onChange={(ev) => handleLastname(ev.target.value)}
                        />

                    </div>

                    <div className="max-sm:py-2">
                        <label htmlFor="email" className='block text-base font-semibold'>Email:</label>
                        <input
                            className="block w-full rounded-xl bg-slate-50 py-2 px-2 outline-none"
                            type="email"
                            placeholder="email"
                            name='user_email'
                            id="email"
                            value={formData?.email}
                            onChange={(ev) => handleEmail(ev.target.value)}
                        />

                    </div>

                    <div className="max-sm:py-2">
                        <label htmlFor="phone" className='block text-base font-semibold'>Telefono:</label>
                        <input
                            className="block w-full rounded-xl bg-slate-50 py-2 px-2 outline-none"
                            type="text"
                            placeholder='Ej: 9 9999 9999'
                            name='user_phone'
                            id="phone"
                            value={formData?.phone}
                            onChange={(ev) => handlePhone(ev.target.value)}
                            pattern="[0-9]{9}"
                            maxLength="9"
                        />

                    </div>
                    <div className="max-sm:py-2">
                        <label htmlFor="date" className='block text-base font-semibold'>Fecha:</label>
                        <input
                            className="block w-full rounded-xl py-2 px-2 bg-slate-50 outline-none"
                            type="date"
                            name='user_date'
                            id="date"
                            value={formData?.date}
                            onChange={(ev) => handleDate(ev.target.value)}
                        />

                    </div>
                    <div className="max-sm:py-2">
                        <label htmlFor="tel" className='block text-base font-semibold'>Hora:</label>
                        <input
                            className="block w-full rounded-xl bg-slate-50 py-2 px-2 outline-none"
                            type="time"
                            name='user_time'
                            id="time"
                            value={formData?.time}
                            onChange={(ev) => handleTime(ev.target.value)}

                        />
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



                <div className="flex justify-center items-center">
                    <Button
                        value="Send"
                        type="submit"
                        className="bg-orange-500 rounded-full text-white px-4 py-1 hover:bg-orange-600"
                    >
                        <div className="text-lg font-medium capitalize mx-auto">
                            Agenda una reunión
                        </div>
                    </Button>
                    <ToastifyComponent />
                </div>
            </form >
        </div >
    );
}

export default MeetingForm
