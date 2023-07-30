import React from 'react'
import { ImInstagram,ImTwitter,ImYoutube,ImHome,AiOutlineBook } from "react-icons/im"
import Link from 'next/link'
import StickySectionHeader from "@mayank1513/sticky-section-header";

export default function Header(){
  return(
    <div className=''>
      
    <header className="bg-violet-100">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className='text-gray-800'>
          <Link href="http://localhost:3000/"><ImHome /></Link>
        </div>
        <div className='text-gray-800'>
          <Link href="/">Categories</Link>
        </div>
        <div className='text-gray-800'>
          <Link href={"/"}>Trending</Link>
        </div>
        <div className='text-gray-800'>
          <Link href="/">Careers</Link>
        </div>
        <div className='text-gray-800'>
          <Link href="/">About us</Link>
        </div>
        <div className='text-gray-800'>
          <Link href="/">Socials</Link>
        </div>
      </div>
    </header>
    
    </div>
  )
}