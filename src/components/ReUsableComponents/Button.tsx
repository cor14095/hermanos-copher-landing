'use client'

import React from 'react'

interface Props {
  className?: string,
  text: string,
  type?: string,
  wpMessage?: string
}

export const Button = ({ className, text, type, wpMessage }: Props) => {
  const baseClassName = "md:py-2 md:px-8 sm:p-5 inline-block rounded-lg shadow-md"

  const defaultButtonAction = async() => {
    switch(type) {
      case "whatsapp":
        window.open( wpMessage, '_blank');
        break;
      default:
        console.log("Hola mundo!")
    }
  }  

  return (
    <button 
        className={ 
          baseClassName + 
          ` ${className ? className : ''}`
        } 
        onClick={() => {defaultButtonAction()}}
      >
        { text }
      </button>
  )
}
