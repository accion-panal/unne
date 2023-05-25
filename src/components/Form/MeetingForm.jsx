import React, { useState, useRef } from 'react';
import Button from '../Button/Button';


const MeetingForm = ({ title, subtitle, DataEmail }) => {

    /*const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        date: '',
        time: '',
    });
    
        /** Handle Form Data inputs */
    /** Update Name 
    const handleName = (name) => {
        setFormData({
            ...formData,
            name: name,
        });
    };
    /** Update Lastname 
    const handleLastname = (lastname) => {
        setFormData({
            ...formData,
            lastname: lastname,
        });
    };
    /** Update Email
    const handleEmail = (email) => {
        setFormData({
            ...formData,
            email: email,
        });
    };

    /** Update Phone 
    const handlePhone = (phone) => {
        setFormData({
            ...formData,
            phone: phone,
        });
    };
    /** Update Date 
    const handleDate = (date) => {
        setFormData({
            ...formData,
            date: date,
        });
    };
    /** Update Phone 
    const handleTime = (time) => {
        setFormData({
            ...formData,
            time: time,
        });
    };

    const onSubmit = (data) => {
        // console.log(data);
    };

    /** Toast Messages */
    /** On toast success 
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

    /** On toast error 
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


    const { ServiceID, TemplateID, PublicKEY } = DataEmail;
    const form = useRef();
    const sendEmail = async (e) => {
        e.preventDefault();
        /* console.log(formData) 
        const serviceid = ServiceID;
        const templateid = TemplateID;
        const publickey = PublicKEY;

        if (
            [
                formData?.name,
                formData?.lastname,
                formData?.email,
                formData?.phone,
                formData?.date,
                formData?.time,
            ].includes('')
        ) {
            showToastErrorMsg('Todos los campos son obligatorios');
            return;
        }


        try {
            const response = emailjs.sendForm(
                serviceid,
                templateid,
                form.current,
                publickey
            );
            const responseStatus = await response;
            responseStatus.status === 200 &&
                showToastSuccessMsg(
                    `Mensaje enviado con éxito, revise el correo | ${formData.email}`
                );
            console.log('Enviando...');

        } catch (error) {
            /* console.log(error); 
            showToastErrorMsg('Ha ocurrido un error al enviar el formulario');
        }

    };
 */


    return (
        <div className="bg-gray-200 rounded-[25px] p-4 my-10 xl:py-5 xl:px-10 xl:m-0 w-full ">{/* xl:w-3/5 */}
            <div className="text-center">
                <h2 className="text-4xl font-bold py-2">{title}</h2>
                {subtitle && (
                    <p className="text-xl font-semibold text-gray-700">{subtitle}</p>
                )}
            </div>
            <form className="py-6 px-4">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-3 py-5 max-sm:divide-y-2 max-sm:divide-[#d8d8da]'>
                    <div className="max-sm:py-2">
                        <label htmlFor="name" className='block text-base font-semibold'>Nombre:</label>
                        <input
                            type="text"
                            className="block w-full rounded-xl bg-slate-50 py-2 px-2 outline-none"
                            name='user_name'
                        />

                    </div>

                    <div className="max-sm:py-2">
                        <label htmlFor="lastname" className='block text-base font-semibold'>Apellido:</label>
                        <input
                            type="text"
                            className="block w-full rounded-xl bg-slate-50 py-2 px-2 outline-none"
                            name='user_lastname'
                        />

                    </div>

                    <div className="max-sm:py-2">
                        <label htmlFor="email" className='block text-base font-semibold'>Email:</label>
                        <input
                            type="email"
                            className="block w-full rounded-xl bg-slate-50 py-2 px-2 outline-none"
                            name='user_email'
                        />

                    </div>

                    <div className="max-sm:py-2">
                        <label htmlFor="phone" className='block text-base font-semibold'>Telefono:</label>
                        <input
                            className="block w-full rounded-xl bg-slate-50 py-2 px-2 outline-none"
                            name='user_phone'
                            placeholder='Ej: 9 9999 9999'
                            type="text"
                            pattern="[0-9]{9}"
                            maxLength="9"
                        />

                    </div>
                    <div className="max-sm:py-2">
                        <label htmlFor="date" className='block text-base font-semibold'>Fecha:</label>
                        <input
                            type="date"
                            className="block w-full rounded-xl py-2 px-2 bg-slate-50 outline-none"
                            name='user_date'
                        />

                    </div>
                    <div className="max-sm:py-2">
                        <label htmlFor="tel" className='block text-base font-semibold'>Hora:</label>
                        <input
                            type="time"
                            className="block w-full rounded-xl bg-slate-50 py-2 px-2 outline-none"
                            name='user_time'
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Button
                        type="submit"
                        className="bg-orange-500 rounded-full text-white px-4 py-1 hover:bg-orange-600"
                    >
                        <div className="text-lg font-medium capitalize mx-auto">
                            Agenda una reunión
                        </div>
                    </Button>
                </div>
            </form >
        </div >
    );
}

export default MeetingForm
