import React from 'react'
import Maps from "../../assets/maps.png"
export default function Available() {
  return (
    <div className="h-screen w-full">
      <div className="h-1/2 text-[#FCF6EE]">
        <p className="font-black text-xxl">AVAILABLE</p>
      </div>
      <div className="h-1/2 w-full">
        <img src={Maps} alt="" className='mx-auto h-full'/>
      </div>
    </div>
  )
}
