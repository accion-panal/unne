import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { PropertiesContext } from '../../../../context/properties/PropertiesContext';
// import { SelectsContext } from '../../../../context/selects/SelectsContext';
import { Tab } from '@headlessui/react';
import SearchByCode from '../../../Input/SearchByCode';
import { webServicesTabs } from '../../../../data';
import ButtonPrimary from '../../../Button/ButtonPrimary';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const SearchPropertiesSection = () => {
  // const { contextData } = useContext(PropertiesContext);
  // const { contextDataSelects } = useContext(SelectsContext);
  // const [
  //   statusId,
  //   companyId,
  //   totalItems,
  //   setTotalItems,
  //   itemsPerPage,
  //   setItemsPerPage,
  //   properties,
  //   setProperties,
  // ] = contextData;
  // const [
  //   filterSearchEntry,
  //   setFilterSearchEntry,
  //   getSelects,
  //   selects,
  //   communes,
  //   getCommunesByRegion,
  //   regionId,
  //   setRegionId,
  //   regions,
  //   operationType,
  //   typeOfProperty,
  //   installmentType,
  // ] = contextDataSelects;

  const [categories, setCategories] = useState([...webServicesTabs]);
  const [activeTab, setActiveTab] = useState(categories[-1]);
  const [isOpenSearchCode, setIsOpenSearchCode] = useState(false);

  const navigate = useNavigate();

  const handleOpenSearchCode = (ev) => {
    ev.preventDefault();
    setIsOpenSearchCode(!isOpenSearchCode);
  };

  // const onOperationTypeChange = (selection) => {
  //   setFilterSearchEntry({
  //     ...filterSearchEntry,
  //     operationType: selection,
  //   });
  // };

  // const onTypeOfPropertyChange = (ev) => {
  //   setFilterSearchEntry({
  //     ...filterSearchEntry,
  //     typeOfProperty: ev.target.value,
  //   });
  // };

  // const onRegionChange = (ev) => {
  //   setFilterSearchEntry({
  //     ...filterSearchEntry,
  //     region: Number(ev.target.value),
  //   });
  // };

  // const onCommuneChange = (ev) => {
  //   setFilterSearchEntry({
  //     ...filterSearchEntry,
  //     commune: ev.target.value,
  //   });
  // };

  // useEffect(() => {
  //   getSelects();
  // }, []);

  // useEffect(() => {
  //   getCommunesByRegion(filterSearchEntry?.region);
  // }, [filterSearchEntry?.region]);

  return (
    <div className="my-10">
      <div className="bg-gray-50  rounded-2xl w-100 xl:w-3/5 mx-auto text-black p-4 xl:px-10 shadow-lg">
        <form>
          <div className="grid grid-cols-1 grid-rows-1 gap-4">
            <div className="d-flex justify-start items-start pb-4">
              <div className=" border-gray-200">
                <nav
                  className="flex space-x-1 w-100 rounded-[100px] text-black mb:16 bg-gray-200 mx-auto w-5/6 lg:w-3/6"
                  aria-label="Tabs"
                >
                  {categories.map((tab) => (
                    <button
                      key={tab}
                      className={`${
                        activeTab === tab
                          ? 'bg-amber-400 text-white p-2'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } w-full text-md font-medium leading-5 rounded-[100px] py-3 focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-100 focus:ring-amber-400 ring-opacity-60 ring-offset-2 focus:outline-none focus:bg-amber-400 text-black p-2`}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setActiveTab(tab);
                        // onOperationTypeChange(tab.toLowerCase().trim());
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full lg:grid-cols-4">
            <div className="mx-1 my-2">
              <select
                className="select select-ghost bg-white rounded-full border-gray-300 w-full"
                placeholder="Tipo de Propiedad"
                // value={filterSearchEntry?.typeOfProperty}
                // onChange={onTypeOfPropertyChange}
              >
                {/* {selects?.typeOfProperty?.map(({ value, name }) => (
                  <option key={value} value={name}>
                    {name}
                  </option>
                ))} */}
              </select>
            </div>

            <div className="mx-1 my-2">
              <select
                className="select select-ghost bg-white rounded-full border-gray-300 w-full"
                placeholder="Region"
                // value={filterSearchEntry?.region}
                // onChange={onRegionChange}
              >
                {/* {selects?.regions?.map(({ id, name }) => (
                  <option key={id} value={id} name={name}>
                    {name}
                  </option>
                ))} */}
              </select>
            </div>

            <div className="mx-1 my-2">
              <select
                className="select select-ghost bg-white rounded-full border-gray-300 w-full"
                placeholder="Comuna"
                // value={filterSearchEntry?.commune}
                // onChange={onCommuneChange}
              >
                {/* {communes?.map(({ id, name }) => (
                  <option key={id} value={name}>
                    {name}
                  </option>
                ))} */}
              </select>
            </div>

            <div className="mx-1 flex justify-center items-center my-2">
              <ButtonPrimary
                type="submit"
                className="block w-full p-[.7rem] text-center rounded-full border bg-amber-400 text-white border-amber-300 hover:bg-amber-500"
              >
                Buscar
              </ButtonPrimary>
            </div>
          </div>

          <div className="my-5 w-full ">
            <p className="text-sm text-gray-600">
              Buscar por{' '}
              <button
                onClick={handleOpenSearchCode}
                className="text-orange-500 hover:text-orange-600"
              >
                código de propiedad
              </button>
            </p>
          </div>
        </form>

        {isOpenSearchCode && <SearchByCode />}
      </div>
    </div>
  );
};

export default SearchPropertiesSection;
