import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import PropertiesProvider from './context/properties/PropertiesProvider';
import SelectsProvider from './context/selects/SelectsProvider';

/** Style Deps */
import 'react-image-gallery/styles/css/image-gallery.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <SelectsProvider>
          <PropertiesProvider>
            <App />
          </PropertiesProvider>
        </SelectsProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
