import React, { useContext } from 'react';
import { PropertiesContext } from '../../../../context/properties/PropertiesContext';
import PropertiesTop from '../../../Navigation/PropertiesTop';
import PropertyCard from './PropertyCard';
import Pagination from '../../../Pagination';
import AdvancedSearch from '../../../Form/AdvancedSearch';
import Spinner from '../../../Spinner/Spinner';
import NotFound from '../../../Message/NotFound';

const Properties = ({ isGrid, isList, setIsGrid, setIsList }) => {
  const { contextData } = useContext(PropertiesContext);
  const {
    properties,
    setProperties,
    page,
    totalPages,
    totalItems,
    handlePageChange,
    isLoading,
    notFoundMsg,
  } = contextData;

  return (
    <div className="flex relative flex-col w-[100%]">
      <PropertiesTop
        {...{
          totalItems,
          page,
          isGrid,
          setIsGrid,
          isList,
          setIsList,
          properties,
        }}
      />
      <div className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-4/5 bg-white mb-48">
          {/* PROPERTIES LIST */}
          {isLoading && <Spinner />}
          {notFoundMsg && <NotFound message={notFoundMsg} />}
          <ul
            className={`${
              isGrid
                ? 'grid grid-cols-1 sm:grid-cols-3 gap-4 p-2'
                : 'flex flex-col gap-4 p-2'
            }`}
          >
            {properties.map((character) => (
              <PropertyCard key={character.id} data={character} isList={isList}/>
            ))}
          </ul>
          {/* PROPERTIES PAGINATION */}
          <div className="bg-red-500">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        {/* ADVANCED SEARCH FORM */}
        <div className="w-full md:w-1/5 bg-white border ml-0 xl:ml-2">
          <AdvancedSearch {...{ setProperties }} />
        </div>
      </div>
    </div>
  );
};

export default Properties;
