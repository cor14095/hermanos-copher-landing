'use client'

import React, { useEffect, useState } from 'react'

function GoogleMap() {
  const [isLoading, setIsLoading] = useState(true)

  let map: google.maps.Map;
  const center: google.maps.LatLngLiteral = { lat: 14.6472287, lng: -90.5254478 };

  // Markers
  const markerPosition = [
    { 'postition': { lat: 14.6472287, lng: -90.5254478 }, 'label': 'Periférico' },
    { 'postition': { lat: 14.6195206, lng: -90.5468998 }, 'label': 'Calz. San Juan' },
    { 'postition': { lat: 14.6672277, lng: -90.8494999 }, 'label': 'Chimaltenango' },
    { 'postition': { lat: 14.3117942, lng: -90.3750463 }, 'label': 'Barberena' },
    { 'postition': { lat: 14.2990816, lng: -90.7841798 }, 'label': 'Escuintla' },
    { 'postition': { lat: 14.8405614, lng: -91.5015162 }, 'label': 'Xela' },
    { 'postition': { lat: 14.9925009, lng: -89.7201585 }, 'label': 'Teculután' },
    { 'postition': { lat: 15.3010977, lng: -91.4963686 }, 'label': 'Huehuetenango' },
    { 'postition': { lat: 14.6469972, lng: -90.5257205 }, 'label': 'Centro de Servicio' }
  ];

  function initMap(): void {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center,
      zoom: 13
    });

    // The marker, positioned at HC locations
    markerPosition.map((mark) => {
      const label = mark.label
      const position = mark.postition

      const marker = new google.maps.Marker({
        map: map,
        position: position,
        title: label
      })
    })
  }

  useEffect(() => {
    setTimeout(() => {
      initMap()
      setIsLoading(false)
      //console.log("Test")
    }, 2000)
  })

  return (
    <div id="map" className='w-full h-full'>
      {
        isLoading ? (
          <div className='flex flex-col w-full h-full text-xl font-bold gap-2'>
            <div role="status" className='flex mx-auto mt-auto'>
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-hc-red" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>
            <span className="mx-auto mb-auto">Cargando Google Maps...</span>
          </div>
        ) : (<div className='sr-only'>Google Map</div>)
      }
    </div>
  )
}

export default GoogleMap