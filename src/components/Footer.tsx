'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const Footer = () => {
  const [fbCoordinates, setFbCoordinates] = useState({ x1: 0, y1: 0, x2: 0, y2:0 })
  const [igCoordinates, setIgCoordinates] = useState({ x1: 0, y1: 0, x2: 0, y2:0 })
  const [wpCoordinates, setWpCoordinates] = useState({ x1: 0, y1: 0, x2: 0, y2:0 })
  const [xCoordinates, setXCoordinates] = useState({ x1: 0, y1: 0, x2: 0, y2:0 })
  const [coordsCalc, setCoordsCalc] = useState(false)
  
  //let fbCoordinates = { x1: 0, y1: 0, x2: 100, y2:100 }

  const mapSocialImage = () => {
    const img = window.document.getElementById("socialsImg")

    let logosH = img?.clientHeight
    let logosW = img?.clientWidth

    // FB Logo coordinates
    let x1 = 0
    let y1 = 0
    let x2 = logosW ? (logosW / 4) * 1 : 0 
    let y2 = logosH ? logosH : 0
    setFbCoordinates({ x1: x1, y1: y1, x2: x2, y2:y2 })

    // IG Logo coordinates
    x1 = x2
    // y1 = 0
    x2 = logosW ? (logosW / 4) * 2 : 0 
    // y2 = logosH ? logosH : 0
    setIgCoordinates({ x1: x1, y1: y1, x2: x2, y2:y2 })

    // WhatsApp Logo coordinates
    x1 = x2
    x2 = logosW ? (logosW / 4) * 3 : 0 
    setWpCoordinates({ x1: x1, y1: y1, x2: x2, y2:y2 })

    // WhatsApp Logo coordinates
    x1 = x2
    x2 = logosW ? logosW : 0
    setXCoordinates({ x1: x1, y1: y1, x2: x2, y2:y2 })
  }
  
  useEffect(() => {
    mapSocialImage()
    setCoordsCalc(true)
  }, [coordsCalc])

  return (
    <footer>
      <div className='bg-black h-[20vh] w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1 w-full h-full'>
          <div className='flex flex-col w-full h-full'>
            <Image
              src='/images/Iconos-Redes.png'
              alt='Logos redes sociales'
              width={8192}
              height={1922}
              className='max-w-[30%] m-auto'
              useMap='#socials'
              id='socialsImg'
            />

            <map name='socials'>
              <area shape='rectangle' coords={`${fbCoordinates.x1}, ${fbCoordinates.y1}, ${fbCoordinates.x2}, ${fbCoordinates.y2}`} alt='Facebook' href='https://www.facebook.com/hermanoscopherperiferico'/>
              <area shape='rectangle' coords={`${igCoordinates.x1}, ${igCoordinates.y1}, ${igCoordinates.x2}, ${igCoordinates.y2}`} alt='Instagram' href='https://www.instagram.com/hermanos.copher/'/>
              <area shape='rectangle' coords={`${wpCoordinates.x1}, ${wpCoordinates.y1}, ${wpCoordinates.x2}, ${wpCoordinates.y2}`} alt='Whatsapp' href='https://wa.me/+50255643166'/>
              <area shape='rectangle' coords={`${xCoordinates.x1}, ${xCoordinates.y1}, ${xCoordinates.x2}, ${xCoordinates.y2}`} alt='Twitter/X' href='https://twitter.com/hermanoscopher'/>
            </map>
          </div>
          <div className='flex flex-col-reverse w-full h-full'>
            <Image
              src='/images/Logo-Hermanos-Copher-LKQ.png'
              alt='Logos redes sociales'
              width={8192}
              height={1922}
              className='max-w-[30%] m-auto'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
