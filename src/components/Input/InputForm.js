import React from 'react';

const InputForm = ({
  type = 'text',
  id,
  name,
  value,
  onChange,
  placeholder,
  className,
}) => {
  const classNames = `${className} my-1 bg-white border border-gray-200 rounded-md px-3 p-[7px] outline-none focus:outline-none`;

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={classNames}
    />
  );
};

export default InputForm;
