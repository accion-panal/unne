import React, { useContext, useEffect } from 'react';
/* import { PropertiesContext } from '../../context/properties/PropertiesContext';
import { SelectsContext } from '../../context/selects/SelectsContext'; */
import styles from '../../styles/components/NewProperty.module.css';
import { Link } from 'react-router-dom';


const InvestToday = ({ title, href }) => {
    /*    const { contextDataProps } = useContext(PropertiesContext);
       const { contextData } = useContext(SelectsContext);
       const [
           properties,
           getProperties,
           getPropertiesOnFormSubmit,
           getPropertiesByDefault,
           propertyId,
           setPropertyId,
           getPropertyById,
           property,
           setProperty,
           limit,
           metaData,
           totalItems,
           getPagination,
           getTotalItems,
           page,
           loading,
           setLoading,
           getPropertiesByTypeOfProperty,
       ] = contextDataProps;
       const [
           filterSearchEntry,
           setFilterSearchEntry,
           getSelects,
           selects,
           communes,
           getCommunesByRegion,
           regions,
           ,
           operationType,
           typeOfProperty,
           installmentType,
       ] = contextData; */

    const scrollToDown = () => {
        window.scrollTo({
            top: 1400,
            behavior: 'smooth',
        });
    };

    /*   useEffect(() => {
          getPropertiesByTypeOfProperty(1, 1, filterSearchEntry?.typeOfProperty);
      }, [filterSearchEntry?.typeOfProperty]); */

    return (
        <Link
            href={`${href}`}
            /*   onClick={() => {
                  setFilterSearchEntry({
                      ...filterSearchEntry,
                      typeOfProperty: title.toLowerCase(),
                  });
                  getPropertiesByTypeOfProperty(1, 1, filterSearchEntry?.typeOfProperty);
                  setTimeout(() => {
                      scrollToDown();
                  }, 1000);
              }} */
            className={`${styles.card} hover:shadow-2xl`}
        >
            <div className={`${styles.blob} bg-[#f0f0f0]`}></div>
            <h2 className={`${styles.titles} text-xl py-4 font-semibold`}>{title}</h2>
            <span className={styles.img}></span>
        </Link>
    );
};

export default InvestToday;
