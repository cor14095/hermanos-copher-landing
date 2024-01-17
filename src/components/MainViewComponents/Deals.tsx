'use client'

import Image from 'next/image'
import React from 'react'

export const Deals = () => {

  const dealsImages = [
    { src: "/images/Mazda-3.png", alt: "Radiadores Mazda 3", height: 1200, width: 1200, link: "https://wa.me/+50255643166?text=Me%20interesa%20la%20oferta%20de%20radiadores%20Mazda%203" },
    { src: "/images/Aceite.png", alt: "Aceites", height: 1200, width: 1200, link: "https://wa.me/+50255643166?text=Me%20interesa%20la%20oferta%20de%20aceites." },
    { src: "/images/Compresores.png", alt: "Compresores", height: 1200, width: 1200, link: "https://wa.me/+50255643166?text=Me%20interesa%20la%20certificacion%20y%20reparacion%20de%20compresores." }
  ]

  const dealClick = function (text: string) {
    window.open(
      text,
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  return (
    <div className='bg-hc-blue grid grid-row-4'>
      <div className='flex flex-row pl-20 pr-20 pt-10 pb-10 gap-3'>
        <div className='m-auto text-slate-100 text-xl md:text-4xl'>
          <span>Ofertas</span>
        </div>
        <div className='h-1 grow m-auto bg-hc-red rounded-md' />
      </div>
      <div className='p-10 m-auto font-normal text-white text-center'>
        <p className='tracking-widest text-lg md:text-xl'>Aprovecha nuestras promociones del mes</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-6 pl-10 pr-10 m-auto'>
        {
          dealsImages.map((image, index) => {
            return (
              <div key={index} className='h-full'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className='w-[80%] m-auto md:w-[80%] hover:scale-[1.15] duration-200 hover:cursor-pointer'
                  onClick={() => dealClick(image.link) }
                />
              </div>
            )
          })
        }
      </div>
      <div className='p-10 m-auto font-thin italic text-white'>
        <p className='text-sm tracking-wider'>*Aplican restricciones, por tiempo limitado</p>
      </div>
    </div>
  )
}
