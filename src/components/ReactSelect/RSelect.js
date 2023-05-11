import React, { useState, useId } from 'react';
import ReactSelect from 'react-select';

const RSelect = ({ id, options, onChange, value }) => {
  const [isClearable, setIsClearable] = useState(true);

  return (
    <ReactSelect
      id={id}
      options={options}
      onChange={onChange}
      value={value}
      instanceId={useId()}
      isClearable={isClearable}
    />
  );
};

export default RSelect;
