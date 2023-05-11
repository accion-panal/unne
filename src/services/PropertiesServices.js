import api from '../api/index';

const PropertiesServices = {
  getProperties: async (statusId, companyId, url) => {
    const response = await api.get(
      `https://aulen.partnersadvisers.info/properties?statusId=${statusId}&companyId=${companyId}${url}`
    );
    return response.data.data;
  },
};

export default PropertiesServices;
