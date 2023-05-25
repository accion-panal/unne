import Home from '../pages/Home';
import About from '../pages/About';
import Properties from '../pages/Properties/Properties';
import Property from '../pages/Properties/Property';
import ToSell from '../pages/Owner/ToSell';
import ToLease from '../pages/Owner/ToLease';
import AuctionUnits from '../pages/Investor/AuctionUnits';
import NewUnits from '../pages/Investor/NewUnits';
import LeaseAdmin from '../pages/Investor/LeaseAdmin';
import ToPartner from '../pages/Broker/ToPartner';
import LegalServices from '../pages/Broker/LegalServices';
import UnneAcademy from '../pages/Broker/UnneAcademy';
import PropertiesInMap from '../pages/PropertiesInMap';

export const navigationRoutes = [
  {
    id: 1,
    name: 'Unne',
    path: '/',
    element: <Home />,
  },
  {
    id: 2,
    name: '¿Quiénes somos?',
    path: '/quienes-somos',
    element: <About />,
  },
  {
    id: 3,
    name: 'Propiedades',
    path: '/propiedades',
    element: <Properties />,
  },
  {
    id: 4,
    name: 'Propiedad',
    path: '/propiedades/:id',
    element: <Property />,
  },
  {
    id: 5,
    name: 'Quiero Vender',
    path: '/soy-propietario/quiero-vender',
    element: <ToSell />,
  },
  {
    id: 6,
    name: 'Quiero Arrendar',
    path: '/soy-propietario/quiero-arrendar',
    element: <ToLease />,
  },
  {
    id: 7,
    name: 'Unidades en Remate',
    path: '/soy-inversionista/unidades-en-remate',
    element: <AuctionUnits />,
  },
  {
    id: 8,
    name: 'Unidades Nuevas',
    path: '/soy-inversionista/unidades-nuevas',
    element: <NewUnits />,
  },
  {
    id: 9,
    name: 'Administracion de Arriendo',
    path: '/soy-inversionista/administracion-de-arriendo',
    element: <LeaseAdmin />,
  },
  {
    id: 10,
    name: 'Asociate',
    path: '/eres-corredor/asociate',
    element: <ToPartner />,
  },
  {
    id: 11,
    name: 'Servicios Legales',
    path: '/eres-corredor/servicios-legales',
    element: <LegalServices />,
  },
  {
    id: 12,
    name: 'Academia Unne',
    path: '/eres-corredor/academia-unne',
    element: <UnneAcademy />,
  },
  {
    id: 14,
    name: 'Propiedades en mapa',
    path: '/propiedades/propiedades-en-mapa',
    element: <PropertiesInMap />,
  },
];
