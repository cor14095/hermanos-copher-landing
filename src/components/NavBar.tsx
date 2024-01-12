'use client'

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  
  return (
    <div id='nav' className='fixed left-0 top-0 w-full bg-hc-red z-20'>
      <div className='m-auto justify-center items-center p-4 text-inverted-space hidden md:flex'>
        {/** Web Nav */}
        <ul className='flex z-20 text-white font-bold'>
          <li className='p-4 hover:text-black'>
            <Link href='/#'>Inicio</Link>
          </li>
          <li className='p-4 hover:text-black'>
            <Link href='/#location'>Ubicación</Link>
          </li>
          <li className='p-4 hover:text-black'>
            <Link href='/#contact'>Contacto</Link>
          </li>
        </ul>
      </div>
      <div className='m-auto flex justify-end items-center p-4 text-inverted-space md:hidden'>
        {/** Mobile Nav */}
        <div className='block z-10' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={`absolute md:hidden top-0 ${ nav ? 'left-0' : 'left-full' } flex justify-center items-center text-center w-full h-screen bg-hc-red/80 ease-in duration-300`}>
          <ul>
            <li className='p-5 text-4xl hover:text-black' onClick={handleNav}>
              <Link href='/#'>Inicio</Link>
            </li>
            <li className='p-5 text-4xl hover:text-black' onClick={handleNav}>
              <Link href='/#location'>Ubicación</Link>
            </li>
            <li className='p-5 text-4xl hover:text-black' onClick={handleNav}>
              <Link href='/#contact'>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};
