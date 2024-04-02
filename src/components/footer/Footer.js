import React from 'react'
import Logo from "../../assets/logo.svg"
import { FaInstagram, FaYoutube , FaTwitter  } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='h-full flex justify-between'>
        <div className=''>
            <img src={Logo} alt="" />
        </div>
        <div className='flex gap-x-16 my-auto mr-10'>
            <div className='text-[#FCF6EE] text-3xl'>
                <p>About</p>
                <p>Company</p>
                <p>Product</p>
                <p>Seller</p>
            </div>
            <div className='text-[#FCF6EE] text-3xl'>
            <p className='text-4xl font-bold'>Contact</p>
                <p>Email</p>
                <p>Phone: 0000000</p>
                <div className='flex gap-x-5'>
                    <FaInstagram/>
                    <FaYoutube />
                    <FaTwitter />
                </div>
            </div>
        </div>
    </div>
  )
}
