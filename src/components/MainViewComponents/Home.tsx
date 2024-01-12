import React from 'react'
import Image from 'next/image'

export const Home = () => {
  return (
    <div>
      <Image
        src="/images/Banner-Copher.png"
        alt='background picture'
        width={1440}
        height={779}
        className='h-[90vh]'
      />
    </div>
  )
}
