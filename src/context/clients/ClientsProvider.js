import React, { useState } from 'react';
import { ClientsContext } from './ClientsContext';
import ClientsServices from '../../services/ClientsServices';

const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  const getClientList = async () => {
    const response = await ClientsServices.getClients();
    const clientsList = response.data;
    setClients(clientsList);
  };

  return (
    <ClientsContext.Provider
      value={{
        contextData: [clients, setClients, getClientList],
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};

export default ClientsProvider;
