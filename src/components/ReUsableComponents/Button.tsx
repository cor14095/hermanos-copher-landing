
'use client'

import React from 'react'

export const Button = () => {

  const QuotebuttonAction = async() =>{
    console.log("ingresando a cotización de repuestos"); 
  }  

  return (
    <div>
      <button className="mb-10 ml-24 p-5 inline-block absolute bg-blue-500 rounded-md text-slate-100" onClick={QuotebuttonAction}>
        Cotizar mi Repuesto
      </button>
    </div>
  )
}
