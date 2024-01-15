import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='bg-black h-[20vh] w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1 w-full h-full'>
          <div className='flex flex-col w-full h-full'>
            <Image
              src='/images/Iconos-Redes.png'
              alt='Logos redes sociales'
              width={8192}
              height={1922}
              className='max-w-[30%] m-auto'
            />
          </div>
          <div className='flex flex-col-reverse w-full h-full'>
            <Image
              src='/images/Logo-Hermanos-Copher-LKQ.png'
              alt='Logos redes sociales'
              width={8192}
              height={1922}
              className='max-w-[30%] m-auto'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
