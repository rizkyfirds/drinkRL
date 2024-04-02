import React from 'react'
import Logo from "../../assets/logo.svg"
export default function Footer() {
  return (
    <div className='h-full bg-gray-500 flex justify-between'>
        <div className=''>
            <img src={Logo} alt="" />
        </div>
        <div className='flex '>
            <div>
                a
            </div>
            <div>
                a
            </div>
        </div>
    </div>
  )
}
