import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

interface Prop {
  title: string,
  adress: string,
}

const LocationElement = ({ title, adress }: Prop) => {
  return (
    <div className='flex overflow-hidden min-h-[12vh] md:min-h-full'>
      <div className='flex flex-row'>
        <div className='pt-1'>
          <IoLocationSharp size={25} color="blue"/>
        </div>
        <div className='flex flex-col min-h-[8vh]'>
          <span className="text-white text-md md:text-xl font-black">{title}</span>
          <span className='text-white text-xs font-light italic text-wrap'>{adress}</span>
        </div>
      </div>
    </div>
  )
}

export default LocationElement