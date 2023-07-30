import { Button } from 'antd'
import React from 'react'
import { ImSearch } from "react-icons/im"
import Logo from '../components/logo' 
import Link from 'next/link'

export default function Name(){
    return(
        <div className='bg-purple-200 h-24 flex flex-row'>
            <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
            <div className='py-2 px-2 flex flex-row gap-5'>
                <div className='text-start ml-0'>
                <input type="text" className="block mt-6 w-52 h-9 px-1 py-2 bg-violet-200 border border-slate-400 rounded-full text-sm  shadow-2xl placeholder-zinc-900" placeholder='Search... '/>
                </div>
                <span className='text-slate-700 text-2xl py-8'>
                    <ImSearch/>  
                </span>
            </div> 
            
            <div className=' py-2'>
                <Logo/>
            </div>
            <div className='py-10  text-zinc-900 flex flex-row gap-5'>
                <Link href={"/"}>Log in</Link>
                <div>|</div>
                <Link href={"/"}>Sign up</Link>
            </div>
            </div>
        </div>
    )
}