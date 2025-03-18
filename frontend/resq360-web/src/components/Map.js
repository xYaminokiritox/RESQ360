import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const safeZones = [
  { id: 1, name: "Police Station", lat: 28.6139, lng: 77.2090 },
  { id: 2, name: "Hospital", lat: 28.6280, lng: 77.2183 }
];

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 28.6139,
  lng: 77.2090
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {safeZones.map(zone => (
          <Marker key={zone.id} position={{ lat: zone.lat, lng: zone.lng }} title={zone.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;