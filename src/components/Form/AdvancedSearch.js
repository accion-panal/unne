import React, { useId, useContext, useEffect } from 'react';
import { SelectsContext } from '../../context/selects/SelectsContext';
import ReactSelect from 'react-select';

const AdvancedSearch = ({ handleSubmit }) => {
  const { contextDataSelects } = useContext(SelectsContext);
  const [
    filterSearchEntry,
    setFilterSearchEntry,
    getSelects,
    selects,
    communes,
    getCommunesByRegion,
    regions,
    operationType,
    typeOfProperty,
    installmentType,
  ] = contextDataSelects;

  // ? 1 Operation Type (val:options)
  const operationTypeOptions = selects?.operationType?.map(
    ({ value, name }) => ({
      value: value,
      label: name,
    })
  );

  // ? 2 Property Type (val:options)
  const propertyTypeOptions = selects?.typeOfProperty?.map(
    ({ value, name }) => ({
      value: value,
      label: name,
    })
  );

  // ? 1 Operation Type (ev:onChange)
  const handleOperationTypeChange = (seleccion) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      operationType: seleccion,
    });

  // ? 2 Type of Property (ev:onChange)
  const handleTypeOfPropertyChange = (seleccion) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      typeOfProperty: seleccion,
    });

  console.log(
    'Tipo de operacion seleccionada',
    filterSearchEntry?.operationType
  );
  console.log(
    'Tipo de Propiedad seleccionada',
    filterSearchEntry?.typeOfProperty
  );

  useEffect(() => {
    getSelects();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo de operación:</label>
          <ReactSelect
            options={operationTypeOptions ?? []}
            onChange={handleOperationTypeChange}
            value={filterSearchEntry?.operationType ?? ''}
          />
        </div>

        <div>
          <label>Tipo de operación:</label>
          <ReactSelect
            options={propertyTypeOptions ?? []}
            onChange={handleTypeOfPropertyChange}
            value={filterSearchEntry?.typeOfProperty ?? ''}
          />
        </div>

        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default AdvancedSearch;
