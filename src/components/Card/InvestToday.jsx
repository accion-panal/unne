import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PropertiesContext } from '../../context/properties/PropertiesContext';
import { SelectsContext } from '../../context/selects/SelectsContext';
import { company, paginationTopLimit } from '../../constants/consts/company';
import PropertiesServices from '../../services/PropertiesServices';
import styles from '../../styles/components/NewProperty.module.css';

const InvestToday = ({ title, href, operationType, typeOfProperty }) => {
  const { contextData } = useContext(PropertiesContext);
  const { contextDataSelects } = useContext(SelectsContext);
  const { setProperties, setIsLoading, setNotFoundMsg } = contextData;
  const { selectedSelects, setSelectedSelects } = contextDataSelects;

  const scrollToDown = () => {
    window.scrollTo({
      top: 1400,
      behavior: 'smooth',
    });
  };

  const getProperties = async (
    currentPage,
    limit,
    statusId,
    companyId,
    operationType,
    typeOfProperty
  ) => {
    setNotFoundMsg('');
    setIsLoading(true);
    const { data } = await PropertiesServices.getPropertiesByCard(
      currentPage,
      limit,
      statusId,
      companyId,
      operationType,
      typeOfProperty
    );
    setProperties(data);
    setIsLoading(false);
    setNotFoundMsg(
      data.length === 0
        ? 'Lo sentimos, tu busqueda no coincide con nuestros registros'
        : ''
    );
  };

  return (
    <Link
      to={`${href}`}
      onClick={() => {
        scrollToDown();
        setSelectedSelects({
          ...selectedSelects,
          operationType: operationType,
          typeOfProperty: typeOfProperty,
        });
        getProperties(
          paginationTopLimit.limitPage,
          paginationTopLimit.topLimit,
          company.statusId,
          company.companyId,
          operationType,
          typeOfProperty
        );
      }}
      className={`${styles.card} hover:shadow-2xl`}
    >
      <div className={`${styles.blob} bg-[#f0f0f0]`}></div>
      <h2 className={`${styles.titles} text-xl py-4 font-semibold`}>{title}</h2>
      <span className={styles.img}></span>
    </Link>
  );
};

export default InvestToday;
