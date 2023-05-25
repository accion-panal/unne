import BasicCard from '../../../Card/BasicCard';
import InvestToday from '../../../Card/InvestToday';
import React from 'react';

/* Data */
import { NewPropertyQualities } from '../../../../data/index';

const NewProperty = () => {
    const titleFont = 'text-4xl lg:text-5xl';
    const subFont = 'text-sm';

    const subTitleFont = '';

    return (
        <div className="">
            <div className="text-center pb-10">
                <h2 className={`${titleFont} font-bold`}>
                    Es momento de invertir en tu nueva propiedad
                </h2>
                <p className={`${subFont} pt-2 font-medium`}>
                    Invierte en Propiedades nuevas en blanco, verde o de entrega
                    inmediata, para que tu activo pueda generar ganancias luego de
                    arrendarla y con el tiempo plusvalia
                </p>
            </div>
            <div className="grid 2xl:px-48 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Section map*/}
                {NewPropertyQualities.length > 0
                    ? NewPropertyQualities.map((e) => (
                        <BasicCard key={e.id} backgroundColor="bg-[#FEF9EA]" data={e} />
                    ))
                    : null}
            </div>
            <div
                className="divider my-10 font-bold text-2xl justify-center
                              before:content-[none] md:before:content-[''] md:before:mx-6 lg:before:mx-12 xl:before:ml-24 before:bg-black 
                              after:content-[none] md:after:content-[''] md:after:mx-6 lg:after:mx-12 xl:after:mr-24 after:bg-black"
            >
                <h3 className={`${subTitleFont}`}>
                    {' '}
                    Elige en que quieres invertir hoy
                </h3>
            </div>
            <div className="flex gap-12 justify-center flex-wrap">
                <InvestToday title="departamento" href="#departamento" />
                <InvestToday title="estacionamiento" href="#estacionamientos" />
                <InvestToday title="bodega" href="#bodega" />
            </div>
        </div>
    );
};

export default NewProperty;