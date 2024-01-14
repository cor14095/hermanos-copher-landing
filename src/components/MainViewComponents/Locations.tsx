import React from 'react'

export const Locations = () => {
  return (
    <div>
      <h1 className='text-hc-blue'>Ubicaciones</h1>
      <div className='flex flex-row w-screen h-[30vh]'>
        <div className='bg-hc-blue text-slate-100 w-full text-center flex flex-col items-center '>
          <h2 className='font-bold text-2xl'>Encuentra la tienda mas cercana</h2>
          <p>contamos con una amplia variedad de repuestos para todas las marcas y modelos de autos</p>
        </div>
        <div className='bg-hc-red w-full'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.153462145149!2d-90.52545318892481!3d14.647228675873478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a202d931dcd9%3A0x4418b907b1b8af6b!2sHermanos%20Copher%20Perif%C3%A9rico!5e0!3m2!1ses-419!2sgt!4v1705270428752!5m2!1ses-419!2sgt"
        width="600" height="450" style="${border:0;}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}
