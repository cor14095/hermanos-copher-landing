import React from 'react'
import { Button } from '../ReUsableComponents/Button';
import LocationElement from '../ReUsableComponents/LocationElement';
import GoogleMap from '../ReUsableComponents/GoogleMap';

export const Locations = () => {

  const wpMessage = "https://cophershop.com/"

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

  return (
    <div className='flex flex-col w-full' id="ubicaciones">
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
              type='whatsapp'
              wpMessage={wpMessage}
            />
          </div>
        </div>
        <div className='w-full h-full max-w-full'>
          <GoogleMap />
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
