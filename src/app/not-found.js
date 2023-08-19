"use client"
import Image from "rc-image"
export default function NotFound() {
  return (
    <div className="justify-center ">
        <Image className='w-full h-full object-cover rounded-ig'
            src={"/not_found.webp"}
            alt="entrance"
            height={800}
            width={1500}

        />
    </div>
  )
}
