'use client'

import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Maps() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAdoNll_9tJHWh71e7wfLmnpzqsP2j1SLs"
  })

  return (
    <section>

      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4">Localização</h2>
          <p className="text-xl text-gray-600">Avenida Empresário Valentim dos Santos Diniz, 130a - Serraria, Maceió - AL. 57046-770</p>
      </div>

      <div className="flex justify-center items-center h-[30vh]">
        {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: '90%',
            height: '100%'
          }}
          center={center}
          zoom={15}
          /* onLoad={onLoad}
          onUnmount={onUnmount} */
        >
          <Marker 
            position={center} 
            options={{
              label: {
                text: 'Shizentai',
                color: '#000',
                fontSize: '16px',
                fontWeight: 'bold'
              }
            }}
          />
        </GoogleMap>
        ) : <></>}
      </div>
      
    </section>
  )
}