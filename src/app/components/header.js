import React from 'react'
import { ImInstagram,ImTwitter,ImYoutube,ImHome } from "react-icons/im"
import Link from 'next/link'

export default function Header(){
  return(
    <header className="bg-pink-400">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between font-mono text-center py-3">
        <div className='text-pink-800'>
          <Link href="/"><ImHome /></Link>
        </div>
        <div className='text-pink-800'>
          <Link href="https://www.bigcommerce.com/ecommerce-answers/what-about-us-page/">About us</Link>
        </div>
        <div className='text-pink-800'>
          <Link href={"https://paperpile.com/g/find-credible-sources/"}>Sources</Link>
        </div>
        <div className='text-pink-800'>
          <Link href="https://www.gemnote.com/blog/youtube-merch-creators-websites">Merch</Link>
        </div>
        <div className='text-pink-800 flex gap-6'>
          <Link href={"https://www.instagram.com/"}><ImInstagram /></Link>
          <Link href={"https://twitter.com/i/flow/login?redirect_after_login=%2F"}><ImTwitter /></Link>
          <Link href={"https://www.youtube.com/"}><ImYoutube /></Link>
          
        </div>
        <div>
          <input type="text" className="mt-1 block w-60 px-3 py-2 bg-rose-200 border border-pink-800 rounded-full text-sm shadow-sm placeholder-pink-800" placeholder='Search... '/>
        </div> 
      </div>
    </header>
  )
}