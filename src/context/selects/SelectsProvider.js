import React, { useState } from 'react';
import { SelectsContext } from './SelectsContext';
import SelectsServices from '../../services/SelectsServices';

const SelectsProvider = ({ children }) => {
  const [selects, setSelects] = useState([]);
  const [regions, setRegions] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [regionId, setRegionId] = useState('');
  const [operationType, setOperationType] = useState([]);
  const [typeOfProperty, setTypeOfProperty] = useState([]);
  const [installmentType, setInstallmentType] = useState([]);
  const [errorServerMsg, setErrorServerMsg] = useState({});
  const [filterSearchEntry, setFilterSearchEntry] = useState({
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
    try {
      const response = await SelectsServices.getSelects();
      const { regions, operationType, typeOfProperty, installment_type } =
        response;
      setSelects(response);
      setRegions(regions);
      setOperationType(operationType);
      setTypeOfProperty(typeOfProperty);
      setInstallmentType(installment_type);
    } catch (error) {
      setErrorServerMsg(error?.response);
    }
  };

  const getCommunesByRegion = async (stateId) => {
    try {
      const response = await SelectsServices.getCommunesByRegion(stateId);
      setCommunes(response);
    } catch (error) {
      setErrorServerMsg(error?.response);
    }
  };

  return (
    <SelectsContext.Provider
      value={{
        contextDataSelects: [
          filterSearchEntry,
          setFilterSearchEntry,
          getSelects,
          selects,
          communes,
          getCommunesByRegion,
          regionId,
          setRegionId,
          regions,
          operationType,
          typeOfProperty,
          installmentType,
        ],
      }}
    >
      {children}
    </SelectsContext.Provider>
  );
};

export default SelectsProvider;
