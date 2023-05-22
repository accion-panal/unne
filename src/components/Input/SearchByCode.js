import React, { Fragment, useContext, useState } from 'react';
import { PropertiesContext } from '../../context/properties/PropertiesContext';
import { company } from '../../constants/consts/company';
import PropertiesServices from '../../services/PropertiesServices';

import { useNavigate } from 'react-router-dom';

const SearchByCode = () => {
  const { contextData } = useContext(PropertiesContext);
  const { propertyId, setPropertyId } = contextData;
  const [isSearching, setIsSearching] = useState(false);
  const [notFoundMsg, setNotFoundMsg] = useState('');
  const [propertyFounded, setPropertyFounded] = useState({});

  const navigate = useNavigate();

  console.log('PropertyId', propertyId);

  const CLASSES =
    'block w-full my-4 text-gray-500 focus:outline-none bg-white rounded-full border border-gray-300';

  const onPropertyIdChange = (ev) => setPropertyId(Number(ev.target.value));

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const createUrl = {
        propertyId: propertyId > 0 ? propertyId : '',
      };
      const url = `properties/${createUrl.propertyId}?statusId=${company.statusId}&companyId=${company.companyId}`;

      setIsSearching(true);
      const response = await PropertiesServices.getPropertyByIdCode(url);
      setPropertyFounded(response);
      navigate(
        `/propiedades/${createUrl.propertyId}?statusId=${company.statusId}&companyId=${company.companyId}`
      );
      // if ('title' in propertyFounded) {
      //   navigate(
      //     `/propiedades/${createUrl.propertyId}?statusId=${company.statusId}&companyId=${company.companyId}`
      //   );
      // }
      setIsSearching(false);

      console.log(response);
    } catch (error) {
      if (error.response.data.message) {
        setIsSearching(false);
        setNotFoundMsg('Propiedad no encontrada');
      }
      console.log('Propiead no encontrada');
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="number"
            id="search-property"
            value={propertyId}
            onChange={onPropertyIdChange}
            className={`${CLASSES} p-3 pl-10 text-MD`}
            placeholder="Código: 00001"
          />
          {/* <div className="w-[49%]">
          <label className="mb-1 text-gray-500">Precio mínimo</label>
          <input
            type="text"
            value={selectedSelects.minPrice}
            onChange={onMinPriceChange}
            className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
          />
        </div> */}

          <button className="text-white absolute pt-2 top-[0px] right-[1px] bottom-[0px] bg-gray-400 hover:bg-gray-500 py-2.5 px-4 xl:px-7 rounded-r-full">
            Buscar xd {isSearching && <span>obteniendo...</span>}
          </button>
        </div>

        {propertyFounded?.title}
        {notFoundMsg && <p>{notFoundMsg}</p>}
      </form>
    </Fragment>
  );
};

export default SearchByCode;
