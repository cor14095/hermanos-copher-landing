'use client'

import React from 'react'

interface Props {
  className?: string,
  text: string,
  onClick?: Function
}

export const Button = ({ className, onClick, text }: Props) => {
  const baseClassName = "md:p-5 sm:p-5 md:text-base text-[14px] inline-block rounded-md shadow-md"

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
