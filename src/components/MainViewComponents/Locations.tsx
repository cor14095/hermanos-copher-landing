'use client'

import React, { useEffect } from 'react'
import { Button } from '../ReUsableComponents/Button';
import LocationElement from '../ReUsableComponents/LocationElement';

export const Locations = () => {

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

  // LocationsElements
  const locations = [
    {"title": "Periférico", "adress": "Anillo Periferico 3-00, zona 3"},
    {"title": "Calz. San Juan", "adress": "Calzada San Juan 8-89, Colonia el Rosario zona 3 de Mixco"},
    {"title": "Chimaltenango", "adress": "Km 57.5 Carretera Interamericana, Sector Norte, Aldea Buena Vista."},
    {"title": "Barberena", "adress": "Colonia Campo Real Km. 53 Barberena, Santa Rosa"},
    {"title": "Escuintla", "adress": "Avenida Centroamerica 10-11"},
    {"title": "Xela", "adress": "7a Avenida 3-28, Quetzaltenango"},
    {"title": "Teculután", "adress": "Km. 121 Ruta al Atlantico, Teculután Zacapa Local 3 y 4"},
    {"title": "Huehuetenango", "adress": "Sector6, Cambote zona 11, Huehuetenango"},
    {"title": "Centro de Servicio", "adress": "Anillo Periferico 4-10 zona 3, Guatemala"}
  ]

  function initMap(): void {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center,
      zoom: 13
    });

    // The marker, positioned at HC locations
    markerPosition.map((mark, index) => {
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
    if (document && document.readyState === "complete") initMap()
  })

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-row pl-20 pr-20 pt-10 pb-10 gap-3 w-full'>
        <div className='m-auto text-hc-blue text-xl md:text-6xl'>
          <span>Ubicaciones</span>
        </div>
        <div className='h-1 grow m-auto bg-hc-red rounded-md' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full h-[100vh] md:h-[40vh]'>
        <div className='text-slate-100 w-full flex flex-col bg-hc-store-blue bg-cover'>
          <div className='flex flex-col mt-auto text-center'>
            <span className='font-bold text-2xl m-auto tracking-widest'>Encuentra la tienda más cercana</span>
            <span className='m-auto'>Contamos con una amplia variedad de repuestos <br></br>
            para todas las marcas y modelos de autos</span>
          </div>
          <div className='flex mb-auto p-10'>
            <Button
              text='Tiendas'
              className='bg-hc-red m-auto hover:scale-125 duration-200 font-bold text-xl tracking-wider outline outline-1 outline-offset-2 outline-white px-2'
            />
          </div>
        </div>
        <div className='w-full h-full max-w-full'>
          <div id="map" className='w-full h-full'></div>
        </div>
      </div>
      <div className='bg-hc-red max-h-[40vh] md:h-[20vh] grid grid-cols-2 md:grid-cols-5 gap-3 py-4 px-2 overflow-y-auto'>
        {
          locations.map((element, index) => {
            return (
              <LocationElement 
                title={element.title}
                adress={element.adress}
                key={index}
              />
            )
          })
        }
      </div>
    </div>
  )
}
