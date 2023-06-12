import React from 'react'

const WhyUnneList = ({ data, subFont }) => {

    const { id, name, icon } = data;
    return (
        <div className="">
            <li className=' list-none relative max-[333px]:w-[250px] w-[300px] sm:w-[450px] lg:w-[480px] min-w-full max-w-[45rem] pt-6 pb-2 px-8 hover:shadow-2xl shadow-xl rounded-2xl overflow-hidden bg-white min-h-[120px]
                before:content-[""] before:block before:w-full before:h-4 before:absolute before:top-0 before:left-0 before:bg-[#FAB916]'>
                <h3 className={`w-full text-center align-baseline ${subFont} font-bold m-0 text-[#fb923c]`}>
                    {name}
                </h3>
            </li>
        </div>
    )
}

export default WhyUnneList
