import React from 'react'

export const Schedule = () => {
  return (
    <div className='bg-white w-full h-full md:h-[20vh] grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5' id='horarios'>
      <div className='flex flex-col'>
        <div className='flex m-auto mb-0'>
          <p className='text-hc-blue m-auto text-xl md:text-6xl max-w-xl text-wrap grow'>Horarios</p>
        </div>
        <div className='flex m-auto mt-0'>
          <p className='text-hc-blue m-auto text-xl md:text-6xl max-w-xl text-wrap'>De Atención</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-auto text-center'>
        <div className='grid grid-cols-1 text-hc-blue pt-5 pb-5 m-auto w-full gap-1'>
          <div className='flex w-full pl-5'>
            <span className='text-sm md:text-2xl font-bold'>Lunes a Viernes</span>
          </div>
          <div className='flex flex-col w-full pl-5 gap-0'>
            <div className='flex'>
              <span className='text-xs md:text-lg mt-auto'>Periférico y Centro De Servicio</span>
            </div>
            <div className='flex'>
              <span className='text-xs md:text-lg italic mb-auto'>De 8:00 a 16:00 Hrs</span>
            </div>
          </div>
          <div className='flex flex-col w-full pl-5 gap-0'>
            <div className='flex'>
              <span className='text-xs md:text-lg mt-auto'>Departamentales y Mixco</span>
            </div>
            <div className='flex'>
              <span className='text-xs md:text-lg italic mb-auto'>De 8:00 a 12:30 Hrs</span>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 text-hc-blue pt-5 pb-5 m-auto w-full gap-1'>
          <div className='flex w-full pl-5'>
            <span className='text-sm md:text-2xl font-bold'>Sábado</span>
          </div>
          <div className='flex flex-col w-full pl-5 gap-0'>
            <div className='flex'>
              <span className='text-xs md:text-lg mt-auto'>Periférico y Centro De Servicio</span>
            </div>
            <div className='flex'>
              <span className='text-xs md:text-lg italic mb-auto'>De 8:00 a 17:30 Hrs</span>
            </div>
          </div>
          <div className='flex flex-col w-full pl-5 gap-0'>
            <div className='flex'>
              <span className='text-xs md:text-lg mt-auto'>Departamentales y Mixco</span>
            </div>
            <div className='flex'>
              <span className='text-xs md:text-lg italic mb-auto'>De 8:00 a 17:00 Hrs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
