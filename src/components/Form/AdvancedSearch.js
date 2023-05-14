import React, { useContext, useEffect } from 'react';
import { SelectsContext } from '../../context/selects/SelectsContext';
import ReactSelect from 'react-select';
import InputForm from '../Input/InputForm';
import PrimaryButton from '../Button/ButtonPrimary';
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
        <div className="mb-5">
          <label>Tipo de operación:</label>
          <ReactSelect
            options={operationTypeOptions ?? []}
            value={filterSearchEntry?.operationType ?? {}}
            onChange={handleOperationTypeChange}
            className="my-1"
          />
        </div>
        <div className="mb-5">
          <label>Tipo de operación:</label>
          <ReactSelect
            options={propertyTypeOptions ?? []}
            value={filterSearchEntry?.typeOfProperty ?? {}}
            onChange={handleTypeOfPropertyChange}
            className="my-1"
          />
        </div>
        <div className="mb-5">
          <label>Estado de propiedad</label>
          <ReactSelect
            options={installmentOptions ?? []}
            value={filterSearchEntry?.installmentType ?? {}}
            onChange={handleInstallmentTypeChange}
            className="my-1"
          />
        </div>
        <div className="mb-5">
          <label>Region</label>
          <ReactSelect
            options={regionsOptions ?? []}
            value={filterSearchEntry?.region ?? {}}
            onChange={handleRegionsChange}
            className="my-1"
          />
        </div>
        <div className="mb-5">
          <label>Comuna</label>
          <ReactSelect
            options={communesOptions() ?? []}
            value={filterSearchEntry?.commune ?? {}}
            onChange={handleCommunesChange}
            className="my-1"
          />
        </div>

        <div className="mb-5 flex flex-col">
          <label>Metros M2</label>
          <InputForm
            id="surfaceM2"
            name="surfaceM2"
            value={filterSearchEntry?.surfaceM2}
            onChange={handleSurfaceM2Change}
            placeholder="Ej: 100"
          />
        </div>
        {/* <div className="mb-5 flex flex-col">
          <label>Metros M2</label>
          <input
            type="text"
            id="surfaceM2"
            name="surfaceM2"
            value={filterSearchEntry?.surfaceM2}
            onChange={handleSurfaceM2Change}
            placeholder="Ej: 100"
            className="my-1 bg-white border border-gray-300 rounded-md px-3 p-[7px] outline-none focus:outline-none"
          />
        </div> */}

        <div className="mb-5 flex flex-col">
          <label>Precio Mínimo</label>
          <InputForm
            type="number"
            id="minPrice"
            name="minPrice"
            value={filterSearchEntry?.minPrice}
            onChange={handleMinPriceChange}
            placeholder="Ej: 10.000.000"
          />
        </div>

        {/* <div>
          <label>Precio Min.</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={filterSearchEntry?.minPrice}
            onChange={handleMinPriceChange}
          />
        </div> */}

        <div className="mb-5 flex flex-col">
          <label>Precio Máximo</label>
          <InputForm
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={filterSearchEntry?.maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Ej: 100.000.000"
          />
        </div>

        {/* <div>
          <label>Precio Max.</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={filterSearchEntry?.maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div> */}
        <div className="mb-5">
          <label>Dormitorios</label>
          <ReactSelect
            options={bedroomsOptions ?? []}
            value={filterSearchEntry?.bedrooms ?? {}}
            onChange={handleBedroomsChange}
            className="my-1"
          />
        </div>

        <div className="mb-5">
          <label>Baños</label>
          <ReactSelect
            options={bathroomsOptions ?? []}
            value={filterSearchEntry?.bathrooms ?? {}}
            onChange={handleBathroomsChange}
            className="my-1"
          />
        </div>

        <div className="mb-5">
          <label>Estacionamientos</label>
          <ReactSelect
            options={coveredParkingLotsOptions ?? []}
            value={filterSearchEntry?.coveredParkingLots ?? {}}
            onChange={handleCoveredParkingLotsChange}
            className="my-1"
          />
        </div>
        <div className="w-full">
          <PrimaryButton
            type="submit"
            className="text-white bg-orange-500 w-full hover:bg-orange-600 my-1"
          >
            Buscar
          </PrimaryButton>
        </div>

        <div className="w-full">
          <PrimaryButton
            onClick={() => window.location.reload()}
            className="text-white bg-gray-500 w-full hover:bg-gray-600 my-1"
          >
            Restablecer búsqueda
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default AdvancedSearch;
