import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { useRouter } from 'next/router';
import { useLocation } from 'react-router-dom';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from 'react-map-gl';
import CardMap from './CardMap';
import { iconsList } from '../Icons';

const ReactMap = ({ longitudeProp, latitudeProp, property }) => {
  const mapRef = useRef(null);
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 500,
    latitude: latitudeProp,
    longitude: longitudeProp,
    zoom: 18,
    dragPan: true,
  });
  const { FaMapMarkerAlt } = iconsList;

  useEffect(() => {
    setViewport({
      ...viewport,
      latitude: latitudeProp,
      longitude: longitudeProp,
      zoom: 18,
      dragPan: true,
    });
  }, [mapRef, longitudeProp, latitudeProp]);

  return (
    <div className="container my-24">
      <div>
        <h3>
          <Link
            to={`/propiedades/maps-propiedades`}
            className="flex w-1/6 uppercase items-center justify-center rounded-lg py-2 text-lg font-medium text-center text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300"
          >
            <FaMapMarkerAlt className="mr-2" /> Ver mapa
          </Link>
        </h3>

        <h4 className="flex ml-2 xl:ml-5 items-center my-5 text-gray-600">
          <span>
            <FaMapMarkerAlt className="mr-2" />
          </span>
          Ubicación: {property?.address || 'Dirección no registrada'} ,
          {property?.commune || 'Comuna no registrada'},{' '}
          {property?.city || 'Ciudad no registrada'}
        </h4>

        <Link
          to='/'
          className="ml-2 xl:ml-5 text-blue-500 text-sm"
        >
          Ver información de la zona
        </Link>
      </div>

      <Map
        {...viewport}
        ref={mapRef}
        mapboxAccessToken={
          'pk.eyJ1Ijoic2VyZ2lvdmVyYWhlcm5hbmRlemJpZGF0YSIsImEiOiJjbDMwZHc4cmswMDdqM2NydmIzYWF0cGl4In0.hsYQFPebleAB4j6mRckMzQ'
        }
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        initialViewState={{
          pitch: 45,
          width: 400,
          height: 900,
          attributionControl: true,
        }}
        mapStyle={'mapbox://styles/mapbox/streets-v12'}
        style={{
          width: 'auto',
          height: '400px',
          borderRadius: '15px',
          padding: '2rem',
          margin: '1.5rem',
          width: 'auto',
          height: '70vh',
          borderRadius: '15px',
        }}
      >
        <Marker
          latitude={latitudeProp}
          longitude={longitudeProp}
          offsetLeft={-20}
          offsetTop={-10}
          style={{
            cursor: 'pointer',
            zIndex: 100,
            margin: '0',
            padding: '0',
          }}
          onClick={() => setShowPopup(!showPopup)}
        >
          {showPopup && (
            <Popup
              longitude={longitudeProp}
              latitude={latitudeProp}
              onClose={() => setShowPopup(false)}
              anchor="bottom"
              closeButton={false}
              closeOnClick={false}
              dynamicPosition={true}
              focusAfterOpen={false}
              offsetTop={-10}
              offsetLeft={-10}
              closeOnMove={false}
              style={{
                zIndex: 100,
                cursor: 'pointer',
              }}
            >
              <CardMap property={property} />
            </Popup>
          )}
        </Marker>

        <NavigationControl />
        <GeolocateControl />
        <FullscreenControl />
      </Map>
    </div>
  );
};

export default ReactMap;
