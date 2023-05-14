import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import PropertiesProvider from './context/properties/PropertiesProvider';
import SelectsProvider from './context/selects/SelectsProvider';


// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'react-image-gallery/styles/css/image-gallery.css';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
// // Default theme
// import '@splidejs/react-splide/css';

// // or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// // or only core styles
// import '@splidejs/react-splide/css/core';

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

reportWebVitals();
