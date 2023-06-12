import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import {
  bedroomsList,
  bathroomsList,
  propertyTypeData,
} from '../../../../../constants/consts/forms';

const PropertyData = ({ formData, setFormData, _renderTab2 }) => {
  const [bedrooms, setBedrooms] = useState(bedroomsList);
  const [bathrooms, setBathrooms] = useState(bathroomsList);

  const handleSelectBedroom = (id) => {
    const newBedrooms = bedrooms.map((bedroom) => {
      if (bedroom.id === id) {
        return {
          ...bedroom,
          selected: true,
        };
      } else {
        return {
          ...bedroom,
          selected: false,
        };
      }
    });
    setBedrooms(newBedrooms);
  };

  const handleSelectBathroom = (id) => {
    const newBathrooms = bathrooms.map((bathroom) => {
      if (bathroom.id === id) {
        return {
          ...bathroom,
          selected: true,
        };
      } else {
        return {
          ...bathroom,
          selected: false,
        };
      }
    });
    setBathrooms(newBathrooms);
  };

  /** Update Property Type */
  const handlePropertyType = (ev) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        propertyType: ev.target.value,
      },
    });
  };

  /** Update Bedrooms */
  const handleBedrooms = (bedroomId) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        bedrooms: Number(bedroomId),
      },
    });
  };

  /** Update Bathrooms */
  const handleBathrooms = (bathroomId) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        bathrooms: Number(bathroomId),
      },
    });
  };

  /** Update SurfaceM2 */
  const handleSurfaceM2 = (surfaceM2) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        surfaceM2: Number(surfaceM2),
      },
    });
  };

  /** Update Common Expenses */
  const handleCommonExpenses = (ev) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        commonExpenses: parseInt(ev.target.value.replace(/\./g, '')),
      },
    });
  };

  /** Update Parking Lots */
  const handleParkingLots = (parkingLots) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        parkingLots: Number(parkingLots),
      },
    });
  };

  /** Update Have warehouse */
  const handleHaveWarehouse = (haveWarehouse) => {
    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        haveWarehouse: haveWarehouse,
      },
    });
  };


  return (
    <div className="w-full">
      <div className="bg-gray-200 px-4 xl:px-10 rounded-sm w-full py-3.5 border-b border-gray-200">
        <h3 className="text-lg xl:text-lg font-bold text-gray-500">
          Atributos de la Propiedad
        </h3>
      </div>

      <form className="w-full px-4 xl:px-10">
        <div className="w-full my-7">
          <label className="text-gray-500 font-bold">Ubicación</label>
          <div className="flex mt-3">
            <input
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
              type="text"
              placeholder="Ubicación de la Propiedad"
              name="address"
              id="address"
              defaultValue={formData.propertyData.address}
              onChange={() =>
                setFormData({
                  ...formData,
                  propertyData: {
                    ...formData.propertyData,
                    address: formData.propertyData.address,
                  },
                })
              }
              readOnly
            />
          </div>
        </div>

        <div className="w-full my-7">
          <label className="text-gray-500 font-bold">Tipo de Propiedad</label>
          <select
            className="select select-ghost mt-3 bg-white w-full rounded-full border-none text-lg font-semibold"
            placeholder="Tipo de Propiedad"
            value={formData?.propertyData?.propertyType}
            onChange={handlePropertyType}
            id="propertyType"
            name="propertyType"
          >
            {propertyTypeData?.map((option) => (
              <option key={option.id} value={option?.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full xl:w-3/6 my-7">
          <label className="text-gray-500 font-bold">
            Numero de dormitorios
          </label>
          <div className="flex mt-3">
            {bedrooms.length > 0 &&
              bedrooms.map((bedroom) => (
                <div
                  key={bedroom.id}
                  className={`${
                    bedroom.selected ? 'bg-orange-500 text-white' : 'bg-white'
                  } w-10 h-10 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mr-3 cursor-pointer`}
                  onClick={() => {
                    handleSelectBedroom(bedroom.id);
                    handleBedrooms(bedroom.id);
                  }}
                  id="bedrooms"
                  name="bedrooms"
                >
                  {bedroom.name}
                </div>
              ))}
          </div>
        </div>

        <div className="w-full xl:w-3/6 my-7">
          <label className="text-gray-500 font-bold">Numero de baños</label>
          <div className="flex mt-3">
            {bathrooms.length > 0 &&
              bathrooms.map((bathroom) => (
                <div
                  key={bathroom.id}
                  className={`${
                    bathroom.selected ? 'bg-orange-500 text-white' : 'bg-white'
                  } w-10 h-10 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mr-3 cursor-pointer`}
                  onClick={() => {
                    handleSelectBathroom(bathroom.id);
                    handleBathrooms(bathroom.id);
                  }}
                  id="bathrooms"
                  name="bathrooms"
                >
                  {bathroom.name}
                </div>
              ))}
          </div>
        </div>

        <div className="w-full my-7">
          <label className="text-gray-500 font-bold">
            Superficie total en m2 (estimada)
          </label>
          <div className="flex mt-3">
            <input
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
              type="number"
              placeholder="62 m2"
              id="surfaceM2"
              name="surfaceM2"
              value={formData?.propertyData?.surfaceM2}
              onChange={(ev) => handleSurfaceM2(ev.target.value)}
            />
          </div>
        </div>

        <div className="w-full my-7">
          <label className="text-gray-500 font-bold">Gastos Comunes</label>
          <div className="flex mt-3">
            <NumericFormat
              value={formData?.propertyData?.commonExpenses}
              onChange={handleCommonExpenses}
              placeholder="$ Ingrese monto"
              allowNegative={false}
              decimalSeparator={','}
              thousandSeparator={'.'}
              id="commonExpenses"
              name="commonExpenses"
              className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
            />
          </div>
        </div>

        <div className="w-full mt-5 flex items-center justify-start">
          <div>
            <label className="text-gray-500 font-bold">Estacionamientos</label>
            <div className="flex mt-3">
              <input
                className="w-full p-4 bg-white rounded-full border-gray-300 outline-none focus:outline-none"
                type="number"
                placeholder="1"
                id="parkingLots"
                name="parkingLots"
                value={formData?.propertyData?.parkingLots}
                onChange={(ev) => handleParkingLots(ev.target.value)}
              />
            </div>
          </div>

          <div className="w-4/6 xl:w-2/6 mx-auto">
            <div className="mt-8 ml-8">
              <input
                className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-gray-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-orange-500 checked:bg-orange-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-gray-400 dark:checked:border-orange-500 dark:checked:bg-orange-500"
                type="checkbox"
                id="warehouse"
                name="warehouse"
                value={formData?.propertyData?.haveWarehouse}
                onChange={(ev) => handleHaveWarehouse(ev.target.checked)}
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer text-gray-500 font-bold"
                htmlFor="checkboxTerms"
              >
                Incluye Bodega
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertyData;
