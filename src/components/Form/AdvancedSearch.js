import React, { useId } from 'react';
import ReactSelect from 'react-select';

const AdvancedSearch = ({ handleSubmit, operationType, setOperationType }) => {
  const opcionesTipoOperacion = [
    { value: 'venta', label: 'Venta' },
    { value: 'arriendo', label: 'Arriendo' },
  ];

  const handleChangeTipoOperacion = (seleccion) => {
    setOperationType(seleccion);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="operationType">Tipo de operación:</label>
          <ReactSelect
            id="operationType"
            options={opcionesTipoOperacion}
            onChange={handleChangeTipoOperacion}
            value={operationType}
            instanceId={useId()}
          />
        </div>

        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default AdvancedSearch;
