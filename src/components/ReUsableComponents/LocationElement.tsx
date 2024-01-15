import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

interface Prop {
  title: string,
  adress: string,
}

const LocationElement = ({ title, adress }: Prop) => {
  return (
    <div className='flex overflow-hidden'>
      <div className='m-auto flex flex-row'>
        <div className='pt-1'>
          <IoLocationSharp size={25} color="blue"/>
        </div>
        <div className='flex flex-col'>
          <span className="text-white text-lg md:text-xl font-black">{title}</span>
          <span className='text-white text-sm font-light text-wrap'>{adress}</span>
        </div>
      </div>
    </div>
  )
}

export default LocationElement