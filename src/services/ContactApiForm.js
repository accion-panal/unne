import { api } from '../api';

const ContactApiFormServices = {
  addContactForm: async (formData) => {
    const response = await api.post(`/contact`, formData);
    return response.data;
  },
};

export default ContactApiFormServices;
