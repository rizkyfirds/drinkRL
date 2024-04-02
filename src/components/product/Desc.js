import React from 'react'
import red from "../../assets/red.png";
import green from "../../assets/green.png";
import purple from "../../assets/purple.png";

export default function Desc({ drink,bgColor , title, sugar, flavor,flavorPercent,  soda}) {
  return (
    <div className={`h-[500px] w-full bg-[${bgColor}] my-10 flex`}>
        <div className='w-2/3 text-[#FCF6EE] m-auto mx-10'>
            <p className='text-9xl'>{title}</p>
            <div className='justify-between text-3xl flex'>
                <p>Sugar</p>
                <p>{sugar}</p>
            </div>
            <div className='justify-between text-3xl flex'>
                <p>{flavor}</p>
                <p>{flavorPercent}</p>
            </div>
            <div className='justify-between text-3xl flex'>
                <p>Soda</p>
                <p>{soda}</p>
            </div>
        </div>
        <div className='w-1/3 h-full'>
            <img src={drink} alt="" className='h-full mx-auto py-20 rotate-12'/>
        </div>
    </div>
  )
}
