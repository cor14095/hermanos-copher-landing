'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '../ReUsableComponents/Button'

export const Home = () => {

  const myOnclick = function() {
    console.log("Hola mundo!")
  }

  return (
    <div className='relative flex'>
      <Image
        src="/images/Inicio.png"
        alt='background picture'
        width={3840}
        height={2160}
        className='h-[40vh] md:h-[90vh] w-full absolut top-0 left-0 m-auto'
        priority={true}
      />
      <Button
        text='Cotizar mi repuesto'
        className='bottom-[25%] left-[8%] absolute bg-hc-blue text-slate-100 hover:scale-125 duration-200 font-bold tracking-wider md:text-lg text-sm px-2'
        onClick={myOnclick}
      />
    </div>
  )
}
