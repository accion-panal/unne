import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PropertiesProvider from './context/properties/PropertiesProvider';
import SelectsProvider from './context/selects/SelectsProvider';

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
