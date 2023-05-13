import React, { useContext, useEffect } from 'react';
import { SelectsContext } from '../../context/selects/SelectsContext';
import ReactSelect from 'react-select';
import {
  bedroomsOptions,
  bathroomsOptions,
  coveredParkingLotsOptions,
} from '../../data/selects';

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
    ...rest
  ] = contextDataSelects;

  // Operation Type (val:options)
  const operationTypeOptions = selects?.operationType?.map(
    ({ value, name }) => ({
      value: value,
      label: name,
    })
  );

  // Property Type (val:options)
  const propertyTypeOptions = selects?.typeOfProperty?.map(
    ({ value, name }) => ({
      value: value,
      label: name,
    })
  );

  // Installment Type (val:options)
  const installmentOptions = selects?.installment_type?.map(
    ({ value, name }) => ({
      value: value,
      label: name,
    })
  );

  // Regions (val:options)
  const regionsOptions = selects?.regions?.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  // Communes (val:options)
  const communesOptions = () => {
    const communesList = communes.map((commune) => ({
      value: commune?.id,
      label: commune?.name,
    }));
    return communesList;
  };

  // Operation Type (ev:onChange)
  const handleOperationTypeChange = (seleccion) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      operationType: seleccion,
    });

  // Type of Property (ev:onChange)
  const handleTypeOfPropertyChange = (seleccion) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      typeOfProperty: seleccion,
    });

  // Installment Type (ev:onChange)
  const handleInstallmentTypeChange = (seleccion) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      installmentType: seleccion,
    });

  // Regions (ev:onChange)
  const handleRegionsChange = (seleccion) => {
    setFilterSearchEntry({
      ...filterSearchEntry,
      region: seleccion,
    });
    setRegionId(seleccion?.value);
  };

  // Communes (ev:onChange)
  const handleCommunesChange = (seleccion) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      commune: seleccion,
    });

  // SurfaceM2 (ev:onChange)
  const handleSurfaceM2Change = (ev) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      surfaceM2: ev.target.value,
    });

  // MinPrice (ev:onChange)
  const handleMinPriceChange = (ev) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      minPrice: Number(ev.target.value),
    });

  // MaxPrice (ev:onChange)
  const handleMaxPriceChange = (ev) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      maxPrice: Number(ev.target.value),
    });

  // Bedrooms (ev:onChange)
  const handleBedroomsChange = (selection) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      bedrooms: selection,
    });

  // Bathrooms (ev:onChange)
  const handleBathroomsChange = (selection) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      bathrooms: selection,
    });

  // Bathrooms (ev:onChange)
  const handleCoveredParkingLotsChange = (selection) =>
    setFilterSearchEntry({
      ...filterSearchEntry,
      coveredParkingLots: selection,
    });

  useEffect(() => {
    getSelects();
  }, []);

  useEffect(() => {
    getCommunesByRegion(regionId);
  }, [regionId]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo de operación:</label>
          <ReactSelect
            options={operationTypeOptions ?? []}
            value={filterSearchEntry?.operationType ?? {}}
            onChange={handleOperationTypeChange}
          />
        </div>

        <div>
          <label>Tipo de operación:</label>
          <ReactSelect
            options={propertyTypeOptions ?? []}
            value={filterSearchEntry?.typeOfProperty ?? {}}
            onChange={handleTypeOfPropertyChange}
          />
        </div>

        <div>
          <label>Tipo de Instalacion</label>
          <ReactSelect
            options={installmentOptions ?? []}
            value={filterSearchEntry?.installmentType ?? {}}
            onChange={handleInstallmentTypeChange}
          />
        </div>

        <div>
          <label>Region</label>
          <ReactSelect
            options={regionsOptions ?? []}
            value={filterSearchEntry?.region ?? {}}
            onChange={handleRegionsChange}
          />
        </div>

        <div>
          <label>Comuna</label>
          <ReactSelect
            options={communesOptions() ?? []}
            value={filterSearchEntry?.commune ?? {}}
            onChange={handleCommunesChange}
          />
        </div>

        <div>
          <label>Metros M2</label>
          <input
            type="text"
            id="surfaceM2"
            name="surfaceM2"
            value={filterSearchEntry?.surfaceM2}
            onChange={handleSurfaceM2Change}
          />
        </div>

        <div>
          <label>Precio Min.</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={filterSearchEntry?.minPrice}
            onChange={handleMinPriceChange}
          />
        </div>

        <div>
          <label>Precio Max.</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={filterSearchEntry?.maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>

        <div>
          <label>Dormitorios</label>
          <ReactSelect
            options={bedroomsOptions ?? []}
            value={filterSearchEntry?.bedrooms ?? {}}
            onChange={handleBedroomsChange}
          />
        </div>

        <div>
          <label>Banos</label>
          <ReactSelect
            options={bathroomsOptions ?? []}
            value={filterSearchEntry?.bathrooms ?? {}}
            onChange={handleBathroomsChange}
          />
        </div>

        <div>
          <label>Estacionamientos</label>
          <ReactSelect
            options={coveredParkingLotsOptions ?? []}
            value={filterSearchEntry?.coveredParkingLots ?? {}}
            onChange={handleCoveredParkingLotsChange}
          />
        </div>

        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default AdvancedSearch;
