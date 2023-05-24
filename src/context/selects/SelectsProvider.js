import React, { useEffect, useState } from 'react';
import { SelectsContext } from './SelectsContext';
import SelectsServices from '../../services/SelectsServices';

const SelectsProvider = ({ children }) => {
  const [operationType, setOperationType] = useState([]);
  const [typeOfProperty, setTypeOfProperty] = useState([]);
  const [installmentType, setInstallmentType] = useState([]);
  const [regions, setRegions] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [stateId, setStateId] = useState('');
  const [selectedSelects, setSelectedSelects] = useState({
    operationType: '',
    typeOfProperty: '',
    installmentType: '',
    region: '',
    commune: '',
    surfaceM2: '',
    minPrice: 0,
    maxPrice: 0,
    bedrooms: '',
    bathrooms: '',
    coveredParkingLots: '',
  });

  const getSelects = async () => {
    const { data } = await SelectsServices.getSelects();
    setRegions(data?.regions);
    setOperationType(data?.operationType);
    setTypeOfProperty(data?.typeOfProperty);
    setInstallmentType(data?.installment_type);
  };

  const getCommunesByStateId = async (id) => {
    const { data } = await SelectsServices.getCommunesByStateId(id);
    setCommunes(data);
  };

  useEffect(() => {
    getSelects();
    getCommunesByStateId(stateId);
  }, [stateId]);



  return (
    <SelectsContext.Provider
      value={{
        contextDataSelects: {
          regions,
          communes,
          stateId,
          setStateId,
          operationType,
          typeOfProperty,
          installmentType,
          selectedSelects,
          setSelectedSelects,
        },
      }}
    >
      {children}
    </SelectsContext.Provider>
  );
};

export default SelectsProvider;
