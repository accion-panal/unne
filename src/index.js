import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PropertiesProvider from './context/properties/PropertiesProvider';
import SelectsProvider from './context/selects/SelectsProvider';

/** Style Deps */
import 'react-image-gallery/styles/css/image-gallery.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PropertiesProvider>
        <SelectsProvider>
          <App />
        </SelectsProvider>
      </PropertiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
