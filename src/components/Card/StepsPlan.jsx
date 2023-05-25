import React from 'react';

const StepsPlan = ({ backgroundColor, data }) => {
    const { id, span, desc } = data;
    return (
        <div
            className={`${backgroundColor} text-center py-6 px-4 xl:my-5 xl:mx-10 rounded-lg cursor-pointer trasition duration-300 ease-in-out`}
        >
            <span className="rounded-full py-2 px-5 relative xl:text-3xl font-bold bg-orange-500 text-white">
                {id}
            </span>
            <p className="mt-4 mb-2 text-lg xl:text-xl text-gray-700">
                <span className="font-bold">{span}</span> {desc}
            </p>
        </div>
    );
};

export default StepsPlan;
