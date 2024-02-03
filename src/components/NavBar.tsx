'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { GrMultiple } from "react-icons/gr";


export const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div id='nav' className='fixed left-0 top-0 w-full bg-hc-blue z-20 px-10 h-[6vh] md:h-[10vh]'>
      <div className="hidden md:flex md:flex-row h-full">
        <div className="flex mr-auto h-full">
          <div className="h-full flex max-w-[15vw] max-h-fit p-4">
            <Image
              src="/images/Logo-Hermanos-Copher-LKQ.png" 
              alt="Logo Hermanos Copher y LKQ"
              width={4210}
              height={997}
              className="md:max-w-screen h-full lg:w-[70vw] 2xl:50[vw]"
            />
          </div>
        </div>
        <div className='justify-center items-center text-inverted-space flex grow'>
          {/** Web Nav */}
          <ul className='flex flex-row gap-1 z-20 text-white h-full'>
            <li className='hover:from-hc-blue hover:from-40% hover:bg-gradient-to-b transition font-light
              hover:shadow shadow-hc-blue cursor-pointer w-full h-full flex p-3'>
              <div className="flex flex-row m-auto text-[1vw]">
                <CiHome className="m-auto"/>
                <Link className="pl-2 m-auto" href='/'>Inicio</Link>
              </div>
            </li>
            <li className='hover:from-hc-blue hover:from-40% hover:bg-gradient-to-b transition font-light
              hover:shadow shadow-hc-blue cursor-pointer w-full h-full flex p-3'>
              <div className="flex flex-row m-auto text-[1vw]">
                <FaLocationArrow className="m-auto"/>
                <Link className="pl-2 m-auto" href='/#ubicaciones'>Ubicación</Link>
              </div>
            </li>
            <li className='hover:from-hc-blue hover:from-40% hover:bg-gradient-to-b transition font-light
              hover:shadow shadow-hc-blue cursor-pointer w-full h-full flex p-3'>
              <div className="flex flex-row m-auto text-[1vw]">
                <IoMdTime className="m-auto"/>
                <Link className="pl-2 m-auto" href='/#horarios'>Horarios</Link>
              </div>
            </li>
            <li className='hover:from-hc-blue hover:from-40% hover:bg-gradient-to-b transition font-light
              hover:shadow shadow-hc-blue cursor-pointer w-full h-full flex p-3'>
              <div className="flex flex-row m-auto text-[1vw]">
                <GrMultiple className="m-auto"/>
                <Link className="pl-2 m-auto" href='https://cophershop.com/' target="_blank">Catalogo</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex ml-auto flex-col w-[20vw]">
          <div className="flex grow m-auto">
            <a href="tel:22079999" className="mt-auto" target="_blank">
              <div className="flex flex-row gap-2">
                <FaPhoneAlt size={20} color="white" className="m-auto" /> <span className="text-white text-xl font-bold m-auto">2207-9999</span>
              </div>
            </a>
          </div>
          <div className="flex grow m-auto">
            <a href="https://wa.me/+50255643166" className="mb-auto" target="_blank">
              <div className="flex flex-row mb-auto gap-2">
                <FaWhatsapp size={20} color="green" className="m-auto" /> <span className="text-white text-xl font-bold m-auto">5564-3166</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className='m-auto flex justify-between items-center p-4 text-inverted-space md:hidden h-full'>
      <span className="text-3xl text-gray-100">Menu</span>
        {/** Mobile Nav */}
        <div className='block z-10' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} className="text-gray-100" /> : <AiOutlineMenu size={20} className="text-gray-100"/>}
        </div>
        <div className={`absolute md:hidden top-0 ${nav ? 'left-0' : 'left-full'} flex col justify-center items-center text-center w-full h-screen bg-hc-blue/80 ease-in duration-300`}>
        <div className="flex flex-col">
            <ul>
              <li className='p-5 text-4xl text-gray-100' onClick={handleNav}>
                <div className="flex flex-row  m-auto">
                  <CiHome/>
                  <Link href='/#' className="pl-3">Inicio</Link>
                </div>
              </li>
              <li className='p-5 text-4xl text-gray-100' onClick={handleNav}>
                <div className="flex flex-row m-auto">
                  <FaLocationArrow/>
                  <Link href='/#ubicaciones' className="pl-3">Ubicación</Link>
                </div>
              </li>
              <li className='p-5 text-4xl text-gray-100' onClick={handleNav}>
                <div className="flex flex-row m-auto">
                  <IoMdTime/>
                  <Link href='/#horarios' className="pl-3">Horarios</Link>
                </div>
              </li>
              <li className='p-5 text-4xl text-gray-100' onClick={handleNav}>
                <div className="flex flex-row m-auto">
                  <GrMultiple/>
                  <Link href='https://cophershop.com/' target="_blank" className="pl-3">Catalogo</Link>
                </div>
              </li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  )
};
