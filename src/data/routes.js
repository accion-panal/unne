import Home from '../pages/Home';
import About from '../pages/About';
import Properties from '../pages/Properties/Properties';
import Property from '../pages/Properties/Property';

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
    path: '/',
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
];
