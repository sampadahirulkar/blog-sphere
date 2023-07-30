"use client";
import Image from 'rc-image'
import Link from 'next/link';


export default function 
() {
  return (
    <div className='bg-violet-50 w-4/6 h-80 shadow-xl'>
        <div className='text-gray-800 py-2 px-4 text-xl font-mono'>Protecting Personal Data in the Age of IoT</div>
       <div className='m-auto'>
        <Link href={"http://localhost:3000/blogs/CP-2"}>
        <Image className='w-full h-full object-cover rounded-ig ml-4'
             src={"/CS2.jpg"}
             alt="Blogsphere"
             width={400}
             height={200}
             />
        </Link>
        <div className='text-gray-700 py-1 px-5 text-sm font-mono flex flex-row gap-4'>
            <div>Author Name</div>
            <div>.</div>
            <div>dd/mm/yy</div>
            <div>.</div>
            <div>Category</div>
        </div>
        <div className='text-gray-500 py-2 px-5 text-sm font-mono'>
            Lorem ipsum jbiwe gefcux2rix uxnyxyu fxhniy xbnry xbnyrb xnrni nxtf  ew hsjad hsvdbhwg nzahgdv unuad hgndz
        </div>
      </div>
    </div>
  )
}
