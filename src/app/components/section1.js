import React from 'react'
import Image from "next/image"

export default function section1() {
  return (
    
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Image src={"/images/img1.png"} width={600} height={600}/>
            </div>
            <div className="info">

            </div>
        </div>

  )
}
