import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropertiesContext } from '../../../../context/properties/PropertiesContext';
import PropertiesTop from '../../../Navigation/PropertiesTop';
import PropertyCard from './PropertyCard';
import Pagination from '../../../Pagination';
import AdvancedSearch from '../../../Form/AdvancedSearch';
import Spinner from '../../../Spinner/Spinner';
import NotFound from '../../../Message/NotFound';
import { iconsList } from '../../../Icons';
import styles from '../../../../styles/components/OutstandingProject/OutstandingProject.module.css';
import { truncateStringSmall } from '../../../../utils';
import { company } from '../../../../constants/consts/company';

const Properties = ({ isGrid, isList, setIsGrid, setIsList }) => {
  const { contextData } = useContext(PropertiesContext);
  const {
    properties,
    allProperties,
    setProperties,
    propertiesToShow,
    setPropertiesToShow,
    page,
    totalPages,
    totalItems,
    handlePageChange,
    isLoading,
    notFoundMsg,
  } = contextData;
  const { RiArrowDownSLine } = iconsList;
  const [showMore, setShowMore] = useState(false);

  const showMoreProperties = () => {
    const propiedadesActuales = propertiesToShow.length;
    const nuevasPropiedades = allProperties.slice(
      propiedadesActuales,
      propiedadesActuales + 10
    );
    setPropertiesToShow([...propertiesToShow, ...nuevasPropiedades]);

    if (propiedadesActuales + 10 >= allProperties.length) {
      setShowMore(false);
    }
  };

  const seeLessProperties = () => {
    setPropertiesToShow(allProperties.slice(0, 10));
    setShowMore(true);
  };

  const outstandingProperties = propertiesToShow.filter(
    (property) => property.highlighted === false
  );

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
              <PropertyCard
                key={character.id}
                data={character}
                isList={isList}
              />
            ))}
          </ul>
          {/* PROPERTIES PAGINATION */}
          <div>
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
          <div className="p-5 mb-20">
            <h3 className="bg-gray-50 p-2">Proyectos destacados</h3>

            <ul className="flex w-[100%] flex-wrap relative">
              {outstandingProperties?.map((propiedad) => (
                <Link
                  key={propiedad.id}
                  to={`/propiedades/${propiedad?.id}?statusId=${company.statusId}&companyId=${company.companyId}`}
                  className={`${styles.link} relative h-[145px] text-white text-xs w-[45%] sm:w-[47.5%] lg:w-[45%] xl:w-[45%] m-1`}
                >
                  <img
                    src={
                      'https://http2.mlstatic.com/D_NQ_NP_911655-MLC69020961065_042023-O.webp'
                    }
                    alt={`imagen-${propiedad?.title}`}
                    className={styles.outstandingProject__image}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      height: '100px',
                      width: '100%',
                    }}
                  />
                  <p className={styles.deptName}>
                    {truncateStringSmall(
                      propiedad.title || 'Propiedad sin titulo registrado'
                    ) || ''}
                  </p>
                  <span className="bg-orange-500 mt-[40px] absolute p-[1.5px] px-3 -top-[25px] w-auto rounded-full">
                    Cod: {propiedad.id}
                  </span>
                </Link>
              ))}
            </ul>

            <div className="flex items-center bg-white mt-4">
              <div className="flex-1 border-b bg-white border-gray-200"></div>
              <button onClick={showMoreProperties} className="relative">
                {showMore && (
                  <div className="h-11 w-11 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-white hover:bg-orange-500 cursor-pointer flex items-center justify-center">
                    <RiArrowDownSLine className="text-2xl" />
                  </div>
                )}
              </button>
              <button onClick={seeLessProperties} className="relative">
                {!showMore && propertiesToShow.length >= 10 && (
                  <div className="h-11 w-11 rounded-full bg-bg-transparent border border-gray-200 text-gray-400 hover:text-white hover:bg-orange-500 cursor-pointer flex items-center justify-center">
                    <RiArrowDownSLine className="text-2xl rotate-180" />
                  </div>
                )}
              </button>
              <div className="flex-1 border-b border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
