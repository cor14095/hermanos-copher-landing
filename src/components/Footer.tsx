import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='bg-black h-[20vh] w-full'>
        <div className='grid grid-cols-2 gap-1'>
          <div className='flex flex-col'>
            Hola
          </div>
          <div className='flex flex-col-reverse'>
            Mundo
          </div>
        </div>
      </div>
    </footer>
  )
}
