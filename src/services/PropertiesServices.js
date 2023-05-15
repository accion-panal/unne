import api from '../api/index';
import { company } from '../data/company';

const PropertiesServices = {
  getProperties: async (statusId, companyId, url) => {
    const response = await api.get(
      `https://aulen.partnersadvisers.info/properties?page=1&limit=${company?.limit}&statusId=${statusId}&companyId=${companyId}${url}`
    );
    return [response.data.data, response.data];
  },

  getProperty: async (id, statusId, companyId) => {
    const response = await api.get(
      `https://aulen.partnersadvisers.info/properties/${id}?statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },
};

export default PropertiesServices;
