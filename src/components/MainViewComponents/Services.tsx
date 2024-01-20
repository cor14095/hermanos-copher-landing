import Image from 'next/image'
import React from 'react'

export const Services = () => {

  const serviceImages = [
    { src: "/images/Repuestos-Nuevos-Copher.png", alt: "Repuestos nuevos", height: 1200, width: 1200, description: "" },
    { src: "/images/Repuestos-usados-Copher.png", alt: "Repuestos usados", height: 1200, width: 1200, description: "" },
    { src: "/images/Reparacion-copher.png", alt: "Reparacion y certificacion", height: 1200, width: 1200, description: "" },
    { src: "/images/Centro-de-Servicio.png", alt: "Centro de servicio", height: 1200, width: 1200, description: "" }
  ]

  return (
    <div className='grid grid-row-2'>
      <div className='flex flex-row pl-20 pr-20 pt-10 pb-10 gap-3'>
        <div className='m-auto text-hc-blue text-sm md:text-3xl font-bold'>
          <span>Nuestros Servicios</span>
        </div>
        <div className='h-[3px] grow m-auto bg-hc-red rounded-md' />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 pl-10 pr-10 mb-10'>
        {
          serviceImages.map((image, index) => {
            return (
              <div key={index} className='h-full relative'>
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className='w-full' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
