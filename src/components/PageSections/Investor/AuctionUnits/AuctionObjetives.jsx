import React, { useState } from 'react';
import ContactFormServices from '../../../../services/ContactFormServices';
import ToastifyComponent from '../../../Toastify/ToastifyComponent';
import Button from '../../../Button/Button';
import { toast } from 'react-toastify';
import { realtorData } from '../../../../constants/consts/realtor';
import { iconsList } from '../../../Icons/index';
import { Objetives } from '../../../../components/Card/Objetives';
import { ObjetivesAuctionData } from '../../../../data/index';
import { Fade } from 'react-awesome-reveal';



const AuctionObjetives = () => {

    /* Iconos a ocupar */
    const {
        TbSquareRoundedNumber1Filled,
        TbSquareRoundedNumber2Filled,
        TbSquareRoundedNumber3Filled,
        TbSquareRoundedNumber4Filled,
    } = iconsList;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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

    const handlePhone = (phone) => {
        setFormData({
            ...formData,
            phone: phone,
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

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        if (
            [
                formData?.name,
                formData?.email,
                formData?.phone,
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
            const response = await ContactFormServices.sendContactForm(
                formData?.name,
                formData?.email,
                formData?.phone,
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
        <div className=''>
            <Fade delay={300} direction='left'>
                <div className="grid grid-cols-1 md:grid-cols-1 2xl:flex flex-row">
                    <div className="flex items-center justify-center ml-8 hover:scale-110 transition duration-500">
                        <h2 className="text-6xl font-bold text-black text-left pl-8">
                            ¡Invertir es así de fácil!
                        </h2>
                    </div>

                    <div className="container mx-auto pl-8 ">
                        <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2 justify-center">
                            {/* Section map*/}
                            {ObjetivesAuctionData.length > 0
                                ? ObjetivesAuctionData.map((e) => (
                                    <Objetives key={e.id} data={e} />
                                ))
                                : null}
                        </div>
                    </div>
                </div>
            </Fade>

            <div className="flex flex-col justify-center items-center min-h-screen  mt-10 bg-[url('https://dummyimage.com/1920x1080/fce58a/fce58a')] ">
                <h2 className="text-4xl font-bold mb-4 text-center">
                    Te ayudamos a elegir la mejor opción de inversión para ti
                </h2>

                <h2 className="text-lg text-gray-600 mb-8 text-center">
                    Déjanos tus datos y trabajaremos juntos para encontrar la mejor
                    alternativa de inversión para ti.
                </h2>

                <form name='FormsData' onSubmit={handleSubmit} className="w-full max-w-md ">
                    <div className="mb-8 shadow border-l-gray-600 rounded-3xl">
                        <input
                            className="bg-white bg-opacity-60  backdrop-filter backdrop-blur-md  shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Nombre y apellidos"
                            name="user_name"
                            id="name"
                            value={formData?.name}
                            onChange={(ev) => handleName(ev.target.value)}

                        />
                    </div>

                    <div className="mb-8 shadow border-l-gray-600 rounded">
                        <input
                            className="bg-white  bg-opacity-60  backdrop-filter backdrop-blur-md  shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            name="user_email"
                            id="user_email"
                            placeholder="Email"
                            value={formData?.email}
                            onChange={(ev) => handleEmail(ev.target.value)}
                        />
                    </div>

                    <div className="mb-8 shadow border-l-gray-600 rounded">
                        <input
                            className="bg-white  bg-opacity-60  backdrop-filter backdrop-blur-md  shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="user_phone"
                            id="user_phone"
                            placeholder="Telefono"
                            pattern="[0-9]{9}"
                            maxLength="9"
                            value={formData?.phone}
                            onChange={(ev) => handlePhone(ev.target.value)}
                        />

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

                    <div className="flex items-center justify-center">
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
        </div>
    )
}

export default AuctionObjetives