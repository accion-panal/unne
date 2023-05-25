import { api } from '../api';
import { company, paginationTopLimit } from '../constants/consts/company';

const PropertiesServices = {
  getProperties: async (
    currentPage,
    limit = paginationTopLimit.limit,
    statusId = company.statusId,
    companyId = company.companyId
  ) => {
    const response = await api.get(
      `properties?page=${currentPage}&limit=${limit}&statusId=${statusId}&companyId=${companyId}`
    );
    return { data: response.data.data, meta: response.data.meta };
  },

  getAllProperties: async (
    currentPage = paginationTopLimit.limitPage,
    limit = paginationTopLimit.topLimit,
    statusId = company.statusId,
    companyId = company.companyId
  ) => {
    const response = await api.get(
      `properties?page=${currentPage}&limit=${limit}&statusId=${statusId}&companyId=${companyId}`
    );
    return { data: response.data.data, meta: response.data.meta };
  },

  getProperty: async (id, statusId, companyId) => {
    const response = await api.get(
      `properties/${id}?statusId=${statusId}&companyId=${companyId}`
    );
    return response.data;
  },

  getPropertyByIdCode: async (url) => {
    const response = await api.get(`${url}`);
    return response.data;
  },
};

export default PropertiesServices;
