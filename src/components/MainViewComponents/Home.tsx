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
        src="/images/Banner-Copher.png"
        alt='background picture'
        width={3840}
        height={2160}
        className='h-[90vh] w-[1440px] absolut top-0 left-0 m-auto'
        priority={true}
      />
      <Button
        text='Cotizar mi repuesto'
        className='bottom-[20%] left-[10%] absolute bg-hc-blue text-slate-100 hover:scale-125 duration-200'
        onClick={myOnclick}
      />
    </div>
  )
}
