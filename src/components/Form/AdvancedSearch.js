import React, { useContext, useEffect } from 'react';
import { SelectsContext } from '../../context/selects/SelectsContext';
import ReactSelect from 'react-select';
import SelectsServices from '../../services/SelectsServices';

const AdvancedSearch = ({ handleSubmit }) => {
  const { contextDataSelects } = useContext(SelectsContext);
  const [
    filterSearchEntry,
    setFilterSearchEntry,
    getSelects,
    selects,
    communes,
    getCommunesByRegion,
    regionId,
    setRegionId,
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

  // ? 3 Regions (val:options)
  const regionsOptions = selects?.regions?.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  // ? 4 Communes (val:options)
  const communesOptions = () => {
    const communesList = communes.map((commune) => ({
      value: commune?.id,
      label: commune?.name,
    }));
    return communesList;
  };

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

  // ? 3 Regions (ev:onChange)
  const handleRegionsChange = (seleccion) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      region: seleccion,
    });
    console.log('regionId', seleccion);
    setRegionId(seleccion?.value);
  };

  // ? 3 Communes (ev:onChange)
  const handleCommunesChange = (seleccion) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      commune: seleccion,
    });

  useEffect(() => {
    getSelects();
  }, []);

  useEffect(() => {
    getCommunesByRegion(regionId);
  }, [regionId]);

  console.log(filterSearchEntry);
  console.log(selects);
  console.log(communes);

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

        <div>
          <label>Region</label>
          <ReactSelect
            options={regionsOptions ?? []}
            onChange={handleRegionsChange}
            value={filterSearchEntry?.region ?? ''}
          />
        </div>

        <div>
          <label>Comuna</label>
          <ReactSelect
            options={communesOptions() ?? []}
            onChange={handleCommunesChange}
            value={filterSearchEntry?.commune ?? ''}
          />
        </div>

        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default AdvancedSearch;
