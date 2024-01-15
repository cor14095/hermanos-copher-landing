'use client'
import React, { useEffect } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { Button } from '../ReUsableComponents/Button';

export const Locations = () => {
  let map: google.maps.Map;
  const center: google.maps.LatLngLiteral = { lat: 14.6472287, lng: -90.5254478 };

  //Markers
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
    initMap()
  })

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row pl-20 pr-20 pt-10 pb-10 gap-3'>
        <div className='m-auto text-hc-blue'>
          <span>Ubicaciones</span>
        </div>
        <div className='h-1 grow m-auto bg-hc-red rounded-md' />
      </div>
      <div className='flex flex-row w-screen h-[40vh]'>
        <div className='bg-hc-blue text-slate-100 w-full flex flex-col'>
          <div className='flex flex-col mt-auto'>
            <span className='font-bold text-2xl m-auto'>Encuentra la tienda mas cercana</span>
            <span className='m-auto'>contamos con una amplia variedad de repuestos <br></br>
            para todas las marcas y modelos de autos</span>
          </div>
          <div className='flex mb-auto p-10'>
            <Button
              text='Tiendas'
              className='bg-hc-red border-2 border-white m-auto hover:scale-125 duration-200'
            />
          </div>
        </div>
        <div className='bg-hc-red w-full h-full'>
          <div id="map" className='w-full h-full'></div>
        </div>
      </div>
      <div className='bg-hc-red flex flex-col h-[30vh] '>
        <div className='mt-auto flex flex-row'>

          <div className='m-auto flex flex-row'>
            <IoLocationSharp size={25} color="blue"/>
              <div className='flex flex-col'>
                <span className="text-white text-2xl font-black">Periférico</span>
                <span className='text-white text-sm font-medium'>Anillo Periferico 3-00,<br></br>zona 3</span>
              </div>
          </div>
          <div className='m-auto flex flex-row'>
            <IoLocationSharp size={25} color="blue"/>
              <div className='flex flex-col'>
                <span className="text-white text-2xl font-black">Calz. San Juan</span>
                <span className='text-white text-sm font-medium'>Calzada San Juan 8-89, Colonia<br></br>el Rosario zona 3 de Mixco</span>
              </div>
          </div>
          <div className='m-auto flex flex-row'>
            <IoLocationSharp size={25} color="blue"/>
              <div className='flex flex-col'>
                <span className="text-white text-2xl font-black">Chimaltenango</span>
                <span className='text-white text-sm font-medium'>Km 57.5 Carretera Interamericana,<br></br>Sector Norte, Aldea Buena Vista.</span>
              </div>
          </div>
          <div className='m-auto flex flex-row'>
            <IoLocationSharp size={25} color="blue"/>
              <div className='flex flex-col'>
                <span className="text-white text-2xl font-black">Barberena</span>
                <span className='text-white text-sm font-medium'>Colonia Campo Real Km.<br></br>53 Barberena, Santa Rosa</span>
              </div>
          </div>
          <div className='m-auto flex flex-row'>
            <IoLocationSharp size={25} color="blue"/>
              <div className='flex flex-col'>
                <span className="text-white text-2xl font-black">Escuintla</span>
                <span className='text-white text-sm font-medium'>Avenida Centroamerica<br></br>10-11</span>
              </div>
          </div>

        </div>

        <div className=' mt-auto mb-auto flex flex-row'>
            
            <div className='m-auto flex flex-row'>
              <IoLocationSharp size={25} color="blue"/>
              <div className='flex flex-col'>
                <span className="text-white text-2xl font-black">Xela</span>
                <span className='text-white text-sm font-medium'>7a Avenida 3-28,<br></br>Quetzaltenango</span>
              </div>
            </div>
            <div className='m-auto flex flex-row'>
              <IoLocationSharp size={25} color="blue"/>
              <div className='flex flex-col'>
                <span className="text-white text-2xl font-black">Teculután</span>
                <span className='text-white text-sm font-medium'>Km. 121 Ruta al Atlantico,<br></br>Teculután Zacapa Local 3 y 4</span>
              </div>
            </div>
            <div className='m-auto flex flex-row'>
              <IoLocationSharp size={25} color="blue"/>
              <div className='flex flex-col'>
                <span className="text-white text-2xl font-black">Huehuetenango</span>
                <span className='text-white text-sm font-medium'>Sector6, Cambote zona 11,<br></br>Huehuetenango</span>
              </div>
            </div>
            <div className='m-auto flex flex-row'>
              <IoLocationSharp size={25} color="blue"/>
              <div className='flex flex-col'>
                <span className="text-white text-2xl font-black">Centro de Servicio</span>
                <span className='text-white text-sm font-medium'>Anillo Periferico 4-10 zona 3,<br></br>Guatemala</span>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}
