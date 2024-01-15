'use client'

import React from 'react'

interface Props {
  className?: string,
  text: string,
  onClick?: Function
}

export const Button = ({ className, onClick, text }: Props) => {
  const baseClassName = "md:py-2 md:px-8 sm:p-5 inline-block rounded-lg shadow-md"

  const QuotebuttonAction = async() =>{
    console.log("ingresando a cotización de repuestos"); 
  }  

  return (
    <button 
        className={ 
          baseClassName + 
          ` ${className ? className : ''}`
        } 
        onClick={() => {onClick ? onClick() : QuotebuttonAction()}}
      >
        { text }
      </button>
  )
}
