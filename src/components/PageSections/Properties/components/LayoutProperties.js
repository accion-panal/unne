import React from 'react';
import Properties from './Properties';

const LayoutProperties = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-red-500 py-4">{/* Div rojo pegado abajo */} down</div>
      <div className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-4/5 bg-gray-200">
          {/* Contenedor principal dividido en 80% del ancho */}
          main
        </div>
        <div className="w-full md:w-1/5 bg-gray-300">
          {/* Otra sección con 20% del ancho */}
          side
        </div>
      </div>
    </div>
  );
};

export default LayoutProperties;
