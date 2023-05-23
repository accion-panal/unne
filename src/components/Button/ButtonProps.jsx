import React from 'react'

const ButtonProps = ({
    className = 'text-white',
    fontSize = 'capitalize',
    sizeClass = 'px-10',
    background = 'bg-orange-600 hover:bg-orange-700',
    title = 'Comienza aqui',
    rounded = ''
}) => {

    const Classes = `btn border-none ${background} ${fontSize} ${sizeClass} ${className}`;

    /* button with rounded full */
    if (!!rounded) {
        return (
            <button className={`rounded-full ${Classes}`}>{title}</button>
        )
    }

    /* Button por defecto */
    return (
        <button className={`rounded-lg ${Classes}`}>{title}</button>
    )
}

export default ButtonProps
