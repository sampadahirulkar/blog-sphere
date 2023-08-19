"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from "./Background.module.css";
import { Route, Routes, useLocation } from 'react-router-dom';



export default function page() {
  return (
    <>
        <div style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh"
        }}>
        <Image className='w-full h-full object-cover rounded-ig'
             src={"/basic.webp"}
             alt="entrance"
             layout='fill'
             objectFit='cover'
             />
        </div>
        <div className='py-20'></div>
        <div className='flex flex-row ml-20 py-10'>
            <div className='text-8xl px-8'>B</div>
            <div className='text-8xl px-8'>L</div>
            <div className='text-8xl px-8'>O</div>
            <div className='text-8xl px-8'>G</div>
            <div className='text-8xl px-8'>S</div>
            <div className='text-8xl px-8'>P</div>
            <div className='text-8xl px-8'>H</div>
            <div className='text-8xl px-8'>E</div>
            <div className='text-8xl px-8'>R</div>
            <div className='text-8xl px-8'>E</div>
        </div>
        
       
         <div className='text-violet-900 text-center font-mono mt-60'>
        <Link href="/homepage">Click to discover</Link>
        </div>
    </> 
  )
}
