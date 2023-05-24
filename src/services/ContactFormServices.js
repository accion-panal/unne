import axios from 'axios';

const ContactFormServices = {
  sendFormToUser: async (name, userEmail, phone, uniqueCode) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${userEmail}`,
      {
        Nombre: name,
        Telefono: phone,
        Correo: userEmail,
        Codigo: uniqueCode,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  sendFormToRealtor: async (
    name,
    userEmail,
    phone,
    realtorEmail,
    propertyType,
    bedrooms,
    bathrooms,
    surfaceM2,
    commonExpenses,
    parkingLots,
    haveWarehouse,
    address
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Desde: 'Unne',
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        Tipo_de_propiedad: propertyType,
        Dormitorios: bedrooms,
        Banos: bathrooms,
        Superficie: surfaceM2,
        Gastos_comunes: commonExpenses,
        Estacionamientos: parkingLots,
        Incluye_bodega: haveWarehouse,
        Direccion: address,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  sendContactForm: async (name, userEmail, phone, realtorEmail) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },
};

export default ContactFormServices;
