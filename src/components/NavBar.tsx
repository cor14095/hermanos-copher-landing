'use client'

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div id='nav' className='fixed left-0 top-0 w-full bg-hc-red z-20 pl-10 pr-10'>
      <div className="hidden md:flex">
        <div className="flex mr-auto">
          <div className="h-full flex">
            <span className="m-auto">LogoImg</span>
          </div>
        </div>
        <div className='m-auto justify-center items-center p-4 text-inverted-space flex'>
          {/** Web Nav */}
          <ul className='flex flex-row gap-24 z-20 text-white'>
            <li className='p-4 hover:text-black text-[20px] font-light'>
              <Link href='/#'>Inicio</Link>
            </li>
            <li className='p-4 hover:text-black text-[20px] font-light'>
              <Link href='/#location'>Ubicación</Link>
            </li>
            <li className='p-4 hover:text-black text-[20px] font-light'>
              <Link href='/#contact'>Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="flex ml-auto flex-col">
          <div className="flex grow">
            <a href="tel:22079999" className="mt-auto" target="_blank">
              <div className="flex flex-row gap-2">
                <FaPhoneAlt size={20} color="white" className="m-auto" /> <span className="text-white text-xl font-bold m-auto">2207-9999</span>
              </div>
            </a>
          </div>
          <div className="flex grow">
            <a href="https://wa.me/+50255643166" className="mb-auto" target="_blank">
              <div className="flex flex-row mb-auto gap-2">
                <FaWhatsapp size={20} color="green" className="m-auto" /> <span className="text-white text-xl font-bold m-auto">5564-3166</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className='m-auto flex justify-end items-center p-4 text-inverted-space md:hidden'>
        {/** Mobile Nav */}
        <div className='block z-10' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={`absolute md:hidden top-0 ${nav ? 'left-0' : 'left-full'} flex justify-center items-center text-center w-full h-screen bg-hc-red/80 ease-in duration-300`}>
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
